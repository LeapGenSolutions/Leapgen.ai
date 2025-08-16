import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Activity, 
  Brain, 
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Building2
} from 'lucide-react';

const SurroundAISLED = () => {
  const challenges = [
    "Government agencies struggle with disconnected legacy systems and data silos",
    "Educational institutions lack real-time insights into student performance and risk factors", 
    "Public service delivery inefficiencies due to manual processes and limited analytics",
    "Inability to predict citizen needs or optimize resource allocation proactively",
    "Reactive approach to policy making and public service management"
  ];

  const costItems = [
    { label: "Inefficient resource allocation", severity: "High" },
    { label: "Poor public service delivery", severity: "Critical" },
    { label: "Budget overruns and waste", severity: "High" },
    { label: "Missed student intervention opportunities", severity: "Critical" }
  ];

  const features = [
    {
      icon: Activity,
      title: "Real-time Government Analytics",
      description: "Analyzes government data streams in real-time for comprehensive operational insights"
    },
    {
      icon: Brain,
      title: "Policy Impact Prediction", 
      description: "Predicts policy outcomes and citizen impact before implementation"
    },
    {
      icon: Users,
      title: "Citizen Service Optimization",
      description: "Builds comprehensive citizen profiles to personalize and optimize public services"
    },
    {
      icon: TrendingUp,
      title: "Predictive Resource Planning",
      description: "Predicts resource needs and optimizes allocation across departments and programs"
    }
  ];

  const outcomes = [
    { metric: "30%", description: "Improvement in resource allocation efficiency" },
    { metric: "45%", description: "Faster response to citizen service requests" },
    { metric: "25%", description: "Reduction in administrative overhead" },
    { metric: "40%", description: "Better policy outcome prediction accuracy" }
  ];

  const steps = [
    { title: "Data Integration", description: "Connect all government systems including citizen services, financial, and operational data" },
    { title: "AI Analysis", description: "Surround AI processes and analyzes all structured and unstructured government data" },
    { title: "Pattern Recognition", description: "Identify service patterns, resource needs, and citizen behavior trends" },
    { title: "Actionable Insights", description: "Generate policy recommendations and resource allocation optimization" }
  ];

  const applications = [
    "Early detection of public health trends and issues",
    "Student at-risk identification and intervention systems",
    "Budget optimization and resource allocation planning", 
    "Automated compliance monitoring and reporting",
    "Citizen service delivery optimization",
    "Public safety and emergency response coordination"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="surroundai" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="surroundai" className="absolute inset-0 opacity-15" />
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
                <span className="text-lg font-medium text-primary">Surround AI for SLED</span>
              </div>
              
              <h1 className="text-hero gradient-text-surroundai">
                Transform Public Services with Predictive Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Optimize government operations and educational outcomes with AI that predicts citizen needs, allocates resources efficiently, and improves public service delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="surroundai" size="lg" asChild>
                  <Link to="/contact?product=surround-ai&industry=sled">See SLED Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate Impact</Link>
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
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Government AI Solutions"
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
            <h2 className="text-4xl font-bold mb-4">The SLED Data Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Government agencies and educational institutions struggle with disconnected systems, manual processes, and reactive approaches that limit their ability to serve citizens and students effectively.
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

          {/* Cost of Reactive Government */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Reactive Government
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
            <h2 className="text-4xl font-bold mb-4">The Surround AI SLED Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Surround AI analyzes government and educational data in real-time, building predictive models to optimize resource allocation, improve service delivery, and enhance public outcomes.
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
            <h2 className="text-4xl font-bold mb-4">How Surround AI Works for SLED</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Public Service Delivery?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Surround AI can help you serve citizens and students more effectively while optimizing resources and improving outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?product=surround-ai&industry=sled" className="flex items-center gap-2">
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

export default SurroundAISLED;