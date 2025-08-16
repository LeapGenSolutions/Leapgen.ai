import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Database, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  TrendingUp,
  Target
} from 'lucide-react';

const Enterprise = () => {
  const challenges = [
    {
      icon: Database,
      title: "Departmental Data Silos",
      description: "Disconnected systems across departments prevent unified business intelligence"
    },
    {
      icon: Clock,
      title: "Slow Decision-Making", 
      description: "Lack of real-time insights delays critical business decisions and opportunities"
    },
    {
      icon: BarChart3,
      title: "Conflicting Reports",
      description: "Different departments generate inconsistent metrics and conflicting analyses"
    }
  ];

  const outcomes = [
    {
      metric: "50%",
      description: "Faster decision-making with unified real-time dashboards"
    },
    {
      metric: "15%", 
      description: "Cost reduction through optimized operations and resource allocation"
    },
    {
      metric: "80%",
      description: "Better cross-departmental collaboration and alignment"
    }
  ];

  const features = [
    {
      icon: Database,
      title: "Enterprise Data Unification",
      description: "Connect and harmonize data across all departments, systems, and business units for a single source of truth"
    },
    {
      icon: BarChart3,
      title: "Real-Time Executive Dashboards",
      description: "Comprehensive KPI tracking and performance monitoring across the entire organization"
    },
    {
      icon: Users,
      title: "Cross-Functional Analytics",
      description: "Break down departmental barriers with shared analytics and collaborative insights"
    },
    {
      icon: Target,
      title: "Strategic Planning Intelligence",
      description: "Data-driven strategic planning with predictive modeling and scenario analysis"
    }
  ];

  const benefits = [
    "Unified view of business performance across all departments",
    "Real-time monitoring of key business metrics and KPIs", 
    "Automated reporting and executive briefings",
    "Cross-departmental collaboration and data sharing",
    "Predictive analytics for strategic decision-making",
    "Streamlined operations and process optimization"
  ];

  const useCases = [
    {
      title: "Financial Performance Management",
      description: "Unify financial data from all business units for comprehensive P&L analysis"
    },
    {
      title: "Supply Chain Optimization", 
      description: "End-to-end visibility into supply chain operations and vendor performance"
    },
    {
      title: "Customer Experience Analytics",
      description: "360-degree customer view combining sales, marketing, and support data"
    },
    {
      title: "Risk Management & Compliance",
      description: "Enterprise-wide risk monitoring and regulatory compliance tracking"
    },
    {
      title: "HR & Workforce Analytics",
      description: "Comprehensive workforce planning and employee performance insights"
    },
    {
      title: "Sales & Marketing Alignment",
      description: "Unified lead tracking and revenue attribution across teams"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="geometric" theme="finance" className="absolute inset-0 opacity-20" />
      <FloatingElements count={8} variant="mixed" theme="finance" className="absolute inset-0 opacity-15" />
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
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-hero gradient-text-finance">
                Enterprise & Fortune 500
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Break down data silos and accelerate decision-making across your organization with unified business intelligence and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="finance" size="lg" asChild>
                <Link to="/contact?type=demo&industry=enterprise">Request Demo</Link>
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
            <h2 className="text-4xl font-bold mb-4">Enterprise Data Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Large organizations struggle with fragmented data and inconsistent reporting across departments
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

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Enterprise AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right solution to transform your enterprise operations and decision-making
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
              
              <h3 className="text-2xl font-bold mb-4">Surround AI for Enterprise</h3>
              <p className="text-muted-foreground mb-6">Strategic intelligence and predictive analytics at enterprise scale</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50% faster strategic decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">35% operational efficiency gain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">25% revenue predictability increase</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="surroundai" asChild className="w-full">
                <Link to="/use-cases/enterprise/surround-ai" className="flex items-center justify-center gap-2">
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Data Coffee for Enterprise</h3>
              <p className="text-muted-foreground mb-6">Unified data platform for enterprise-scale operations</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">75% data integration time reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">90% data consistency improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">60% faster executive reporting</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="datacoffee" asChild className="w-full">
                <Link to="/use-cases/enterprise/data-coffee" className="flex items-center justify-center gap-2">
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
              
              <h3 className="text-2xl font-bold mb-4">Complete Enterprise Intelligence</h3>
              <p className="text-muted-foreground mb-6">Integrated platform for Fortune 500 transformation</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50% faster strategic decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">35% operational efficiency gain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">60% better department alignment</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="finance" asChild className="w-full">
                <Link to="/use-cases/enterprise/complete-solution" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Enterprise Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform every aspect of your business with unified data and AI-powered insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your organization with enterprise-grade AI and analytics
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join Fortune 500 companies using AI to break down silos and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=demo&industry=enterprise" className="flex items-center gap-2">
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/case-studies?industry=enterprise">View Case Studies</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Enterprise;