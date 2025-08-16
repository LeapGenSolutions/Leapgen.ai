import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

const CompleteSolutionSLED = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Predictive Government Intelligence",
      description: "Combine unified data with AI insights to predict citizen needs, optimize resource allocation, and improve service delivery outcomes"
    },
    {
      icon: Users,
      title: "Unified Citizen Services",
      description: "Create seamless citizen experiences with complete service history and personalized interactions across all departments"
    },
    {
      icon: BarChart3,
      title: "Real-time Performance Monitoring",
      description: "Track government performance with live dashboards showing KPIs, citizen satisfaction, and operational efficiency"
    },
    {
      icon: Shield,
      title: "Secure Compliance Management",
      description: "Automated compliance reporting and audit trails ensure regulatory adherence while maintaining data security"
    }
  ];

  const processSteps = [
    {
      step: "Assessment",
      title: "Government Data Audit",
      description: "Comprehensive analysis of current systems, data sources, and integration requirements"
    },
    {
      step: "Integration",
      title: "Unified Data Platform",
      description: "Connect all government systems with Data Coffee for seamless data unification"
    },
    {
      step: "Intelligence",
      title: "AI-Powered Insights",
      description: "Deploy Surround AI to analyze patterns and generate predictive insights"
    },
    {
      step: "Optimization", 
      title: "Continuous Improvement",
      description: "Ongoing optimization of processes and outcomes based on real-time feedback"
    }
  ];

  const outcomes = [
    { metric: "40%", description: "Improvement in citizen satisfaction scores" },
    { metric: "50%", description: "Reduction in administrative processing time" },
    { metric: "30%", description: "Better resource allocation efficiency" },
    { metric: "70%", description: "Faster compliance reporting" }
  ];

  const useCases = [
    {
      department: "Public Health Department",
      challenge: "Fragmented health data preventing effective disease surveillance and response",
      solution: "Unified health data platform with predictive outbreak detection",
      results: [
        "50% faster disease outbreak detection",
        "Improved contact tracing efficiency",
        "Better resource allocation during health emergencies"
      ]
    },
    {
      department: "Education District",
      challenge: "Student data scattered across multiple systems limiting intervention capabilities", 
      solution: "Integrated student information system with at-risk prediction",
      results: [
        "35% improvement in early intervention success",
        "Reduced administrative burden on teachers",
        "Better parent-school communication"
      ]
    },
    {
      department: "City Planning",
      challenge: "Reactive approach to infrastructure planning and citizen service requests",
      solution: "Predictive analytics for infrastructure needs and service optimization",
      results: [
        "30% reduction in infrastructure maintenance costs",
        "Faster response to citizen service requests",
        "Data-driven budget planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="government" className="absolute inset-0 opacity-20" />
      <FloatingElements count={8} variant="mixed" theme="government" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-12 h-12 text-primary" />
              <span className="text-2xl font-medium text-primary">Complete SLED Intelligence Solution</span>
            </div>
            
            <h1 className="text-hero gradient-text-government">
              Transform Government Operations with Unified AI Intelligence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine the power of Data Coffee's unified data platform with Surround AI's predictive intelligence to create a comprehensive solution for government agencies and educational institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="government" size="lg" asChild>
                <Link to="/contact?solution=complete&industry=sled">See Complete Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate Total Impact</Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Complete Government Intelligence Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The only solution that combines secure data unification with AI-powered insights specifically designed for government and educational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <EnhancedCard variant="product" theme="government" className="p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures smooth deployment with minimal disruption to government operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies see significant improvements across all key performance indicators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Government Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how different government departments have transformed their operations
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{useCase.department}</h3>
                    <h4 className="font-medium mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Government Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking government agencies using our complete intelligence platform to better serve their communities and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="government" size="lg" asChild>
              <Link to="/contact?solution=complete&industry=sled" className="flex items-center gap-2">
                Schedule Complete Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/sled">Back to SLED</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompleteSolutionSLED;