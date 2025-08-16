import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Clock, 
  FileText, 
  BarChart3, 
  Shield, 
  Search,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Database,
  Zap,
  TrendingUp
} from 'lucide-react';

const Accounting = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Manual Data Preparation",
      description: "Hours spent manually gathering and preparing data for audits and analysis"
    },
    {
      icon: Search,
      title: "Sample-Based Testing Limitations", 
      description: "Traditional sampling methods miss anomalies and provide incomplete coverage"
    },
    {
      icon: FileText,
      title: "Time-Intensive Processes",
      description: "Lengthy audit cycles delay insights and increase costs for clients"
    }
  ];

  const outcomes = [
    {
      metric: "70%",
      description: "Less time spent on data preparation and validation"
    },
    {
      metric: "90%", 
      description: "Better anomaly detection with 100% population testing"
    },
    {
      metric: "40%",
      description: "Faster audit engagements and client deliverables"
    }
  ];

  const features = [
    {
      icon: Database,
      title: "Automated Data Extraction",
      description: "Connect to any ERP or accounting system to automatically extract and standardize financial data"
    },
    {
      icon: AlertTriangle,
      title: "Advanced Anomaly Detection",
      description: "AI-powered algorithms identify unusual transactions, duplicates, and potential fraud across entire populations"
    },
    {
      icon: BarChart3,
      title: "Risk Assessment Analytics",
      description: "Comprehensive risk scoring and trend analysis to focus audit efforts on high-risk areas"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate audit documentation, management letters, and client reports automatically"
    }
  ];

  const benefits = [
    "100% population testing instead of statistical sampling",
    "Real-time continuous monitoring capabilities", 
    "Automated journal entry testing and analysis",
    "Advanced duplicate payment and fraud detection",
    "Seamless integration with popular accounting systems",
    "Standardized audit documentation and reporting"
  ];

  const industries = [
    "Public Accounting Firms",
    "Internal Audit Departments", 
    "Corporate Finance Teams",
    "Government Auditors",
    "Non-Profit Organizations",
    "Financial Services Companies"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="particles" theme="finance" className="absolute inset-0 opacity-15" />
      <FloatingElements count={8} variant="squares" theme="finance" className="absolute inset-0 opacity-25" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-hero gradient-text-finance">
                Accounting & Audit
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accelerate audits and enhance accuracy with automated data preparation, advanced analytics, and AI-powered anomaly detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="finance" size="lg" asChild>
                <Link to="/contact?type=demo&industry=accounting">Request Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/contact?type=consultation">Schedule Consultation</Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Audit & Accounting Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Traditional audit processes are time-intensive and limited by manual sampling methods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-primary/5 rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Solutions for Accounting & Audit</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right AI solution for your accounting firm's specific needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">SurroundAI for Accounting</h3>
              <p className="text-muted-foreground mb-6">AI-powered client advisory services and predictive analytics</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50% faster tax planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">30% advisory revenue growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time client insights</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="surroundai" asChild className="w-full">
                <Link to="/use-cases/accounting/surround-ai" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>

            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Database className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Data Coffee for Accounting</h3>
              <p className="text-muted-foreground mb-6">Automated data preparation and audit trail management</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">85% faster data preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">95% data accuracy improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Automated audit trails</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="datacoffee" asChild className="w-full">
                <Link to="/use-cases/accounting/data-coffee" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>

            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Complete Accounting Solution</h3>
              <p className="text-muted-foreground mb-6">End-to-end AI platform for modern accounting firms</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Integrated AI workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">60% efficiency improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Complete digital transformation</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="primary" asChild className="w-full">
                <Link to="/use-cases/accounting/complete-solution" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI-Powered Audit Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your audit practice with intelligent automation and advanced analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
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

      {/* Benefits & Industries */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Transform Your Audit Practice</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how leading accounting firms are revolutionizing their audit processes with AI-powered analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=demo&industry=accounting" className="flex items-center gap-2">
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/case-studies?industry=accounting">View Case Studies</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Accounting;