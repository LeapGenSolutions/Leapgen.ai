import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Lightbulb,
  FileText,
  Mic,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

const MedicalDocumentationRevolution = () => {
  const results = [
    {
      metric: "50%",
      label: "Documentation Time",
      description: "Reduction per patient encounter"
    },
    {
      metric: "Increased", 
      label: "Patient Engagement",
      description: "More face-to-face interaction"
    },
    {
      metric: "Enhanced",
      label: "HIPAA Compliance", 
      description: "Automated compliance checks"
    },
    {
      metric: "Reduced",
      label: "Physician Burnout",
      description: "Less administrative burden"
    }
  ];

  const challenges = [
    "Healthcare professionals spending 30-40% of time on documentation",
    "Inefficient manual note-taking affecting patient engagement", 
    "HIPAA compliance risks with traditional documentation",
    "Need for real-time, structured clinical documentation",
    "Physician burnout from repetitive administrative tasks",
    "Seamless EHR integration requirements"
  ];

  const burdenStats = [
    { metric: "30-40%", label: "Time spent on documentation" },
    { aspect: "Patient Interaction", status: "Reduced" },
    { aspect: "Physician Satisfaction", status: "Declining" },
    { aspect: "Care Quality", status: "At Risk" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Ambient Listening",
      description: "AI captures natural conversation during patient encounters"
    },
    {
      step: "2", 
      title: "Real-time Processing",
      description: "Advanced NLP processes speech and extracts clinical information"
    },
    {
      step: "3",
      title: "Structured Documentation",
      description: "Automatically generates formatted clinical notes"
    },
    {
      step: "4",
      title: "EHR Integration",
      description: "Seamlessly integrates with existing electronic health records"
    }
  ];

  const keyFeatures = [
    {
      icon: Mic,
      title: "Ambient AI Transcription",
      description: "Captures natural conversation without disrupting patient care"
    },
    {
      icon: FileText,
      title: "Clinical Documentation",
      description: "Generates structured, accurate clinical notes automatically"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Built-in privacy protections and compliance monitoring"
    },
    {
      icon: Zap,
      title: "EHR Integration",
      description: "Seamless integration with major electronic health record systems"
    }
  ];

  const clinicalBenefits = [
    {
      category: "Clinical Efficiency",
      benefits: [
        "50% reduction in documentation time",
        "Real-time clinical note generation",
        "Automated ICD-10 code suggestions",
        "Streamlined workflow integration"
      ]
    },
    {
      category: "Patient Care Quality",
      benefits: [
        "Increased face-to-face interaction time",
        "More thorough documentation accuracy",
        "Better patient engagement",
        "Reduced documentation errors"
      ]
    },
    {
      category: "Physician Wellness",
      benefits: [
        "Significant reduction in administrative burden",
        "Improved work-life balance",
        "Decreased documentation-related stress",
        "Enhanced job satisfaction"
      ]
    }
  ];

  const complianceFeatures = [
    "End-to-end encryption for all voice data",
    "HIPAA-compliant data processing",
    "Automated audit trails",
    "Role-based access controls",
    "Data retention policy compliance",
    "Secure cloud infrastructure"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="seismic" className="absolute inset-0 opacity-25" />
      <FloatingElements count={10} variant="hexagons" theme="seismic" className="absolute inset-0 opacity-20" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-600 rounded-full text-sm font-medium">
                Seismic Success Story
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Small Business
              </span>
            </div>
            
            <h1 className="text-hero mb-6 gradient-text-seismic">
              Medical Documentation Revolution
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              How a healthcare practice eliminated documentation burden with ambient AI transcription, reducing documentation time by 50% while enhancing patient care and HIPAA compliance.
            </p>
            
            <div className="text-muted-foreground mb-8">
              <span className="font-medium">Healthcare Practice</span> • Healthcare Industry • Small Business
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Clinical Impact Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seismic AI delivered transformative improvements in clinical efficiency, patient care, and physician satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-lg font-semibold mb-2">{result.label}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Crisis Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-destructive" />
                <h2 className="text-4xl font-bold">The Healthcare Documentation Crisis</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Healthcare professionals were drowning in administrative tasks, spending more time on documentation than patient care, leading to burnout and reduced quality of care.
              </p>

              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <EnhancedCard variant="glass">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-6">The Administrative Burden</h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-destructive mb-2">30-40%</div>
                    <div className="text-sm text-muted-foreground">Time spent on documentation</div>
                  </div>
                  <div className="space-y-4">
                    {burdenStats.slice(1).map((stat, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{stat.aspect}</span>
                        <span className="text-destructive font-medium">{stat.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">How Seismic AI Works</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ambient AI technology revolutionizes clinical documentation through seamless, intelligent automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive Clinical Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seismic AI transforms healthcare delivery across multiple dimensions of clinical practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {clinicalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.category}</h3>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Compliance Features */}
          <motion.div
            className="bg-card rounded-xl p-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">HIPAA Compliance & Security</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Clinical Documentation?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Seismic AI can eliminate documentation burden and help your physicians focus on what matters most - patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="seismic" size="lg" asChild>
              <Link to="/contact?type=demo&product=seismic" className="flex items-center gap-2">
                Schedule Seismic Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/products/seismic">Learn More About Seismic</Link>
            </GradientButton>
          </div>
          <div className="mt-6 text-center">
            <GradientButton variant="secondary" asChild>
              <Link to="/customer-success" className="flex items-center gap-2 mx-auto">
                ← Back to Customer Success Stories
              </Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MedicalDocumentationRevolution;