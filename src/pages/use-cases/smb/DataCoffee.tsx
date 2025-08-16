import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  AlertTriangle,
  DollarSign
} from 'lucide-react';

const DataCoffeeSMB = () => {
  const challenges = [
    "Small businesses use multiple disconnected tools and spreadsheets",
    "Manual data entry and consolidation consumes valuable time", 
    "Lack of unified view prevents effective decision-making",
    "Data errors and inconsistencies impact business operations",
    "No technical expertise to implement complex data solutions"
  ];

  const costItems = [
    { label: "Time wasted on manual tasks", severity: "High" },
    { label: "Data inconsistencies and errors", severity: "Critical" },
    { label: "Delayed business decisions", severity: "High" },
    { label: "Limited growth insights", severity: "Critical" }
  ];

  const features = [
    {
      icon: Database,
      title: "Simple Data Unification",
      description: "Connects all your business tools and systems in one easy-to-use platform"
    },
    {
      icon: Zap,
      title: "Instant Setup", 
      description: "Get up and running in 15 minutes with our user-friendly setup process"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "All your data stays synchronized automatically across all your tools"
    },
    {
      icon: BarChart3,
      title: "Simple Dashboards",
      description: "View all your key business metrics in one place with easy-to-understand dashboards"
    }
  ];

  const outcomes = [
    { metric: "80%", description: "Reduction in manual data entry" },
    { metric: "90%", description: "Improvement in data accuracy" },
    { metric: "50%", description: "Faster business reporting" },
    { metric: "100%", description: "Elimination of data duplication" }
  ];

  const steps = [
    { title: "Connect Tools", description: "Link your existing business tools like CRM, accounting, and marketing platforms" },
    { title: "Auto-Sync", description: "Data Coffee automatically synchronizes all your data in real-time" },
    { title: "Clean Data", description: "Automatically cleans and standardizes data for consistency" },
    { title: "Access Insights", description: "View unified data through simple dashboards and reports" }
  ];

  const applications = [
    "Customer data unification across sales and marketing",
    "Financial reporting with real-time business metrics",
    "Inventory management with automated updates", 
    "Marketing campaign tracking and ROI analysis",
    "Customer service with complete interaction history",
    "Business performance monitoring and KPI tracking"
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
                <Building className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Data Coffee for SMB</span>
              </div>
              
              <h1 className="text-hero gradient-text-datacoffee">
                Unify Your Business Data in 15 Minutes
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop wasting time on manual data entry and spreadsheets. Connect all your business tools and get a unified view of your operations with Data Coffee's simple, affordable solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="datacoffee" size="lg" asChild>
                  <Link to="/contact?product=data-coffee&industry=smb">Start Free Trial</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate Time Savings</Link>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="SMB Data Integration"
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
            <h2 className="text-4xl font-bold mb-4">The SMB Data Problem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small businesses struggle with disconnected tools and manual processes that waste time and create errors, limiting their ability to make informed decisions.
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

          {/* Cost of Manual Processes */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Manual Data Processes
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
            <h2 className="text-4xl font-bold mb-4">The Data Coffee SMB Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee makes data unification simple and affordable for small businesses with easy setup, automatic synchronization, and intuitive dashboards.
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
                <EnhancedCard variant="default" className="p-8 h-full">
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
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Works for SMB</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple setup, automatic data sync, immediate results
            </p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Wasting Time on Data?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial today and see how Data Coffee can save you hours every week while giving you better insights into your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="datacoffee" size="lg" asChild>
              <Link to="/contact?product=data-coffee&industry=smb" className="flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/small-medium-business">Back to SMB</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataCoffeeSMB;