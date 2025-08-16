import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Clock, ArrowRight, Building2, HeartHandshake, GraduationCap, ShoppingCart, Calculator, Users } from 'lucide-react';

const UseCases = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Our clients see measurable results within 30 days of implementation"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, HIPAA, and GDPR compliant solutions you can trust"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Get up and running quickly with our proven implementation process"
    }
  ];

  const industries = [
    {
      title: "Finance & Banking",
      description: "Transform financial services with predictive intelligence and unified data management",
      challenges: [
        "Fragmented customer data",
        "Fraud detection delays", 
        "Regulatory compliance complexity"
      ],
      outcomes: [
        "50% reduction in fraud losses",
        "20% increase in customer retention",
        "95% compliance accuracy"
      ],
      href: "/use-cases/finance",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    },
    {
      title: "Healthcare",
      description: "Deliver proactive patient care through integrated health data and predictive analytics",
      challenges: [
        "Siloed patient records",
        "Reactive care models",
        "Administrative burden"
      ],
      outcomes: [
        "25% reduction in readmissions",
        "40% lower admin costs",
        "15% better outcomes"
      ],
      href: "/use-cases/healthcare",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      title: "Government & Education",
      description: "Optimize public services and educational outcomes with data-driven insights",
      challenges: [
        "Legacy system silos",
        "Resource allocation inefficiencies",
        "Manual reporting processes"
      ],
      outcomes: [
        "30% better resource allocation",
        "15% improved student retention",
        "70% faster reporting"
      ],
      href: "/use-cases/sled",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
    },
    {
      title: "E-commerce & Retail", 
      description: "Personalize customer experiences and optimize operations with AI-driven insights",
      challenges: [
        "Generic customer experiences",
        "High cart abandonment",
        "Inventory optimization"
      ],
      outcomes: [
        "25% higher conversion rates",
        "35% less cart abandonment",
        "20% inventory reduction"
      ],
      href: "/use-cases/retail",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Accounting & Audit",
      description: "Accelerate audits and enhance accuracy with automated data preparation and analysis",
      challenges: [
        "Manual data preparation",
        "Sample-based testing limitations",
        "Time-intensive processes"
      ],
      outcomes: [
        "70% less prep time",
        "90% better anomaly detection",
        "40% faster engagements"
      ],
      href: "/use-cases/accounting",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      title: "Enterprise & Fortune 500",
      description: "Break down data silos and accelerate decision-making across your organization",
      challenges: [
        "Departmental data silos",
        "Slow decision-making",
        "Conflicting reports"
      ],
      outcomes: [
        "50% faster decisions",
        "15% cost reduction", 
        "80% better collaboration"
      ],
      href: "/use-cases/enterprise",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="geometric" theme="finance" className="absolute inset-0" />
      <FloatingElements count={12} variant="squares" theme="finance" className="absolute inset-0" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero mb-6 gradient-text-finance">
              AI Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how Surround AI and Data Coffee transform businesses across sectors with intelligent automation, predictive insights, and unified data management.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=consultation">Schedule Consultation</Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/roi-calculator">Calculate Your ROI</Link>
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore tailored AI solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-destructive">Key Challenges:</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Expected Outcomes:</h4>
                        <ul className="space-y-2">
                          {industry.outcomes.map((outcome, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <GradientButton variant="finance" asChild className="group-hover:bg-primary/90 transition-colors">
                      <Link to={industry.href} className="flex items-center gap-2">
                        Explore Solutions <ArrowRight className="w-4 h-4" />
                      </Link>
                    </GradientButton>
                  </div>
                  
                  <div className="hidden lg:block">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation to see how our AI solutions can address your specific industry challenges and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?type=consultation">Schedule Free Consultation</Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/contact?type=demo">Request Demo</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default UseCases;