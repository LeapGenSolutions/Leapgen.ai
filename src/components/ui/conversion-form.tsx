import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientButton } from './gradient-button';
import { EnhancedCard } from './enhanced-card';
import { Input } from './input';
import { Label } from './label';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Clock,
  Users,
  Gift,
  X,
  Calendar,
  Mail,
  Phone,
  Building
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { useAnalytics } from '@/utils/analytics';

interface ConversionFormProps {
  title: string;
  subtitle?: string;
  formType: 'demo' | 'consultation' | 'trial' | 'download';
  industry?: string;
  className?: string;
  inline?: boolean;
  showBenefits?: boolean;
  showUrgency?: boolean;
  showSocialProof?: boolean;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  employees: string;
  interest: string;
  message: string;
}

const ConversionForm: React.FC<ConversionFormProps> = ({
  title,
  subtitle,
  formType,
  industry,
  className,
  inline = false,
  showBenefits = true,
  showUrgency = true,
  showSocialProof = true
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recentSignups, setRecentSignups] = useState(0);
  const analytics = useAnalytics();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    employees: '',
    interest: formType,
    message: ''
  });

  const totalSteps = formType === 'demo' ? 3 : 2;

  useEffect(() => {
    setRecentSignups(Math.floor(Math.random() * 12) + 8); // 8-20 recent signups
    analytics.trackFormStart(formType, inline ? 'inline' : 'popup');
  }, []);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      analytics.trackFormStep(formType, currentStep, totalSteps);
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      analytics.trackFormSubmit(formType, true);
      analytics.trackFunnelStep('form_completed', 1, { formType, industry });
      
      const successMessage = getSuccessMessage();
      toast({
        title: "Success!",
        description: successMessage,
      });
    } catch (error) {
      analytics.trackFormSubmit(formType, false, (error as Error).message);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const getSuccessMessage = () => {
    const messages = {
      demo: 'Demo scheduled! We\'ll contact you within 24 hours.',
      consultation: 'Consultation booked! Expect our call within 24 hours.',
      trial: 'Trial activated! Check your email for login details.',
      download: 'Download ready! Check your email for the link.'
    };
    return messages[formType];
  };

  const getFormBenefits = () => {
    const benefits = {
      demo: [
        'Personalized product demonstration',
        'Custom ROI analysis for your business',
        'Q&A with our AI specialists',
        'Implementation timeline discussion'
      ],
      consultation: [
        'Expert analysis of your current processes',
        'Customized AI strategy recommendations',
        'ROI projections and cost analysis',
        'Implementation roadmap'
      ],
      trial: [
        'Full access to all features for 30 days',
        'Dedicated onboarding specialist',
        'Custom setup for your use case',
        'Priority support and training'
      ],
      download: [
        'Comprehensive implementation guide',
        'Industry-specific use cases',
        'ROI calculation templates',
        'Best practices and lessons learned'
      ]
    };
    return benefits[formType];
  };

  const getFormTitle = () => {
    const titles = {
      demo: 'Schedule Your Personalized Demo',
      consultation: 'Book Your Strategy Consultation',
      trial: 'Start Your Free 30-Day Trial',
      download: 'Download Your Free Guide'
    };
    return titles[formType];
  };

  const getCTAText = () => {
    const cta = {
      demo: 'Schedule Demo',
      consultation: 'Book Consultation',
      trial: 'Start Free Trial',
      download: 'Download Now'
    };
    return cta[formType];
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "w-3 h-3 rounded-full transition-colors",
            i + 1 <= currentStep ? "bg-primary" : "bg-gray-600"
          )}
        />
      ))}
    </div>
  );

  const Step1Form = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="Your full name"
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
            onChange={(e) => updateFormData('email', e.target.value)}
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
            onChange={(e) => updateFormData('company', e.target.value)}
            placeholder="Company name"
            required
            className="bg-gray-800 border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="+1 (609) 722-6768"
            className="bg-gray-800 border-gray-600"
          />
        </div>
      </div>

      <GradientButton 
        type="button"
        onClick={nextStep}
        variant="primary"
        size="lg"
        className="w-full"
        disabled={!formData.name || !formData.email || !formData.company}
      >
        Continue <ArrowRight className="w-4 h-4 ml-2" />
      </GradientButton>
    </motion.div>
  );

  const Step2Form = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="role">Job Title</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => updateFormData('role', e.target.value)}
            placeholder="Your role"
            className="bg-gray-800 border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="employees">Company Size</Label>
          <select 
            value={formData.employees}
            onChange={(e) => updateFormData('employees', e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1,000 employees</option>
            <option value="1000+">1,000+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Tell us about your needs</Label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => updateFormData('message', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white resize-none"
          placeholder="Describe your current challenges and goals..."
        />
      </div>

      <div className="flex gap-3">
        <GradientButton 
          type="button"
          onClick={prevStep}
          variant="secondary"
          size="lg"
          className="flex-1"
        >
          Back
        </GradientButton>
        
        {formType === 'demo' && totalSteps === 3 ? (
          <GradientButton 
            type="button"
            onClick={nextStep}
            variant="primary"
            size="lg"
            className="flex-1"
          >
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </GradientButton>
        ) : (
          <GradientButton 
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            className="flex-1"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Processing...
              </>
            ) : (
              <>
                {getCTAText()} <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </GradientButton>
        )}
      </div>
    </motion.div>
  );

  const Step3Form = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Choose Your Preferred Time</h3>
        <p className="text-gray-300">Select when you'd like to have your demo</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Preferred Day</Label>
          <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white">
            <option>Tomorrow</option>
            <option>This Week</option>
            <option>Next Week</option>
            <option>Flexible</option>
          </select>
        </div>
        <div>
          <Label>Preferred Time</Label>
          <select className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white">
            <option>Morning (9-12 PM)</option>
            <option>Afternoon (12-5 PM)</option>
            <option>Evening (5-7 PM)</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <GradientButton 
          type="button"
          onClick={prevStep}
          variant="secondary"
          size="lg"
          className="flex-1"
        >
          Back
        </GradientButton>
        
        <GradientButton 
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="flex-1"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
              Scheduling...
            </>
          ) : (
            <>
              Schedule Demo <Calendar className="w-4 h-4 ml-2" />
            </>
          )}
        </GradientButton>
      </div>
    </motion.div>
  );

  const SuccessState = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">Success!</h3>
      <p className="text-gray-300 mb-6">{getSuccessMessage()}</p>
      
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
        <h4 className="text-white font-semibold mb-2">What happens next?</h4>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>We'll contact you within 24 hours</span>
          </div>
          {formType === 'demo' && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Demo will be personalized for your use case</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>Confirmation email sent to {formData.email}</span>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400">
        <Shield className="w-4 h-4 inline mr-1" />
        Your information is secure and never shared
      </div>
    </motion.div>
  );

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {totalSteps > 1 && <StepIndicator />}
      
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <SuccessState />
        ) : (
          <>
            {currentStep === 1 && <Step1Form />}
            {currentStep === 2 && <Step2Form />}
            {currentStep === 3 && <Step3Form />}
          </>
        )}
      </AnimatePresence>
      
      {!isSubmitted && (
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
          <Shield className="w-3 h-3" />
          <span>Secure & confidential • No spam • Cancel anytime</span>
        </div>
      )}
    </form>
  );

  if (inline) {
    return (
      <div className={cn("max-w-2xl mx-auto", className)}>
        <EnhancedCard variant="gradient" className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits sidebar */}
            {showBenefits && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{getFormTitle()}</h3>
                {subtitle && <p className="text-gray-300 mb-6">{subtitle}</p>}
                
                <div className="space-y-4 mb-6">
                  {getFormBenefits().map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {showSocialProof && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-white font-medium">Social Proof</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      {recentSignups} professionals signed up this week
                    </div>
                  </div>
                )}
                
                {showUrgency && (
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-400 font-medium">Limited Time</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      Free implementation worth $25K for this month's signups
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Form */}
            <div>
              <FormContent />
            </div>
          </div>
        </EnhancedCard>
      </div>
    );
  }

  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <EnhancedCard variant="glass" className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
        {subtitle && <p className="text-gray-300 mb-6 text-center text-sm">{subtitle}</p>}
        <FormContent />
      </EnhancedCard>
    </div>
  );
};

export { ConversionForm };