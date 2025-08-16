import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  AlertTriangle,
  Users
} from 'lucide-react';

const DataCoffeeEnterprise = () => {
  const challenges = [
    "Enterprise data trapped in departmental silos across the organization",
    "Inconsistent data formats and quality standards between business units", 
    "Manual data integration processes that consume months of IT resources",
    "Limited real-time visibility into cross-functional business performance",
    "Security and governance concerns preventing data sharing between departments"
  ];

  const costItems = [
    { label: "Delayed business insights", severity: "Critical" },
    { label: "Departmental misalignment", severity: "High" },
    { label: "Manual integration costs", severity: "Critical" },
    { label: "Inconsistent reporting", severity: "High" }
  ];

  const features = [
    {
      icon: Database,
      title: "Enterprise Data Unification",
      description: "Seamlessly connects and harmonizes data from all enterprise systems, departments, and business units"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Governance", 
      description: "Maintains strict data security, compliance, and governance while enabling authorized cross-department access"
    },
    {
      icon: Clock,
      title: "Real-time Data Processing",
      description: "Processes massive enterprise datasets in real-time for immediate insights and decision-making"
    },
    {
      icon: BarChart3,
      title: "Unified Executive Reporting",
      description: "Creates consistent, reliable reports across all business units with single source of truth"
    }
  ];

  const outcomes = [
    { metric: "75%", description: "Reduction in data integration time" },
    { metric: "90%", description: "Improvement in data consistency" },
    { metric: "60%", description: "Faster executive reporting" },
    { metric: "100%", description: "Elimination of data security risks" }
  ];

  const steps = [
    { title: "Enterprise Assessment", description: "Comprehensive audit of all enterprise systems, data sources, and integration requirements" },
    { title: "Unified Architecture", description: "Design and implement secure, scalable data architecture for enterprise scale" },
    { title: "Real-time Integration", description: "Connect all business systems with continuous data synchronization" },
    { title: "Executive Dashboards", description: "Deploy unified dashboards and reporting for enterprise leadership" }
  ];

  const applications = [
    "Cross-functional performance dashboards for C-suite executives",
    "Unified customer 360-degree view across sales, marketing, and support",
    "Enterprise-wide financial consolidation and reporting", 
    "Supply chain visibility from procurement to delivery",
    "Human capital analytics across all business units",
    "Risk management and compliance monitoring enterprise-wide"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="finance" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="finance" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Data Coffee for Enterprise</span>
              </div>
              
              <h1 className="text-hero gradient-text-finance">
                Break Down Enterprise Data Silos at Scale
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Unify data across all departments and business units to create a single source of truth for enterprise decision-making. Enable real-time insights while maintaining security and governance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="finance" size="lg" asChild>
                  <Link to="/contact?product=data-coffee&industry=enterprise">See Enterprise Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate Integration Savings</Link>
                </GradientButton>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                alt="Enterprise Data Integration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">The Enterprise Data Silo Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Large enterprises struggle with disconnected data systems that prevent unified insights and slow decision-making across business units.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {challenges.map((challenge, index) => (
              <EnhancedCard key={index} variant="default" className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              </EnhancedCard>
            ))}
          </motion.div>

          {/* Cost of Data Silos */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Enterprise Data Silos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {costItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-foreground">{item.label}</div>
                  <div className={`text-sm ${item.severity === 'Critical' ? 'text-destructive' : 'text-orange-500'}`}>
                    {item.severity}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">The Data Coffee Enterprise Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee creates a secure, scalable data platform that unifies all enterprise systems while maintaining strict governance and security standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <EnhancedCard variant="product" theme="datacoffee" className="p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Works for Enterprise</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            {applications.map((application, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{application}</span>
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
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Unify Your Enterprise Data?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Data Coffee can break down data silos and enable enterprise-wide insights while maintaining security and governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?product=data-coffee&industry=enterprise" className="flex items-center gap-2">
                Schedule Enterprise Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/enterprise">Back to Enterprise</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataCoffeeEnterprise;