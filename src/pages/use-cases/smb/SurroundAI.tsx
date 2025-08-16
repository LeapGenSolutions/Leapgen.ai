import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Activity, 
  Brain, 
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  DollarSign
} from 'lucide-react';

const SurroundAISMB = () => {
  const challenges = [
    "Small businesses lack access to enterprise-level AI analytics and insights",
    "Limited technical expertise to implement and maintain complex AI systems", 
    "High costs of traditional AI solutions exceed SMB budgets",
    "Difficulty competing with larger companies that have advanced analytics",
    "Manual processes that consume time and reduce competitive advantage"
  ];

  const costItems = [
    { label: "Lost competitive opportunities", severity: "Critical" },
    { label: "Manual process inefficiencies", severity: "High" },
    { label: "Delayed decision-making", severity: "High" },
    { label: "Limited customer insights", severity: "Critical" }
  ];

  const features = [
    {
      icon: Activity,
      title: "SMB-Scale Analytics",
      description: "Enterprise-level AI analytics designed for small business needs and budgets"
    },
    {
      icon: Brain,
      title: "Automated Insights", 
      description: "Get actionable insights automatically without needing data science expertise"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Understand customer behavior and predict needs to drive growth"
    },
    {
      icon: TrendingUp,
      title: "Growth Predictions",
      description: "Predict business trends and opportunities to stay ahead of competition"
    }
  ];

  const outcomes = [
    { metric: "40%", description: "Increase in customer retention" },
    { metric: "25%", description: "Improvement in sales conversion" },
    { metric: "60%", description: "Reduction in manual tasks" },
    { metric: "3x", description: "Faster insights than traditional methods" }
  ];

  const steps = [
    { title: "Easy Setup", description: "Quick 30-minute setup connects your business data sources" },
    { title: "AI Analysis", description: "Surround AI analyzes your business data and customer patterns" },
    { title: "Smart Insights", description: "Receive actionable insights and recommendations daily" },
    { title: "Growth Actions", description: "Implement recommended actions to grow your business" }
  ];

  const applications = [
    "Customer behavior prediction and personalization",
    "Sales opportunity identification and prioritization",
    "Inventory optimization and demand forecasting", 
    "Marketing campaign effectiveness analysis",
    "Customer service automation and improvement",
    "Competitive pricing and market analysis"
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
                <Building className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Surround AI for SMB</span>
              </div>
              
              <h1 className="text-hero gradient-text-surroundai">
                Enterprise AI Power for Small Business Budgets
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Level the playing field with AI insights that predict customer behavior, optimize operations, and drive growth - all designed specifically for small and medium businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="surroundai" size="lg" asChild>
                  <Link to="/contact?product=surround-ai&industry=smb">Start Free Trial</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/roi-calculator">Calculate SMB Impact</Link>
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
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                alt="SMB AI Solutions"
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
            <h2 className="text-4xl font-bold mb-4">The SMB AI Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small and medium businesses struggle to compete with larger companies that have access to advanced AI and analytics capabilities.
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

          {/* Cost of No AI */}
          <motion.div
            className="bg-destructive/5 rounded-xl p-8 border border-destructive/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The Cost of Not Having AI
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
            <h2 className="text-4xl font-bold mb-4">The Surround AI SMB Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Surround AI brings enterprise-level AI capabilities to small businesses with affordable pricing, easy setup, and automated insights that drive growth.
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
            <h2 className="text-4xl font-bold mb-4">How Surround AI Works for SMB</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes, not months - no technical expertise required
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
          <h2 className="text-3xl font-bold mb-4">Ready to Compete with the Big Players?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial today and see how Surround AI can help your small business compete and win with enterprise-level insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?product=surround-ai&industry=smb" className="flex items-center gap-2">
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

export default SurroundAISMB;