import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Users, 
  TrendingUp, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Zap,
  FileText,
  Brain,
  Database,
  BarChart3
} from 'lucide-react';

const AccountingCompleteSolution = () => {
  const solutionComponents = [
    {
      icon: Brain,
      title: "SurroundAI",
      description: "AI-powered client advisory and strategic insights",
      capabilities: [
        "Tax planning optimization",
        "Client relationship management", 
        "Predictive financial analysis",
        "Automated advisory recommendations"
      ]
    },
    {
      icon: Database,
      title: "Data Coffee",
      description: "Automated data preparation and audit optimization",
      capabilities: [
        "Multi-source data integration",
        "Automated data cleansing",
        "Audit-ready output generation",
        "Quality assurance validation"
      ]
    },
    {
      icon: FileText,
      title: "Seismic",
      description: "Intelligent document processing and workflow automation",
      capabilities: [
        "Document classification",
        "Data extraction automation",
        "Compliance monitoring",
        "Workflow optimization"
      ]
    }
  ];

  const benefits = [
    {
      metric: "75%",
      label: "Overall Efficiency Gain",
      description: "End-to-end process optimization"
    },
    {
      metric: "5x",
      label: "Advisory Revenue Growth",
      description: "Enhanced service delivery capabilities"
    },
    {
      metric: "90%",
      label: "Audit Preparation Reduction",
      description: "Automated data and document processing"
    },
    {
      metric: "50%",
      label: "Client Satisfaction Increase",
      description: "Faster, more strategic services"
    }
  ];

  const workflow = [
    {
      phase: "Data Collection & Integration",
      tools: ["Data Coffee", "Seismic"],
      description: "Automatically gather and process all client data from multiple sources",
      duration: "Hours vs. Days"
    },
    {
      phase: "Analysis & Insights Generation",
      tools: ["SurroundAI", "Data Coffee"],
      description: "Generate strategic insights and identify optimization opportunities",
      duration: "Real-time"
    },
    {
      phase: "Advisory & Reporting",
      tools: ["SurroundAI", "Seismic"],
      description: "Deliver comprehensive advisory services and automated reporting",
      duration: "Automated"
    },
    {
      phase: "Compliance & Documentation",
      tools: ["Data Coffee", "Seismic"],
      description: "Ensure regulatory compliance and maintain audit trails",
      duration: "Continuous"
    }
  ];

  const useCases = [
    {
      title: "Full-Service Tax Optimization",
      description: "Complete tax planning and preparation with AI-driven optimization",
      integration: "SurroundAI + Data Coffee + Seismic",
      outcomes: [
        "50% faster tax return preparation",
        "25% average tax savings for clients",
        "Automated compliance checking",
        "Real-time optimization recommendations"
      ]
    },
    {
      title: "Comprehensive Audit Services",
      description: "End-to-end audit process automation and optimization",
      integration: "Data Coffee + Seismic + SurroundAI",
      outcomes: [
        "80% reduction in audit preparation time",
        "95% data integrity improvement",
        "Automated risk assessment",
        "Real-time audit insights"
      ]
    },
    {
      title: "Strategic Advisory Platform",
      description: "Transform client relationships with AI-powered advisory services",
      integration: "SurroundAI + Data Coffee",
      outcomes: [
        "3x increase in advisory revenue",
        "Real-time financial health monitoring",
        "Predictive business insights",
        "Automated client communications"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Foundation Setup",
      duration: "Weeks 1-2",
      activities: [
        "Data Coffee implementation",
        "Core system integrations",
        "Data pipeline establishment",
        "Initial team training"
      ]
    },
    {
      phase: "Intelligence Layer",
      duration: "Weeks 3-4",
      activities: [
        "SurroundAI deployment",
        "Advisory workflow configuration",
        "Client insight generation",
        "Advanced training programs"
      ]
    },
    {
      phase: "Process Automation",
      duration: "Weeks 5-6",
      activities: [
        "Seismic integration",
        "Document workflow automation",
        "Compliance process setup",
        "Quality assurance testing"
      ]
    },
    {
      phase: "Optimization & Scale",
      duration: "Weeks 7-8",
      activities: [
        "Performance optimization",
        "Full team deployment",
        "Client rollout",
        "Continuous improvement setup"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="particles" theme="finance" className="absolute inset-0 opacity-15" />
      <FloatingElements count={8} variant="squares" theme="finance" className="absolute inset-0 opacity-20" />
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/use-cases" className="hover:text-primary">Use Cases</Link> / 
            <Link to="/use-cases/accounting" className="hover:text-primary ml-1">Accounting & Audit</Link> / 
            <span className="ml-1">Complete Solution</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/use-cases/accounting"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
            >
              ← Back to Accounting
            </Link>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Complete AI Solution
              </span>
            </div>
            
            <h1 className="text-hero gradient-text-finance">
              End-to-End AI Platform
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Transform your entire accounting practice with our integrated AI platform. Combine SurroundAI, Data Coffee, and Seismic for comprehensive automation, insights, and advisory capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton variant="finance" size="lg" asChild>
                <Link to="/contact?product=complete-solution&industry=accounting">Request Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate ROI</Link>
              </GradientButton>
            </div>
          </motion.div>

          {/* Benefits Overview */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <EnhancedCard key={index} variant="glass">
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <h3 className="font-semibold mb-1">{benefit.label}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </EnhancedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Components */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Integrated AI Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three powerful AI solutions working together to transform every aspect of your accounting practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutionComponents.map((component, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
                <p className="text-muted-foreground mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Seamless Integration Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how all three AI solutions work together in your accounting workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.phase}</h3>
                  <div className="flex flex-wrap gap-1 justify-center mb-3">
                    {step.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
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
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Integrated Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete solutions that leverage the full power of our AI platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Layers className="w-3 h-3" />
                    {useCase.integration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {useCase.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">8-Week Implementation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured rollout plan ensuring smooth integration and maximum ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 + index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{phase.phase}</h3>
                  <span className="text-sm text-primary font-medium">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
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
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Entire Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join accounting firms leveraging our complete AI platform to revolutionize their operations and client service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?product=complete-solution&industry=accounting" className="flex items-center gap-2">
                Request Complete Solution Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/accounting">Back to Accounting Solutions</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AccountingCompleteSolution;