import { useState, useEffect, useCallback } from 'react';
import { useAnalytics } from '@/utils/analytics';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  connectionType: string;
  memoryUsage?: number;
  jsHeapSize?: number;
}

interface PerformanceScore {
  overall: number;
  speed: number;
  accessibility: number;
  seo: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const analytics = useAnalytics();

  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    // Speed score based on Core Web Vitals
    const getSpeedScore = () => {
      let score = 100;
      
      // FCP scoring (ideal < 1.8s, poor > 3.0s)
      if (metrics.firstContentfulPaint > 3000) score -= 30;
      else if (metrics.firstContentfulPaint > 1800) score -= 15;
      
      // LCP scoring (ideal < 2.5s, poor > 4.0s)
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
      
      // FID scoring (ideal < 100ms, poor > 300ms)
      if (metrics.firstInputDelay > 300) score -= 20;
      else if (metrics.firstInputDelay > 100) score -= 10;
      
      // CLS scoring (ideal < 0.1, poor > 0.25)
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
      
      return Math.max(0, score);
    };

    const speedScore = getSpeedScore();
    
    // Simplified scores for now (in real app, these would be more complex)
    const accessibilityScore = 85; // Would need actual accessibility checks
    const seoScore = 90; // Would need SEO analysis
    
    const overallScore = Math.round((speedScore + accessibilityScore + seoScore) / 3);
    
    return {
      overall: overallScore,
      speed: speedScore,
      accessibility: accessibilityScore,
      seo: seoScore
    };
  }, []);

  const measurePerformance = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        await new Promise(resolve => {
          window.addEventListener('load', resolve, { once: true });
        });
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      // Get paint metrics
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get LCP
      let lcp = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          lcp = lastEntry.startTime;
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Give it a moment to capture LCP
        await new Promise(resolve => setTimeout(resolve, 1000));
        observer.disconnect();
      }
      
      // Get CLS
      let cls = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Observe for a bit
        setTimeout(() => observer.disconnect(), 5000);
      }
      
      // Get FID (approximated)
      let fid = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            fid = (entry as any).processingStart - entry.startTime;
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
      
      // Get connection info
      const connection = (navigator as any).connection || 
                        (navigator as any).mozConnection || 
                        (navigator as any).webkitConnection;
      const connectionType = connection?.effectiveType || 'unknown';
      
      // Get memory info
      const memory = (performance as any).memory;
      
      // Calculate TTI (simplified)
      const tti = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      
      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp || fcp + 500, // Fallback estimate
        cumulativeLayoutShift: cls,
        firstInputDelay: fid,
        timeToInteractive: tti,
        connectionType,
        memoryUsage: memory?.usedJSHeapSize,
        jsHeapSize: memory?.totalJSHeapSize
      };
      
      setMetrics(performanceMetrics);
      
      const performanceScore = calculateScore(performanceMetrics);
      setScore(performanceScore);
      
      // Track performance metrics
      analytics.track('performance_measured', {
        ...performanceMetrics,
        score: performanceScore,
        url: window.location.href
      });
      
    } catch (error) {
      console.error('Failed to measure performance:', error);
      analytics.track('performance_measurement_error', { error: error.message });
    } finally {
      setIsLoading(false);
    }
  }, [analytics, calculateScore]);

  const getPerformanceRecommendations = useCallback(() => {
    if (!metrics || !score) return [];
    
    const recommendations = [];
    
    if (metrics.firstContentfulPaint > 2000) {
      recommendations.push({
        type: 'speed',
        priority: 'high',
        title: 'Improve First Contentful Paint',
        description: 'Optimize critical resources and reduce server response time',
        impact: 'High impact on perceived performance'
      });
    }
    
    if (metrics.largestContentfulPaint > 3000) {
      recommendations.push({
        type: 'speed',
        priority: 'high',
        title: 'Optimize Largest Contentful Paint',
        description: 'Optimize images and above-the-fold content loading',
        impact: 'Critical for user experience'
      });
    }
    
    if (metrics.cumulativeLayoutShift > 0.15) {
      recommendations.push({
        type: 'stability',
        priority: 'medium',
        title: 'Reduce Layout Shifts',
        description: 'Set dimensions for images and avoid inserting content above existing content',
        impact: 'Improves visual stability'
      });
    }
    
    if (metrics.memoryUsage && metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      recommendations.push({
        type: 'memory',
        priority: 'medium',
        title: 'Optimize Memory Usage',
        description: 'Consider code splitting and lazy loading to reduce memory footprint',
        impact: 'Better performance on low-end devices'
      });
    }
    
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') {
      recommendations.push({
        type: 'network',
        priority: 'high',
        title: 'Optimize for Slow Connections',
        description: 'Implement aggressive caching and reduce bundle sizes',
        impact: 'Critical for users on slow networks'
      });
    }
    
    return recommendations;
  }, [metrics, score]);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  return {
    metrics,
    score,
    isLoading,
    recommendations: getPerformanceRecommendations(),
    remeasure: measurePerformance
  };
};