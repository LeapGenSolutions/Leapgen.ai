import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Heart,
  Users,
  FileText,
  BarChart3
} from 'lucide-react';

const HealthcareROICalculator = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    bedCount: '',
    monthlyPatients: '',
    avgDocTime: '',
    hourlyRate: '',
    currentErrors: '',
    complianceCost: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const calculateROI = () => {
    const monthlyPatients = parseInt(formData.monthlyPatients) || 0;
    const avgDocTime = parseInt(formData.avgDocTime) || 0;
    const hourlyRate = parseInt(formData.hourlyRate) || 0;
    const currentErrors = parseInt(formData.currentErrors) || 0;
    const complianceCost = parseInt(formData.complianceCost) || 0;

    // AI Benefits Calculations
    const timeReduction = 0.5; // 50% reduction in documentation time
    const errorReduction = 0.8; // 80% reduction in errors
    const complianceImprovement = 0.6; // 60% reduction in compliance costs

    // Monthly Savings
    const timeSavings = (monthlyPatients * avgDocTime * timeReduction * hourlyRate) / 60;
    const errorSavings = currentErrors * errorReduction * 1000; // Assume $1000 per error
    const complianceSavings = complianceCost * complianceImprovement;

    const totalMonthlySavings = timeSavings + errorSavings + complianceSavings;
    const annualSavings = totalMonthlySavings * 12;

    // Implementation Cost (estimated)
    const implementationCost = 50000; // Base implementation cost
    const monthlyLicenseCost = 2000; // Monthly software cost
    const annualCost = implementationCost + (monthlyLicenseCost * 12);

    const netAnnualSavings = annualSavings - annualCost;
    const roiPercentage = ((netAnnualSavings / annualCost) * 100);
    const paybackMonths = annualCost / totalMonthlySavings;

    setResults({
      timeSavings,
      errorSavings,
      complianceSavings,
      totalMonthlySavings,
      annualSavings,
      implementationCost,
      annualCost,
      netAnnualSavings,
      roiPercentage,
      paybackMonths
    });
  };

  const benefits = [
    {
      icon: Clock,
      title: "50% Time Reduction",
      description: "Reduce documentation time per patient encounter"
    },
    {
      icon: Heart,
      title: "Improved Patient Care",
      description: "More time for face-to-face patient interaction"
    },
    {
      icon: CheckCircle,
      title: "Enhanced Compliance",
      description: "Automated HIPAA compliance and audit trails"
    },
    {
      icon: TrendingUp,
      title: "Reduced Burnout",
      description: "Decrease physician administrative burden"
    }
  ];

  const useCases = [
    {
      title: "Ambient AI Documentation",
      features: [
        "Real-time conversation capture",
        "Automated clinical note generation",
        "EHR integration",
        "HIPAA compliant processing"
      ],
      savings: "40-60% documentation time reduction"
    },
    {
      title: "Clinical Decision Support",
      features: [
        "AI-powered diagnosis assistance",
        "Drug interaction alerts",
        "Treatment recommendations",
        "Evidence-based protocols"
      ],
      savings: "25% reduction in diagnostic errors"
    },
    {
      title: "Patient Flow Optimization",
      features: [
        "Predictive scheduling",
        "Resource allocation",
        "Capacity planning",
        "Wait time optimization"
      ],
      savings: "30% improvement in patient throughput"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="healthcare" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="healthcare" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h1 className="text-hero gradient-text-healthcare">
                Healthcare ROI Calculator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Calculate the potential return on investment from implementing AI solutions in your healthcare organization. Get personalized projections based on your specific metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Benefits for Healthcare</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how AI can transform your healthcare operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <EnhancedCard variant="default" className="text-center p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enter your organization's details to get a personalized ROI projection
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <EnhancedCard variant="default" className="overflow-hidden">
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold mb-4">Organization Details</h3>
                </div>
                <div className="px-6 pb-6 space-y-6">
                  <div>
                    <Label htmlFor="organizationType">Organization Type</Label>
                    <Select onValueChange={(value) => handleInputChange('organizationType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospital">Hospital</SelectItem>
                        <SelectItem value="clinic">Clinic</SelectItem>
                        <SelectItem value="practice">Private Practice</SelectItem>
                        <SelectItem value="health-system">Health System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bedCount">Number of Beds (if applicable)</Label>
                    <Input
                      id="bedCount"
                      type="number"
                      value={formData.bedCount}
                      onChange={(e) => handleInputChange('bedCount', e.target.value)}
                      placeholder="e.g., 200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyPatients">Monthly Patient Encounters</Label>
                    <Input
                      id="monthlyPatients"
                      type="number"
                      value={formData.monthlyPatients}
                      onChange={(e) => handleInputChange('monthlyPatients', e.target.value)}
                      placeholder="e.g., 1000"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="avgDocTime">Average Documentation Time (minutes per patient)</Label>
                    <Input
                      id="avgDocTime"
                      type="number"
                      value={formData.avgDocTime}
                      onChange={(e) => handleInputChange('avgDocTime', e.target.value)}
                      placeholder="e.g., 20"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate">Average Clinician Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={formData.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      placeholder="e.g., 100"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentErrors">Monthly Documentation Errors</Label>
                    <Input
                      id="currentErrors"
                      type="number"
                      value={formData.currentErrors}
                      onChange={(e) => handleInputChange('currentErrors', e.target.value)}
                      placeholder="e.g., 50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="complianceCost">Monthly Compliance Costs ($)</Label>
                    <Input
                      id="complianceCost"
                      type="number"
                      value={formData.complianceCost}
                      onChange={(e) => handleInputChange('complianceCost', e.target.value)}
                      placeholder="e.g., 10000"
                    />
                  </div>

                  <GradientButton variant="healthcare" size="lg" className="w-full" onClick={calculateROI}>
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate ROI
                  </GradientButton>
                </div>
              </EnhancedCard>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {results ? (
                <EnhancedCard variant="default" className="overflow-hidden">
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold mb-4">Your ROI Projection</h3>
                  </div>
                  <div className="px-6 pb-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          ${results.netAnnualSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Net Annual Savings</div>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {results.roiPercentage.toFixed(1)}%
                        </div>
                        <div className="text-sm text-muted-foreground">ROI Percentage</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Monthly Time Savings:</span>
                        <span className="font-semibold">${results.timeSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Error Reduction:</span>
                        <span className="font-semibold">${results.errorSavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Compliance Savings:</span>
                        <span className="font-semibold">${results.complianceSavings.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total Monthly Savings:</span>
                          <span>${results.totalMonthlySavings.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-semibold">{results.paybackMonths.toFixed(1)} months</span>
                      </div>
                    </div>

                    <GradientButton variant="healthcare" size="lg" className="w-full" asChild>
                      <Link to="/contact?type=demo&industry=healthcare">
                        Schedule Strategy Call
                      </Link>
                    </GradientButton>
                  </div>
                </EnhancedCard>
              ) : (
                <EnhancedCard variant="default" className="overflow-hidden">
                  <div className="text-center py-12 px-6">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ready to Calculate?</h3>
                    <p className="text-muted-foreground">
                      Fill out the form on the left to see your personalized ROI projections
                    </p>
                  </div>
                </EnhancedCard>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Healthcare AI Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore specific applications and their potential impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <EnhancedCard variant="default" className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {useCase.savings}
                  </div>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a detailed implementation plan tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="healthcare" size="lg" asChild>
              <Link to="/contact?type=demo&industry=healthcare" className="flex items-center gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/healthcare">Explore Healthcare Solutions</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthcareROICalculator;