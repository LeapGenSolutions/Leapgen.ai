import React from 'react';
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { ConversionHero } from '@/components/ui/conversion-hero';
import { ConversionMonitor } from '@/components/ui/conversion-monitor';
import { useAnalytics } from '@/utils/analytics';

const Index = () => {
  const analytics = useAnalytics();

  // Track A/B test exposure
  React.useEffect(() => {
    const heroVariant = Math.random() > 0.5 ? 'original' : 'conversion-optimized';
    analytics.trackABTest('hero-optimization', heroVariant, 'demo_request');
  }, []);

  return (
    <>
      <SEO 
        title="LeapGen.AI - Transform Your Business with AI Solutions"
        description="Boost productivity by 40%, reduce errors by 75%, and unlock powerful insights with LeapGen.AI's enterprise-grade AI solutions. Trusted by 500+ organizations worldwide."
        keywords="AI solutions, artificial intelligence, enterprise AI, business automation, productivity, SurroundAI, Data Coffee, healthcare AI, finance AI"
        url="https://leapgen.ai"
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
      />
      <div className="min-h-screen">
        {/* Use the improved HeroSection instead of A/B testing for now */}
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTASection />
      
        {/* Real-time conversion monitoring */}
        <ConversionMonitor position="bottom-right" />
        
        {/* Performance monitoring */}
        <div id="performance-monitor-root" />
      </div>
    </>
  );
};

export default Index;
