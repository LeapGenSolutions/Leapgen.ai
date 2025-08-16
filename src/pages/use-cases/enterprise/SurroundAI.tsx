import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Activity, 
  Brain, 
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  BarChart3
} from 'lucide-react';

const SurroundAIEnterprise = () => {
  const challenges = [
    "Large enterprises struggle with departmental data silos that prevent unified insights",
    "Decision-making delays due to lack of real-time cross-functional analytics", 
    "Inability to predict market trends and customer behavior at enterprise scale",
    "Limited visibility into operational inefficiencies across business units",
    "Reactive approach to strategic planning and risk management"
  ];

  const costItems = [
    { label: "Delayed strategic decisions", severity: "Critical" },
    { label: "Operational inefficiencies", severity: "High" },
    { label: "Missed market opportunities", severity: "Critical" },
    { label: "Cross-department misalignment", severity: "High" }
  ];

  const features = [
    {
      icon: Activity,
      title: "Enterprise-Scale Analytics",
      description: "Analyzes massive datasets across all business units in real-time for comprehensive enterprise insights"
    },
    {
      icon: Brain,
      title: "Strategic Intelligence", 
      description: "Predicts market trends, customer behavior, and business outcomes to inform strategic decisions"
    },
    {
      icon: Users,
      title: "Cross-Functional Insights",
      description: "Builds unified models connecting sales, marketing, operations, and finance for holistic understanding"
    },
    {
      icon: TrendingUp,
      title: "Predictive Business Outcomes",
      description: "Forecasts revenue, market opportunities, and operational needs before they impact the business"
    }
  ];

  const outcomes = [
    { metric: "50%", description: "Faster strategic decision-making" },
    { metric: "35%", description: "Improvement in operational efficiency" },
    { metric: "25%", description: "Increase in revenue predictability" },
    { metric: "40%", description: "Better cross-department collaboration" }
  ];

  const steps = [
    { title: "Enterprise Integration", description: "Connect all business systems including ERP, CRM, HRM, and operational databases" },
    { title: "AI Processing", description: "Surround AI analyzes enterprise data to identify patterns and business insights" },
    { title: "Strategic Modeling", description: "Create predictive models for revenue, market trends, and operational optimization" },
    { title: "Executive Intelligence", description: "Generate strategic recommendations and real-time executive dashboards" }
  ];

  const applications = [
    "Market opportunity identification and competitive analysis",
    "Customer lifetime value prediction and segmentation",
    "Supply chain optimization and risk management", 
    "Revenue forecasting and pipeline management",
    "Operational efficiency improvement across business units",
    "Mergers & acquisitions due diligence and integration planning"
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
                <Building2 className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Surround AI for Enterprise</span>
              </div>
              
              <h1 className="text-hero gradient-text-surroundai">
                Transform Enterprise Strategy with Predictive Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Break down departmental silos and accelerate decision-making with AI that predicts market trends, optimizes operations, and drives strategic advantage at enterprise scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="surroundai" size="lg" asChild>
                  <Link to="/contact?product=surround-ai&industry=enterprise">See Enterprise Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate Strategic Impact</Link>
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Enterprise AI Intelligence"
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
            <h2 className="text-4xl font-bold mb-4">The Enterprise Intelligence Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Large enterprises struggle with disconnected business units and delayed decision-making that limit their ability to respond quickly to market changes and operational challenges.
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

          {/* Cost of Reactive Strategy */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Reactive Enterprise Strategy
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
            <h2 className="text-4xl font-bold mb-4">The Surround AI Enterprise Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Surround AI analyzes enterprise data across all business units in real-time, building comprehensive models to predict market trends, optimize operations, and drive strategic advantage.
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
                <EnhancedCard variant="product" theme="surroundai" className="p-8 h-full">
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
            <h2 className="text-4xl font-bold mb-4">How Surround AI Works for Enterprise</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Enterprise Strategy?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Surround AI can help your enterprise make faster, smarter decisions and drive competitive advantage through predictive intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?product=surround-ai&industry=enterprise" className="flex items-center gap-2">
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

export default SurroundAIEnterprise;