import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  AlertTriangle,
  Building2
} from 'lucide-react';

const DataCoffeeSLED = () => {
  const challenges = [
    "Government agencies have data trapped in legacy systems and departmental silos",
    "Educational institutions struggle with student data scattered across multiple platforms", 
    "Manual data consolidation processes consume valuable staff time and resources",
    "Inconsistent data formats prevent unified reporting and analytics",
    "Data security concerns limit information sharing between departments"
  ];

  const costItems = [
    { label: "Data consolidation delays", severity: "High" },
    { label: "Inconsistent reporting", severity: "Critical" },
    { label: "Limited cross-department visibility", severity: "High" },
    { label: "Manual compliance reporting", severity: "Critical" }
  ];

  const features = [
    {
      icon: Database,
      title: "Government Data Unification",
      description: "Seamlessly connects and harmonizes data from all government systems and departments"
    },
    {
      icon: Shield,
      title: "Secure Data Governance", 
      description: "Ensures data privacy and security compliance while enabling authorized access and sharing"
    },
    {
      icon: Clock,
      title: "Real-time Data Processing",
      description: "Processes and updates data in real-time for immediate insights and decision-making"
    },
    {
      icon: BarChart3,
      title: "Automated Compliance Reporting",
      description: "Generates required federal and state reports automatically with audit trails"
    }
  ];

  const outcomes = [
    { metric: "80%", description: "Reduction in data preparation time" },
    { metric: "95%", description: "Improvement in data accuracy and consistency" },
    { metric: "70%", description: "Faster compliance reporting" },
    { metric: "100%", description: "Elimination of data leakage and security risks" }
  ];

  const steps = [
    { title: "System Integration", description: "Connect all government systems, databases, and data sources securely" },
    { title: "Data Harmonization", description: "Standardize and clean data from disparate sources into unified format" },
    { title: "Real-time Processing", description: "Continuously process and update data for immediate availability" },
    { title: "Secure Access", description: "Provide role-based access to unified data with complete audit trails" }
  ];

  const applications = [
    "Unified citizen service portals with complete service history",
    "Cross-departmental budget planning and resource allocation",
    "Integrated student information systems across educational levels", 
    "Automated federal and state compliance reporting",
    "Real-time performance dashboards for elected officials",
    "Emergency response coordination with unified data access"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="datacoffee" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="datacoffee" className="absolute inset-0 opacity-15" />
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
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Data Coffee for SLED</span>
              </div>
              
              <h1 className="text-hero gradient-text-datacoffee">
                Unify Government Data for Better Public Service
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Break down data silos between government departments and educational institutions. Create a secure, unified data platform that enables better decision-making and improved citizen services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="datacoffee" size="lg" asChild>
                  <Link to="/contact?product=data-coffee&industry=sled">See SLED Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate Efficiency Gains</Link>
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Government Data Integration"
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
            <h2 className="text-4xl font-bold mb-4">The Government Data Silo Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies and educational institutions struggle with fragmented data systems that prevent unified reporting and limit their ability to serve citizens effectively.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {challenges.map((challenge, index) => (
              <EnhancedCard key={index} variant="default" className="p-6 h-full">
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
              The Cost of Data Silos
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
            <h2 className="text-4xl font-bold mb-4">The Data Coffee SLED Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee creates a secure, unified data platform for government agencies and educational institutions, enabling seamless data sharing while maintaining strict security and compliance standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Works for SLED</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Break Down Data Silos?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Data Coffee can unify your government data and improve service delivery while maintaining security and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="datacoffee" size="lg" asChild>
              <Link to="/contact?product=data-coffee&industry=sled" className="flex items-center gap-2">
                Schedule SLED Demo <ArrowRight className="w-4 h-4" />
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

export default DataCoffeeSLED;