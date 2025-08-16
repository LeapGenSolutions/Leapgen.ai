import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Finance = () => {
  const challenges = [
    "Fragmented customer data across multiple systems",
    "Static risk models that miss complex patterns", 
    "Delayed fraud detection and prevention",
    "Manual data reconciliation processes",
    "Inconsistent regulatory compliance reporting",
    "Reactive rather than proactive customer service"
  ];

  const solutions = [
    {
      title: "Surround AI for Finance",
      description: "Dynamic intelligence platform for predictive financial insights",
      benefits: [
        "50% reduction in fraud losses",
        "20% increase in customer retention", 
        "75% better risk modeling"
      ],
      href: "/use-cases/finance/surround-ai",
      icon: TrendingUp
    },
    {
      title: "Data Coffee for Finance", 
      description: "Automated data preparation and integration for financial institutions",
      benefits: [
        "80% less data consolidation time",
        "95% compliance accuracy",
        "Complete data leakage elimination"
      ],
      href: "/use-cases/finance/data-coffee",
      icon: Shield
    },
    {
      title: "Complete Financial Intelligence",
      description: "Integrated Surround AI + Data Coffee solution for comprehensive financial operations", 
      benefits: [
        "20% increase in customer lifetime value",
        "60% faster fraud detection",
        "95% regulatory compliance"
      ],
      href: "/use-cases/finance/complete-solution",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="gradient" theme="finance" className="absolute inset-0 opacity-20" />
      <FloatingElements count={10} variant="squares" theme="finance" className="absolute inset-0 opacity-15" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-primary">Finance & Banking</span>
              </div>
              
              <h1 className="text-hero mb-6 gradient-text-finance">
                Transform Financial Services with AI Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Move beyond traditional risk models and fragmented data. Deliver personalized financial services, enhance fraud prevention, and make proactive decisions with real-time predictive intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton variant="finance" size="lg" asChild>
                  <Link to="/contact?type=demo&industry=finance">See Solutions in Action</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/resources/finance-case-study">View Case Study</Link>
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="AI Solutions for Finance and Banking"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Industry Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Financial institutions face complex data challenges that traditional solutions can't address effectively.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">AI Solutions for Financial Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right AI solution for your financial institution's specific needs and challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <GradientButton variant="finance" asChild className="w-full">
                  <Link to={solution.href} className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </GradientButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Financial Institution?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation to see how our AI solutions can help you reduce fraud, improve customer retention, and enhance regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=consultation&industry=finance">Schedule Consultation</Link>
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

export default Finance;