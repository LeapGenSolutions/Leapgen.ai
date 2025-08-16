import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  Brain, 
  Target, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

const SurroundAIRetail = () => {
  const challenges = [
    "Inability to predict customer preferences and buying patterns",
    "Missed opportunities for cross-selling and upselling",
    "Ineffective inventory management leading to stockouts or overstock", 
    "Generic marketing campaigns with low conversion rates",
    "Limited understanding of customer journey and touchpoint effectiveness",
    "Reactive approach to market trends and customer demands"
  ];

  const costItems = [
    { label: "Missed personalization opportunities", severity: "High" },
    { label: "Inventory inefficiencies", severity: "Critical" },
    { label: "Low marketing ROI", severity: "High" },
    { label: "Customer churn", severity: "Medium" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Customer Behavior Prediction",
      description: "Analyzes purchase history, browsing patterns, and preferences to predict what customers want next"
    },
    {
      icon: Target,
      title: "Hyper-Personalization Engine", 
      description: "Creates individualized shopping experiences with personalized product recommendations and content"
    },
    {
      icon: BarChart3,
      title: "Inventory Optimization",
      description: "Predicts demand patterns to optimize stock levels and reduce waste"
    },
    {
      icon: TrendingUp,
      title: "Revenue Maximization",
      description: "Identifies upselling and cross-selling opportunities to increase average order value"
    }
  ];

  const outcomes = [
    { metric: "25%", description: "Higher conversion rates" },
    { metric: "35%", description: "Reduction in cart abandonment" },
    { metric: "20%", description: "Increase in customer lifetime value" },
    { metric: "30%", description: "Improvement in inventory turnover" }
  ];

  const steps = [
    { title: "Data Collection", description: "Gather customer data from all touchpoints including web, mobile, and in-store" },
    { title: "Pattern Analysis", description: "AI analyzes customer behavior, preferences, and purchase patterns" },
    { title: "Prediction Engine", description: "Generate predictions for customer needs, trends, and optimal experiences" },
    { title: "Real-time Personalization", description: "Deliver personalized experiences and recommendations in real-time" }
  ];

  const applications = [
    "Personalized product recommendations based on behavior",
    "Dynamic pricing optimization for maximum revenue",
    "Predictive inventory management and demand forecasting",
    "Intelligent customer segmentation and targeting",
    "Automated marketing campaign optimization",
    "Cross-channel experience personalization"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="retail" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="retail" className="absolute inset-0 opacity-15" />
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/use-cases" className="hover:text-primary">Use Cases</Link>
            <span>/</span>
            <Link to="/use-cases/retail" className="hover:text-primary">Retail</Link>
            <span>/</span>
            <span>Surround AI</span>
          </nav>
          <Link to="/use-cases/retail" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Retail
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Surround AI for Retail</span>
              </div>
              
              <h1 className="text-hero gradient-text-retail">
                Transform Retail with Hyper-Personalization
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Predict customer behavior, optimize inventory, and deliver personalized shopping experiences that drive revenue growth and customer loyalty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="retail" size="lg" asChild>
                  <Link to="/contact?product=surround-ai&industry=retail">Request Demo</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/surroundai-roi-calculator">Calculate ROI</Link>
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="AI-Powered Retail Intelligence"
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
            <h2 className="text-4xl font-bold mb-4">The Retail Intelligence Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Retail businesses struggle to understand and predict customer behavior across multiple touchpoints. They lack the ability to deliver personalized experiences at scale, leading to missed sales opportunities and reduced customer loyalty.
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

          {/* Cost of Limited Intelligence */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Limited Retail Intelligence
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
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
            <h2 className="text-4xl font-bold mb-4">The Surround AI Retail Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Surround AI creates comprehensive customer intelligence by analyzing purchase history, browsing behavior, demographic data, and real-time interactions to predict preferences and optimize the entire retail experience.
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
            <h2 className="text-4xl font-bold mb-4">How Surround AI Works</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Surround AI can help you deliver hyper-personalized experiences that drive revenue growth and customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="retail" size="lg" asChild>
              <Link to="/contact?product=surround-ai&industry=retail" className="flex items-center gap-2">
                Schedule Retail Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/retail">Back to Retail</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SurroundAIRetail;