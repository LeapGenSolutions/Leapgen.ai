import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Database, 
  Shield, 
  Zap, 
  Link as LinkIcon,
  FileText,
  CheckCircle,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

const DataCoffeeHealthcare = () => {
  const challenges = [
    "Patient data stored in multitude of siloed systems (EHRs, billing software, lab portals)",
    "Fragmentation creates massive administrative burden for healthcare staff",
    "Manual merging of records leads to dangerous errors in patient care",
    "Process of correcting inconsistencies is costly, time-consuming, and error-prone",
    "Administrative burden prevents staff from focusing on patient care"
  ];

  const costItems = [
    { label: "Administrative burden", severity: "Critical" },
    { label: "Patient care errors", severity: "Critical" },
    { label: "Delayed care delivery", severity: "High" },
    { label: "Higher operational costs", severity: "High" }
  ];

  const features = [
    {
      icon: LinkIcon,
      title: "Intelligent Data Integration",
      description: "Automated platform that creates unified patient records from all healthcare data sources"
    },
    {
      icon: Database,
      title: "Universal Healthcare Connectivity", 
      description: "Connects to all healthcare provider data sources including EHRs, billing, and lab systems"
    },
    {
      icon: Zap,
      title: "Automated Data Processing",
      description: "Eliminates manual data entry and reconciliation processes"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security ensuring patient data protection and regulatory compliance"
    }
  ];

  const beforeAfter = [
    {
      title: "Before: Fragmented Patient Data",
      items: ["EHR, Billing, Lab Systems", "Manual Reconciliation", "Inconsistent Patient Records", "Administrative Burden"]
    },
    {
      title: "After: Unified Patient Hub",
      items: ["EHR, Billing, Lab Systems", "Data Coffee: Automated Unification", "Single Patient View", "Focused Patient Care"]
    }
  ];

  const outcomes = [
    { metric: "40%", description: "Reduction in administrative costs" },
    { metric: "70%", description: "Less manual data entry required" },
    { metric: "95%", description: "Improvement in data accuracy" },
    { metric: "30%", description: "Faster care delivery times" }
  ];

  const steps = [
    { title: "Connect", description: "Integrate all healthcare data sources automatically" },
    { title: "Unify", description: "Merge patient records from different systems intelligently" },
    { title: "Cleanse", description: "Eliminate duplicates and correct inconsistencies" },
    { title: "Deliver", description: "Provide unified patient view to all care providers" }
  ];

  const applications = [
    "Unified patient record management across all departments",
    "Automated insurance verification and billing reconciliation",
    "Real-time lab result integration and alerts",
    "Comprehensive patient history for emergency situations", 
    "Streamlined referral and transfer processes",
    "Integrated medication management and allergy tracking"
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
                <HeartHandshake className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Data Coffee for Healthcare</span>
              </div>
              
              <h1 className="text-hero gradient-text-datacoffee">
                Unify Patient Data with Intelligent Integration
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform fragmented patient data across multiple healthcare systems into a single, unified patient record. Eliminate administrative burden and reduce care errors with automated data integration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="datacoffee" size="lg" asChild>
                  <Link to="/contact?product=data-coffee&industry=healthcare">See Healthcare Integration Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/datacoffee-roi-calculator">Calculate Administrative Savings</Link>
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
                alt="Healthcare Data Integration"
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
            <h2 className="text-4xl font-bold mb-4">The Healthcare Data Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Patient data is stored in a multitude of siloed systems—EHRs, billing software, and lab portals. This fragmentation creates a massive administrative burden for staff and can lead to dangerous errors in patient care.
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

          {/* Cost of Fragmented Data */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Fragmented Patient Data
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
            <h2 className="text-4xl font-bold mb-4">The Data Coffee Healthcare Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee is an intelligent data integration platform that automates the process of creating a unified patient record. It connects to all healthcare provider data sources and creates a single source of truth for patient information.
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

      {/* Before/After Transformation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Transforms Healthcare Data</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {beforeAfter.map((section, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-8">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className={`p-4 rounded-lg ${index === 0 ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                      <div className={`text-lg font-medium ${index === 0 ? 'text-destructive' : 'text-primary'}`}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Proven Healthcare Results</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.0 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
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
          transition={{ duration: 0.8, delay: 3.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Unify Your Patient Data?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Data Coffee can eliminate administrative burden and create a single source of truth for all patient information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="datacoffee" size="lg" asChild>
              <Link to="/contact?product=data-coffee&industry=healthcare" className="flex items-center gap-2">
                Schedule Healthcare Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/healthcare">Back to Healthcare</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataCoffeeHealthcare;