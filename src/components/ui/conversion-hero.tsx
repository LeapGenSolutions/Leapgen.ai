import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SmartCTA } from './smart-cta';
import { LeadMagnet } from './lead-magnet';
import { AnimatedBackground } from './animated-background';
import { FloatingElements } from './floating-elements';
import { 
  Play, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Star,
  ArrowRight,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConversionHeroProps {
  variant?: 'default' | 'value-focused' | 'social-proof' | 'urgency' | 'video-first';
  industry?: string;
  className?: string;
}

const ConversionHero: React.FC<ConversionHeroProps> = ({
  variant = 'default',
  industry,
  className
}) => {
  const [currentVariant, setCurrentVariant] = useState(variant);
  
  // A/B testing logic - randomly assign variant if not specified
  useEffect(() => {
    if (variant === 'default') {
      const variants: ('value-focused' | 'social-proof' | 'urgency')[] = ['value-focused', 'social-proof', 'urgency'];
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      setCurrentVariant(randomVariant);
    }
  }, [variant]);

  const getHeadlineByVariant = () => {
    const headlines = {
      'value-focused': {
        main: "Cut Your Operating Costs by 40%",
        sub: "Automate complex business processes with enterprise AI that pays for itself in 90 days"
      },
      'social-proof': {
        main: "Join 1,000+ Companies Using AI to Scale",
        sub: "See why industry leaders choose our platform to automate workflows and boost productivity"
      },
      'urgency': {
        main: "Transform Your Business This Quarter",
        sub: "Limited-time implementation program helps you deploy AI solutions in just 30 days"
      },
      'video-first': {
        main: "Watch How AI Transforms Business Operations",
        sub: "2-minute demo shows real companies achieving 40% cost reduction with our platform"
      }
    };
    return headlines[currentVariant as keyof typeof headlines] || headlines['value-focused'];
  };

  const getIndustrySpecificContent = () => {
    const content = {
      healthcare: {
        statistic: "50% reduction in documentation time",
        benefit: "More time for patient care",
        compliance: "HIPAA compliant"
      },
      finance: {
        statistic: "99.9% uptime SLA",
        benefit: "SOC 2 certified security",
        compliance: "Bank-grade encryption"
      },
      retail: {
        statistic: "25% increase in conversion",
        benefit: "Personalized customer experience",
        compliance: "GDPR ready"
      },
      manufacturing: {
        statistic: "40% cost reduction",
        benefit: "Predictive maintenance",
        compliance: "ISO certified"
      },
      government: {
        statistic: "60% faster reporting",
        benefit: "Automated compliance",
        compliance: "FedRAMP ready"
      },
      enterprise: {
        statistic: "40% cost reduction",
        benefit: "Enterprise-grade automation",
        compliance: "SOC 2 certified"
      }
    };
    
    // Always return a valid content object, defaulting to enterprise if industry not found
    const selectedContent = industry && content[industry as keyof typeof content] 
      ? content[industry as keyof typeof content] 
      : content.enterprise;
    
    return selectedContent;
  };

  const headline = getHeadlineByVariant();
  const industryContent = getIndustrySpecificContent();

  if (currentVariant === 'video-first') {
    return (
      <div className={cn("relative min-h-screen flex items-center overflow-hidden", className)}>
        <AnimatedBackground variant="mesh" theme="primary" className="absolute inset-0 opacity-30" />
        <FloatingElements count={8} variant="mixed" theme="primary" className="absolute inset-0 opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white font-semibold">Watch 2-Minute Demo</p>
                    <p className="text-gray-300 text-sm">See real results in action</p>
                  </div>
                </div>
                
                {/* Social proof overlay */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Live Demo</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="text-white text-sm font-medium">{industryContent.statistic}</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-hero gradient-text-primary mb-6">
                {headline.main}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {headline.sub}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm">{industryContent.benefit}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm">{industryContent.compliance}</span>
                </div>
              </div>

              <SmartCTA
                variant="value-driven"
                primaryText="Start Free Demo"
                secondaryText="See how AI can transform your operations"
                href="/contact?type=demo"
                industry={industry}
                showSocialProof={true}
                showValueProp={true}
                className="text-left"
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (currentVariant === 'social-proof') {
    return (
      <div className={cn("relative min-h-screen flex items-center overflow-hidden", className)}>
        <AnimatedBackground variant="gradient" theme="primary" className="absolute inset-0 opacity-40" />
        <FloatingElements count={6} variant="circles" theme="primary" className="absolute inset-0 opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Social proof banner */}
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">Rated 4.9/5 by 1,000+ companies</span>
            </div>

            <h1 className="text-hero gradient-text-primary mb-6">
              {headline.main}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {headline.sub}
            </p>

            {/* Company logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12 opacity-60">
              {['TechCorp', 'HealthPlus', 'RetailMax', 'FinanceFirst', 'ManufacturePro'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-2"></div>
                  <div className="text-gray-400 text-sm">{company}</div>
                </div>
              ))}
            </div>

            {/* Key metrics */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-gray-300">Companies Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-gray-300">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-gray-300">Implementation Time</div>
              </div>
            </div>

            <SmartCTA
              variant="social-proof"
              primaryText="Join Leading Companies"
              secondaryText="See why industry leaders trust our platform"
              href="/contact?type=demo"
              industry={industry}
              showSocialProof={true}
              showValueProp={true}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  if (currentVariant === 'urgency') {
    return (
      <div className={cn("relative min-h-screen flex items-center overflow-hidden", className)}>
        <AnimatedBackground variant="particles" theme="primary" className="absolute inset-0 opacity-30" />
        <FloatingElements count={5} variant="hexagons" theme="primary" className="absolute inset-0 opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Urgency banner */}
            <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-semibold">Q4 Implementation Program - Limited Spots</span>
            </div>

            <h1 className="text-hero gradient-text-primary mb-6">
              {headline.main}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {headline.sub}
            </p>

            {/* Urgency metrics */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">7 Days</div>
                  <div className="text-gray-300">To Apply</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">15 Spots</div>
                  <div className="text-gray-300">Remaining</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">$50K</div>
                  <div className="text-gray-300">Implementation Credit</div>
                </div>
              </div>
            </div>

            <SmartCTA
              variant="urgency"
              primaryText="Apply for Q4 Program"
              urgencyText="Only 15 spots remaining for this quarter"
              href="/contact?type=demo&program=q4"
              industry={industry}
              showSocialProof={false}
              showUrgency={true}
            />

            {/* Trust indicators */}
            <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No long-term contract</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Default value-focused variant
  return (
    <div className={cn("relative min-h-screen flex items-center overflow-hidden", className)}>
      <AnimatedBackground variant="mesh" theme="primary" className="absolute inset-0 opacity-30" />
      <FloatingElements count={6} variant="mixed" theme="primary" className="absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero gradient-text-primary mb-6">
              {headline.main}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {headline.sub}
            </p>

            {/* Value propositions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-white">ROI typically achieved in 90 days</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-white">Trusted by 1,000+ companies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">{industryContent.compliance} & secure</span>
              </div>
            </div>

            <SmartCTA
              variant="value-driven"
              primaryText="Calculate Your Savings"
              secondaryText="See your ROI projection in 2 minutes"
              href="/resources/roi-calculator"
              industry={industry}
              showSocialProof={true}
              showValueProp={true}
              className="text-left"
            />
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main metric card */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{industryContent.statistic}</div>
                <div className="text-gray-300 mb-4">{industryContent.benefit}</div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{industryContent.compliance}</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { ConversionHero };