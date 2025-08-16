import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientButton } from './gradient-button';
import { EnhancedCard } from './enhanced-card';
import { Input } from './input';
import { Label } from './label';
import { 
  Download, 
  Calculator, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Gift,
  TrendingUp,
  Shield,
  Clock,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { useAnalytics } from '@/utils/analytics';

interface LeadMagnetProps {
  type: 'roi-calculator' | 'whitepaper' | 'case-study' | 'demo-booking' | 'assessment';
  title: string;
  description: string;
  industry?: string;
  className?: string;
  trigger?: React.ReactNode;
  inline?: boolean;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({
  type,
  title,
  description,
  industry,
  className,
  trigger,
  inline = false
}) => {
  const [isOpen, setIsOpen] = useState(inline);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const analytics = useAnalytics();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    role: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    analytics.trackLeadMagnet(type, title, 'form_submit');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      analytics.trackFunnelStep('lead_magnet_completed', 1, { type, title, industry });
      
      toast({
        title: "Success!",
        description: "Check your email for the download link.",
      });
      
      // Auto-close after success
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      analytics.trackError('lead_magnet_error', (error as Error).message, { type, title });
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const getIcon = () => {
    const iconMap = {
      'roi-calculator': Calculator,
      'whitepaper': FileText,
      'case-study': TrendingUp,
      'demo-booking': Gift,
      'assessment': CheckCircle
    };
    return iconMap[type];
  };

  const getValueProps = () => {
    const valueProps = {
      'roi-calculator': [
        'Instant ROI calculation',
        'Industry-specific metrics',
        'Implementation timeline',
        'Cost-benefit analysis'
      ],
      'whitepaper': [
        'Expert insights',
        'Industry best practices',
        'Real-world case studies',
        'Implementation guide'
      ],
      'case-study': [
        'Detailed implementation',
        'Measurable results',
        'Lessons learned',
        'ROI breakdown'
      ],
      'demo-booking': [
        'Personalized demo',
        'Expert consultation',
        'Custom ROI analysis',
        'Implementation roadmap'
      ],
      'assessment': [
        'Current state analysis',
        'Improvement opportunities',
        'Priority recommendations',
        'Implementation timeline'
      ]
    };
    return valueProps[type];
  };

  const getBenefitText = () => {
    const benefits = {
      'roi-calculator': 'Calculate your potential savings in 2 minutes',
      'whitepaper': 'Get the complete guide to AI implementation',
      'case-study': 'See how companies like yours achieved success',
      'demo-booking': 'Get a personalized demo of our solutions',
      'assessment': 'Discover your AI readiness in 5 minutes'
    };
    return benefits[type];
  };

  const Icon = getIcon();

  const FormContent = () => (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Your name"
            required
            className="bg-gray-800 border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="email">Business Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="you@company.com"
            required
            className="bg-gray-800 border-gray-600"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            placeholder="Company name"
            required
            className="bg-gray-800 border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="role">Job Title</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            placeholder="Your role"
            className="bg-gray-800 border-gray-600"
          />
        </div>
      </div>

      <GradientButton 
        type="submit" 
        disabled={isSubmitting}
        variant="primary"
        size="lg"
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
            Processing...
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            {type === 'demo-booking' ? 'Schedule Demo' : 'Get Instant Access'}
          </>
        )}
      </GradientButton>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <Shield className="w-3 h-3" />
        <span>Your information is secure and never shared</span>
      </div>
    </motion.form>
  );

  const SuccessContent = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Success!</h3>
      <p className="text-gray-300 mb-4">
        {type === 'demo-booking' 
          ? 'We\'ll contact you within 24 hours to schedule your demo.'
          : 'Check your email for the download link.'
        }
      </p>
      <div className="text-sm text-green-400">
        <Clock className="w-4 h-4 inline mr-1" />
        {type === 'demo-booking' ? 'Response within 24 hours' : 'Instant download available'}
      </div>
    </motion.div>
  );

  if (inline) {
    return (
      <div className={cn("max-w-2xl mx-auto", className)}>
        <EnhancedCard variant="gradient" className="p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <p className="text-primary font-semibold">{getBenefitText()}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
              <div className="space-y-3">
                {getValueProps().map((prop, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {isSubmitted ? <SuccessContent /> : <FormContent />}
            </div>
          </div>
        </EnhancedCard>
      </div>
    );
  }

  return (
    <>
      {trigger && (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          {trigger}
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-gray-300">{getBenefitText()}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-6">{description}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-4">What you'll get:</h4>
                  <div className="space-y-3">
                    {getValueProps().map((prop, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-300">{prop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {isSubmitted ? <SuccessContent /> : <FormContent />}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { LeadMagnet };