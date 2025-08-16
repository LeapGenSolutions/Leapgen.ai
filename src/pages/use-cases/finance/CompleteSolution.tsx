import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, Database, TrendingUp, Shield, CheckCircle, Users, Clock, FileCheck } from 'lucide-react';

const CompleteSolutionFinance = () => {
  const benefits = [
    "Unified customer data across all systems and touchpoints",
    "Real-time predictive analytics for proactive decision-making",
    "Personalized customer experiences at scale",
    "Enhanced fraud detection and risk management"
  ];

  const outcomes = [
    { metric: "20%", label: "Increase in customer lifetime value through personalized offers" },
    { metric: "60%", label: "Reduction in fraud detection time" },
    { metric: "95%", label: "Enhancement in regulatory compliance reporting accuracy" }
  ];

  const applications = [
    {
      title: "Personalized Financial Services",
      description: "Combine unified customer data with predictive analytics to deliver perfectly timed, relevant financial products and services.",
      features: [
        "Life event-triggered product recommendations",
        "Dynamic pricing based on customer value",
        "Proactive financial planning advice"
      ],
      icon: Users
    },
    {
      title: "Advanced Fraud Prevention",
      description: "Leverage clean, comprehensive data to power sophisticated fraud detection models that adapt in real-time.",
      features: [
        "Real-time transaction risk scoring",
        "Behavioral pattern anomaly detection",
        "Predictive fraud prevention"
      ],
      icon: Shield
    },
    {
      title: "Regulatory Compliance Excellence",
      description: "Ensure perfect regulatory compliance with unified, accurate data and intelligent monitoring systems.",
      features: [
        "Automated compliance reporting",
        "Real-time regulatory risk monitoring",
        "Audit-ready data lineage"
      ],
      icon: FileCheck
    },
    {
      title: "Customer Retention & Growth",
      description: "Predict customer behavior and needs to reduce churn and maximize lifetime value.",
      features: [
        "Churn prediction and prevention",
        "Cross-sell and upsell optimization",
        "Customer satisfaction forecasting"
      ],
      icon: TrendingUp
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Data Coffee Unifies",
      description: "Automatically ingests and cleanses data from all financial systems"
    },
    {
      number: "2", 
      title: "Creates Golden Records",
      description: "Builds single, accurate customer profiles across all touchpoints"
    },
    {
      number: "3",
      title: "Surround AI Analyzes", 
      description: "Applies dynamic intelligence to unified data for predictive insights"
    },
    {
      number: "4",
      title: "Delivers Results",
      description: "Provides real-time recommendations and proactive interventions"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="finance" className="absolute inset-0 opacity-20" />
      <FloatingElements count={8} variant="mixed" theme="finance" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link to="/use-cases/finance" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Finance Use Cases
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-primary">Complete Financial Intelligence</span>
            </div>
            
            <h1 className="text-hero gradient-text-finance">
              The Ultimate Financial AI Platform
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine the power of Data Coffee's unified data management with Surround AI's predictive intelligence to transform every aspect of your financial operations.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16"
          >
            <img
              src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003751.jpg"
              alt="Complete Financial Intelligence Solution"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">The Challenge</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Financial institutions face a constant battle with data silos, incomplete customer profiles, and a lack of real-time insights. This leads to missed opportunities for upselling and cross-selling, increased risk exposure due to inaccurate data, and a sluggish response to market changes and customer needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The manual effort required to unify and cleanse data is costly and prone to error, while traditional analytics provide only backward-looking insights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">The Complete Solution</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              By combining Data Coffee's data unification capabilities with Surround AI's predictive intelligence, you get a comprehensive platform that not only solves your data challenges but transforms them into competitive advantages.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <EnhancedCard variant="default" className="p-6 text-left h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  </EnhancedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How the Complete Solution Works</h2>
            <p className="text-xl text-muted-foreground">A seamless integration of data unification and AI intelligence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Integration Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 bg-card rounded-lg p-8 border border-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">The Power of Integration</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Surround AI and Data Coffee work together to create a single, comprehensive view of every customer and market trend. Data Coffee automatically ingests data from all sources—internal systems, public records, and even social media—and intelligently cleanses, de-duplicates, and normalizes it.
              </p>
              <p>
                Surround AI then builds on this clean data to create a dynamic, real-time profile. It analyzes customer behavior, spending habits, and life events to predict future needs and potential risks. This allows your institution to proactively offer relevant products, identify fraud patterns more quickly, and personalize every customer interaction.
              </p>
              <p>
                The result is a financial institution that operates with unprecedented insight, agility, and customer focus—turning data from a burden into your greatest competitive advantage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-xl text-muted-foreground">Measurable results from the complete financial intelligence solution</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8"
              >
                <div className="text-5xl font-bold text-primary mb-4">{outcome.metric}</div>
                <p className="text-lg text-muted-foreground">{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 + index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <application.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{application.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{application.description}</p>
                <ul className="space-y-3">
                  {application.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Transform Your Financial Institution Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the power of unified data and predictive intelligence working together to revolutionize your financial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=demo&product=complete-solution&industry=finance">Schedule Complete Demo</Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/roi-calculator">Calculate ROI</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompleteSolutionFinance;