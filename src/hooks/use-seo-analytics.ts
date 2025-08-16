import { useState, useEffect } from 'react';
import { useAnalytics } from '@/utils/analytics';

interface SEOMetrics {
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
    fcp: number;
    ttfb: number;
  };
  seoScore: {
    overall: number;
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  technicalSEO: {
    metaTags: number;
    headings: number;
    images: number;
    links: number;
    schema: number;
  };
  issues: Array<{
    type: 'error' | 'warning' | 'info';
    category: 'performance' | 'accessibility' | 'seo' | 'best-practices';
    message: string;
    element?: string;
    recommendation: string;
  }>;
}

export const useSEOAnalytics = () => {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const analytics = useAnalytics();

  const analyzePage = async () => {
    setIsAnalyzing(true);
    
    try {
      // Core Web Vitals
      const coreWebVitals = await measureCoreWebVitals();
      
      // Technical SEO Analysis
      const technicalSEO = analyzeTechnicalSEO();
      
      // Generate Issues and Recommendations
      const issues = generateSEOIssues(coreWebVitals, technicalSEO);
      
      // Calculate SEO Score
      const seoScore = calculateSEOScore(coreWebVitals, technicalSEO, issues);
      
      const seoMetrics: SEOMetrics = {
        coreWebVitals,
        seoScore,
        technicalSEO,
        issues
      };
      
      setMetrics(seoMetrics);
      
      // Track SEO analysis
      analytics.track('seo_analysis_completed', {
        overall_score: seoScore.overall,
        performance_score: seoScore.performance,
        issues_count: issues.length,
        url: window.location.href
      });
      
    } catch (error) {
      console.error('SEO analysis failed:', error);
      analytics.track('seo_analysis_error', { error: error.message });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const measureCoreWebVitals = async (): Promise<SEOMetrics['coreWebVitals']> => {
    return new Promise((resolve) => {
      const metrics = {
        lcp: 0,
        fid: 0,
        cls: 0,
        fcp: 0,
        ttfb: 0
      };

      // TTFB (Time to First Byte)
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        metrics.ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
      }

      // FCP (First Contentful Paint)
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
      }

      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        setTimeout(() => {
          observer.disconnect();
          resolve(metrics);
        }, 1000);
      } else {
        resolve(metrics);
      }

      // CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metrics.cls = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // FID (First Input Delay) - approximated
      let fidValue = 0;
      const handleFirstInput = (event: Event) => {
        fidValue = performance.now() - event.timeStamp;
        metrics.fid = fidValue;
        document.removeEventListener('click', handleFirstInput);
        document.removeEventListener('keydown', handleFirstInput);
      };
      document.addEventListener('click', handleFirstInput, { once: true });
      document.addEventListener('keydown', handleFirstInput, { once: true });
    });
  };

  const analyzeTechnicalSEO = (): SEOMetrics['technicalSEO'] => {
    // Meta Tags Analysis
    const metaTags = {
      title: !!document.querySelector('title'),
      description: !!document.querySelector('meta[name="description"]'),
      keywords: !!document.querySelector('meta[name="keywords"]'),
      ogTitle: !!document.querySelector('meta[property="og:title"]'),
      ogDescription: !!document.querySelector('meta[property="og:description"]'),
      ogImage: !!document.querySelector('meta[property="og:image"]'),
      canonical: !!document.querySelector('link[rel="canonical"]')
    };
    const metaScore = Object.values(metaTags).filter(Boolean).length / Object.keys(metaTags).length * 100;

    // Heading Structure
    const headings = {
      h1: document.querySelectorAll('h1').length,
      h2: document.querySelectorAll('h2').length,
      h3: document.querySelectorAll('h3').length,
      h4: document.querySelectorAll('h4').length,
      h5: document.querySelectorAll('h5').length,
      h6: document.querySelectorAll('h6').length
    };
    const headingScore = headings.h1 === 1 ? 100 : headings.h1 > 1 ? 50 : 0;

    // Images Analysis
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '').length;
    const imageScore = images.length > 0 ? (imagesWithAlt / images.length) * 100 : 100;

    // Links Analysis
    const links = document.querySelectorAll('a[href]');
    const internalLinks = Array.from(links).filter(link => 
      link.getAttribute('href')?.startsWith('/') || 
      link.getAttribute('href')?.includes(window.location.hostname)
    ).length;
    const linkScore = links.length > 0 ? Math.min((internalLinks / links.length) * 100, 100) : 0;

    // Schema Markup
    const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    const schemaScore = schemaScripts.length > 0 ? Math.min(schemaScripts.length * 25, 100) : 0;

    return {
      metaTags: Math.round(metaScore),
      headings: Math.round(headingScore),
      images: Math.round(imageScore),
      links: Math.round(linkScore),
      schema: Math.round(schemaScore)
    };
  };

  const generateSEOIssues = (
    coreWebVitals: SEOMetrics['coreWebVitals'], 
    technicalSEO: SEOMetrics['technicalSEO']
  ): SEOMetrics['issues'] => {
    const issues: SEOMetrics['issues'] = [];

    // Core Web Vitals Issues
    if (coreWebVitals.lcp > 2500) {
      issues.push({
        type: 'error',
        category: 'performance',
        message: 'Largest Contentful Paint is too slow',
        recommendation: 'Optimize images, reduce server response time, and eliminate render-blocking resources'
      });
    }

    if (coreWebVitals.fid > 100) {
      issues.push({
        type: 'warning',
        category: 'performance',
        message: 'First Input Delay is high',
        recommendation: 'Reduce JavaScript execution time and split large tasks'
      });
    }

    if (coreWebVitals.cls > 0.1) {
      issues.push({
        type: 'warning',
        category: 'performance',
        message: 'Cumulative Layout Shift is high',
        recommendation: 'Set dimensions for images and avoid inserting content above existing content'
      });
    }

    // Technical SEO Issues
    if (technicalSEO.metaTags < 80) {
      issues.push({
        type: 'error',
        category: 'seo',
        message: 'Missing important meta tags',
        recommendation: 'Add missing title, description, Open Graph, and other essential meta tags'
      });
    }

    if (technicalSEO.headings < 100) {
      issues.push({
        type: 'warning',
        category: 'seo',
        message: 'Heading structure issues',
        recommendation: 'Use exactly one H1 tag per page and maintain proper heading hierarchy'
      });
    }

    if (technicalSEO.images < 90) {
      issues.push({
        type: 'warning',
        category: 'accessibility',
        message: 'Images missing alt attributes',
        recommendation: 'Add descriptive alt text to all images for better accessibility and SEO'
      });
    }

    if (technicalSEO.schema < 50) {
      issues.push({
        type: 'info',
        category: 'seo',
        message: 'Limited structured data',
        recommendation: 'Add more schema markup to help search engines understand your content'
      });
    }

    return issues;
  };

  const calculateSEOScore = (
    coreWebVitals: SEOMetrics['coreWebVitals'],
    technicalSEO: SEOMetrics['technicalSEO'],
    issues: SEOMetrics['issues']
  ): SEOMetrics['seoScore'] => {
    // Performance Score (based on Core Web Vitals)
    let performanceScore = 100;
    if (coreWebVitals.lcp > 4000) performanceScore -= 30;
    else if (coreWebVitals.lcp > 2500) performanceScore -= 15;
    
    if (coreWebVitals.fid > 300) performanceScore -= 20;
    else if (coreWebVitals.fid > 100) performanceScore -= 10;
    
    if (coreWebVitals.cls > 0.25) performanceScore -= 20;
    else if (coreWebVitals.cls > 0.1) performanceScore -= 10;
    
    if (coreWebVitals.fcp > 3000) performanceScore -= 15;
    else if (coreWebVitals.fcp > 1800) performanceScore -= 8;

    // SEO Score (based on technical SEO)
    const seoScore = (
      technicalSEO.metaTags * 0.3 +
      technicalSEO.headings * 0.2 +
      technicalSEO.schema * 0.2 +
      technicalSEO.links * 0.15 +
      technicalSEO.images * 0.15
    );

    // Accessibility Score (simplified)
    const accessibilityScore = technicalSEO.images * 0.6 + technicalSEO.headings * 0.4;

    // Best Practices Score
    const errorCount = issues.filter(issue => issue.type === 'error').length;
    const warningCount = issues.filter(issue => issue.type === 'warning').length;
    let bestPracticesScore = 100 - (errorCount * 15) - (warningCount * 5);

    // Overall Score
    const overallScore = (
      performanceScore * 0.25 +
      seoScore * 0.3 +
      accessibilityScore * 0.2 +
      bestPracticesScore * 0.25
    );

    return {
      overall: Math.max(0, Math.round(overallScore)),
      performance: Math.max(0, Math.round(performanceScore)),
      accessibility: Math.max(0, Math.round(accessibilityScore)),
      bestPractices: Math.max(0, Math.round(bestPracticesScore)),
      seo: Math.max(0, Math.round(seoScore))
    };
  };

  useEffect(() => {
    // Auto-analyze on page load
    const timer = setTimeout(() => {
      analyzePage();
    }, 2000); // Wait for page to fully load

    return () => clearTimeout(timer);
  }, []);

  return {
    metrics,
    isAnalyzing,
    analyzePage,
    refresh: analyzePage
  };
};