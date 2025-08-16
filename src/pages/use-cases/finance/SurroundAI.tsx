import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { TrendingUp, AlertTriangle, Target, Zap, CheckCircle, ArrowLeft, BarChart3, Shield, Eye } from 'lucide-react';

const SurroundAIFinance = () => {
  const challenges = [
    "Inability to predict complex customer behaviors in real-time",
    "Missed opportunities for personalized financial services", 
    "Ineffective fraud prevention with traditional rule-based systems",
    "Reactive posture towards rapidly changing financial landscape",
    "Limited ability to identify subtle patterns in market shifts"
  ];

  const costFactors = [
    { label: "Missed personalization opportunities", impact: "High", icon: Target },
    { label: "Ineffective fraud prevention", impact: "Critical", icon: Shield },
    { label: "Reactive market response", impact: "High", icon: TrendingUp },
    { label: "Limited customer insights", impact: "Medium", icon: Eye }
  ];

  const capabilities = [
    {
      title: "Fraud Detection",
      description: "Identifies subtle patterns of fraud that traditional rule-based systems miss through dynamic behavioral modeling.",
      features: [
        "Real-time transaction analysis",
        "Behavioral pattern recognition", 
        "Adaptive fraud scoring"
      ]
    },
    {
      title: "Customer Intelligence", 
      description: "Predicts customer churn and recommends the next best action for personalized financial services.",
      features: [
        "Churn prediction modeling",
        "Personalized product recommendations",
        "Customer lifetime value optimization"
      ]
    },
    {
      title: "Risk Analysis",
      description: "Enhances portfolio risk analysis and modeling accuracy through sophisticated predictive algorithms.",
      features: [
        "Portfolio risk modeling",
        "Market trend analysis",
        "Regulatory compliance monitoring"
      ]
    }
  ];

  const results = [
    { metric: "50%", label: "Reduction in Fraudulent Transaction Losses" },
    { metric: "20%", label: "Increase in Customer Retention for High-Value Clients" },
    { metric: "75%", label: "Enhancement in Portfolio Risk Analysis Accuracy" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="surroundai" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="surroundai" className="absolute inset-0 opacity-15" />
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
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-primary">Surround AI for Finance</span>
            </div>
            
            <h1 className="text-hero gradient-text-surroundai">
              Transform Financial Intelligence with Dynamic Prediction
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Move beyond traditional risk models and customer segmentation. Predict complex customer behaviors and market shifts in real-time with sophisticated AI that adapts to your changing financial landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="surroundai" size="lg" asChild>
                <Link to="/contact?product=surround-ai&industry=finance">See Financial Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate ROI</Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Financial Intelligence Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Financial institutions struggle to move beyond traditional risk models and customer segmentation. They lack the ability to predict complex, nuanced customer behaviors and market shifts in real-time, leading to missed opportunities and reactive responses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  <EnhancedCard variant="default" className="p-6 h-full">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  </EnhancedCard>
                </motion.div>
            ))}
          </div>

          {/* Cost Factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">The Cost of Reactive Financial Intelligence</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                  <factor.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{factor.label}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    factor.impact === 'Critical' ? 'bg-destructive/10 text-destructive' :
                    factor.impact === 'High' ? 'bg-orange-500/10 text-orange-500' :
                    'bg-yellow-500/10 text-yellow-600'
                  }`}>
                    {factor.impact}
                  </span>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Surround AI Financial Solution</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Surround AI is a dynamic intelligence platform that builds continuous, real-time understanding of all relevant data points. It analyzes historical and live transaction data, market trends, and external factors to generate adaptive predictive models.
            </p>
          </motion.div>

          {/* Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                  <span className="text-destructive font-bold">❌</span>
                </div>
                <h3 className="text-xl font-bold">Traditional Approach</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong>Fragmented Data</strong>
                  <p>CRM, Transactions, Market News</p>
                </div>
                <div>
                  <strong>Disconnected Analysis</strong>
                  <p>Static Reports</p>
                </div>
                <div>
                  <strong>Slow Response</strong>
                  <p>Missed Opportunities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-primary/5 rounded-lg p-8 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold">Surround AI Approach</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-primary">Unified Data Sources</strong>
                  <p>CRM, Transactions, Market News</p>
                </div>
                <div>
                  <strong className="text-primary">Dynamic Analysis</strong>
                  <p>Real-time Predictive Insights</p>
                </div>
                <div>
                  <strong className="text-primary">Proactive Action</strong>
                  <p>Personalized Offers & Fraud Prevention</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Financial Intelligence Capabilities</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{capability.title}</h3>
                <p className="text-muted-foreground mb-6">{capability.description}</p>
                <ul className="space-y-3">
                  {capability.features.map((feature, i) => (
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

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proven Financial Results</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8"
              >
                <div className="text-5xl font-bold text-primary mb-4">{result.metric}</div>
                <p className="text-lg text-muted-foreground">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Surround AI Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <BarChart3 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Data Integration & Analysis</h3>
              <p className="text-muted-foreground">
                Surround AI analyzes historical and live transaction data, market trends, and external factors like news or economic indicators to generate predictive models. Unlike static models, it adapts as new information becomes available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Sophisticated Pattern Recognition</h3>
              <p className="text-muted-foreground">
                The platform provides a deeper, more sophisticated layer of analysis that goes beyond simple rule-based systems, identifying subtle patterns that traditional methods miss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Actionable Intelligence</h3>
              <p className="text-muted-foreground">
                Delivers actionable insights for financial advisors and automated personalized product offers for customers, enabling proactive rather than reactive financial services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Intelligence?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading financial institutions using Surround AI to predict customer behavior, prevent fraud, and optimize portfolio performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?product=surround-ai&industry=finance">Schedule Financial Demo</Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/roi-calculator">Download ROI Calculator</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SurroundAIFinance;