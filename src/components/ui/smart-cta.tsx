import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientButton } from './gradient-button';
import { EnhancedCard } from './enhanced-card';
import { Clock, Users, Star, TrendingUp, ArrowRight, Calendar, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/utils/analytics';

interface SmartCTAProps {
  variant?: 'primary' | 'urgency' | 'social-proof' | 'value-driven' | 'personalized';
  size?: 'sm' | 'lg';
  primaryText: string;
  secondaryText?: string;
  urgencyText?: string;
  href: string;
  className?: string;
  showSocialProof?: boolean;
  showUrgency?: boolean;
  showValueProp?: boolean;
  industry?: string;
  productType?: string;
}

const SmartCTA: React.FC<SmartCTAProps> = ({
  variant = 'primary',
  size = 'lg',
  primaryText,
  secondaryText,
  urgencyText,
  href,
  className,
  showSocialProof = true,
  showUrgency = true,
  showValueProp = true,
  industry,
  productType
}) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [recentSignups, setRecentSignups] = useState(0);
  const analytics = useAnalytics();

  // Dynamic urgency timer
  useEffect(() => {
    if (showUrgency) {
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endOfDay.getTime() - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft(`${hours}h ${minutes}m`);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showUrgency]);

  // Simulate recent activity
  useEffect(() => {
    setRecentSignups(Math.floor(Math.random() * 8) + 12); // 12-20 recent signups
  }, []);

  const getIndustryValueProp = () => {
    const valueProp = {
      healthcare: "HIPAA-compliant AI that reduces documentation time by 50%",
      finance: "SOC 2 certified platform with 99.9% uptime guarantee",
      retail: "Boost sales conversion by 25% with predictive analytics",
      manufacturing: "Reduce operational costs by 40% with smart automation",
      government: "Secure, compliant AI solutions for public sector",
      enterprise: "Enterprise-grade AI with dedicated support"
    };
    return industry ? valueProp[industry as keyof typeof valueProp] : "Transform your business with enterprise AI";
  };

  const getSocialProofData = () => {
    const data = {
      healthcare: { icon: Star, text: "Trusted by 200+ healthcare providers", rating: "4.9/5" },
      finance: { icon: TrendingUp, text: "Used by top financial institutions", rating: "ROI: 340%" },
      retail: { icon: Users, text: "Powers 500+ retail businesses", rating: "99.9% uptime" },
      manufacturing: { icon: TrendingUp, text: "Optimizes 300+ factories worldwide", rating: "40% cost savings" },
      government: { icon: Users, text: "Deployed in 50+ government agencies", rating: "Security certified" },
      enterprise: { icon: Star, text: "Chosen by Fortune 500 companies", rating: "4.8/5 rating" }
    };
    return industry ? data[industry as keyof typeof data] : data.enterprise;
  };

  const socialProof = getSocialProofData();

  if (variant === 'urgency') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("max-w-md mx-auto", className)}
      >
        <EnhancedCard variant="gradient" className="p-6 text-center bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold">Limited Time Offer</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{primaryText}</h3>
          
          {urgencyText && (
            <p className="text-orange-300 mb-4">{urgencyText}</p>
          )}
          
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-4">
            <div className="text-2xl font-bold text-red-400">{timeLeft}</div>
            <div className="text-red-300 text-sm">remaining today</div>
          </div>
          
          <GradientButton 
            variant="healthcare" 
            size={size} 
            className="w-full animate-pulse"
            asChild
            onClick={() => analytics.trackCTA('urgency', primaryText, 'hero', 'urgency')}
          >
            <a href={href}>
              {primaryText} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </GradientButton>
          
          <p className="text-xs text-gray-400 mt-3">
            🔥 {recentSignups} businesses signed up today
          </p>
        </EnhancedCard>
      </motion.div>
    );
  }

  if (variant === 'social-proof') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("max-w-lg mx-auto", className)}
      >
        <EnhancedCard variant="glass" className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <socialProof.icon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">{socialProof.text}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{primaryText}</h3>
          
          {secondaryText && (
            <p className="text-gray-300 mb-4">{secondaryText}</p>
          )}
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{socialProof.rating}</div>
              <div className="text-xs text-gray-400">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">&lt; 24hrs</div>
              <div className="text-xs text-gray-400">Setup Time</div>
            </div>
          </div>
          
          <GradientButton 
            variant="primary" 
            size={size} 
            className="w-full"
            asChild
            onClick={() => analytics.trackCTA('social-proof', primaryText, 'hero', 'social-proof')}
          >
            <a href={href}>
              {primaryText} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </GradientButton>
          
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
            <span className="text-xs text-gray-400 ml-2">from 1,000+ reviews</span>
          </div>
        </EnhancedCard>
      </motion.div>
    );
  }

  if (variant === 'value-driven') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("max-w-lg mx-auto", className)}
      >
        <EnhancedCard variant="gradient" className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Free Implementation</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{primaryText}</h3>
          
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
            <p className="text-primary-light">{getIndustryValueProp()}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div>
              <div className="text-lg font-bold text-primary">Free</div>
              <div className="text-xs text-gray-400">Setup</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">30 Days</div>
              <div className="text-xs text-gray-400">Trial</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
          
          <GradientButton 
            variant="primary" 
            size={size} 
            className="w-full"
            asChild
            onClick={() => analytics.trackCTA('value-driven', primaryText, 'hero', 'value-driven')}
          >
            <a href={href}>
              {primaryText} <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </GradientButton>
          
          <p className="text-xs text-gray-400 mt-3">
            ✅ No credit card required • Cancel anytime • Setup in 15 minutes
          </p>
        </EnhancedCard>
      </motion.div>
    );
  }

  // Default primary variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("text-center", className)}
    >
      <h3 className="text-2xl font-bold text-white mb-4">{primaryText}</h3>
      
      {secondaryText && (
        <p className="text-gray-300 mb-6 max-w-md mx-auto">{secondaryText}</p>
      )}
      
      {showSocialProof && (
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="text-sm text-gray-400 ml-2">4.9/5</span>
          </div>
          <div className="text-sm text-gray-400">
            <Users className="w-4 h-4 inline mr-1" />
            1,000+ companies
          </div>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GradientButton 
          variant="primary" 
          size={size}
          asChild
          onClick={() => analytics.trackCTA('primary', primaryText, 'hero', 'primary')}
        >
          <a href={href}>
            {primaryText} <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </GradientButton>
        
        {showValueProp && (
          <div className="text-sm text-gray-400">
            <Calendar className="w-4 h-4 inline mr-1" />
            Free 30-day trial
          </div>
        )}
      </div>
      
      {showUrgency && timeLeft && (
        <div className="mt-4 text-sm text-orange-400">
          ⏰ Limited time: Setup bonus expires in {timeLeft}
        </div>
      )}
    </motion.div>
  );
};

export { SmartCTA };