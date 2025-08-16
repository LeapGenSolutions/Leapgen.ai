import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

const CompleteSolutionSMB = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Complete Business Intelligence",
      description: "Combine unified data with AI insights to predict trends, optimize operations, and accelerate growth"
    },
    {
      icon: Zap,
      title: "Instant Setup & Results",
      description: "Get up and running in 30 minutes with immediate insights and automated optimization"
    },
    {
      icon: BarChart3,
      title: "Smart Business Dashboards",
      description: "Monitor all aspects of your business with AI-powered dashboards that highlight opportunities"
    },
    {
      icon: Shield,
      title: "Affordable Enterprise Power",
      description: "Get Fortune 500 capabilities at small business prices with transparent, affordable pricing"
    }
  ];

  const processSteps = [
    {
      step: "Connect",
      title: "Link Your Tools",
      description: "Connect all your business systems in 15 minutes with our simple setup wizard"
    },
    {
      step: "Unify",
      title: "Data Coffee Sync",
      description: "Automatically unify and clean all your business data in real-time"
    },
    {
      step: "Analyze",
      title: "AI Intelligence",
      description: "Surround AI analyzes patterns and generates actionable business insights"
    },
    {
      step: "Grow", 
      title: "Accelerate Growth",
      description: "Implement AI recommendations to grow your business faster and smarter"
    }
  ];

  const outcomes = [
    { metric: "3x", description: "Faster business insights than spreadsheets" },
    { metric: "50%", description: "Reduction in manual tasks and data entry" },
    { metric: "25%", description: "Average increase in sales conversion" },
    { metric: "40%", description: "Improvement in customer retention" }
  ];

  const useCases = [
    {
      business: "Local Restaurant Chain",
      challenge: "Managing inventory, sales, and customer data across multiple locations manually",
      solution: "Unified data platform with AI-powered demand forecasting and customer insights",
      results: [
        "30% reduction in food waste through better forecasting",
        "25% increase in customer retention with personalized offers",
        "Saved 20 hours per week on manual reporting"
      ]
    },
    {
      business: "E-commerce Startup",
      challenge: "Disconnected data from website, inventory, marketing, and customer service", 
      solution: "Complete data unification with AI customer behavior analysis",
      results: [
        "40% improvement in marketing campaign ROI",
        "35% increase in customer lifetime value",
        "Real-time inventory optimization across channels"
      ]
    },
    {
      business: "Professional Services Firm",
      challenge: "Manual project tracking and client data management limiting growth",
      solution: "Integrated client and project data with AI performance insights",
      results: [
        "50% faster project completion through optimization",
        "60% improvement in client satisfaction scores",
        "Better resource allocation and profitability analysis"
      ]
    }
  ];


  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="primary" className="absolute inset-0 opacity-20" />
      <FloatingElements count={8} variant="mixed" theme="primary" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building className="w-12 h-12 text-primary" />
              <span className="text-2xl font-medium text-primary">Complete SMB Intelligence Solution</span>
            </div>
            
            <h1 className="text-hero gradient-text-primary">
              Everything Your Small Business Needs to Compete and Win
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Get the complete package: Data Coffee unifies all your business data while Surround AI provides predictive insights and recommendations. Everything you need to make smarter decisions and grow faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="primary" size="lg" asChild>
                <Link to="/contact?solution=complete&industry=smb">Start Free Trial</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate Your ROI</Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Complete Business Intelligence for SMBs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The only solution that combines simple data unification with powerful AI insights, designed specifically for small business needs and budgets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <EnhancedCard variant="default" className="p-8 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Get Started in 30 Minutes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple setup process gets you from zero to insights in less time than it takes to update a spreadsheet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small businesses consistently see significant improvements across all key performance areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Small Business Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how other small businesses have transformed their operations with our complete solution
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.2 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{useCase.business}</h3>
                    <h4 className="font-medium mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Small Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of small businesses using our complete intelligence platform to compete with larger companies and accelerate growth.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="primary" size="lg" asChild>
                <Link to="/contact?solution=complete&industry=smb" className="flex items-center gap-2">
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

export default CompleteSolutionSMB;