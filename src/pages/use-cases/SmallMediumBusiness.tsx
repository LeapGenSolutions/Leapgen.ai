import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const SmallMediumBusiness = () => {
  const challenges = [
    {
      icon: DollarSign,
      title: "Limited Budget for Enterprise Solutions",
      description: "Traditional AI solutions are too expensive and complex for smaller organizations"
    },
    {
      icon: Users,
      title: "Lack of Technical Expertise", 
      description: "Small teams without dedicated IT resources to implement and maintain AI systems"
    },
    {
      icon: Clock,
      title: "Time-Consuming Manual Processes",
      description: "Repetitive tasks that consume valuable time and reduce productivity"
    }
  ];

  const outcomes = [
    {
      metric: "60%",
      description: "Cost reduction compared to enterprise solutions"
    },
    {
      metric: "40%", 
      description: "Increase in operational efficiency"
    },
    {
      metric: "3x",
      description: "Faster implementation than traditional AI"
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Affordable AI Solutions",
      description: "Enterprise-level capabilities at SMB-friendly pricing with flexible payment options"
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Get up and running in days, not months, with our streamlined deployment process"
    },
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Intuitive design that requires minimal training for your team to become productive"
    },
    {
      icon: Shield,
      title: "Scalable Solutions",
      description: "Start small and scale up as your business grows, with no major infrastructure changes"
    }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and support systems that handle routine inquiries 24/7",
      benefits: [
        "Reduce response times by 70%",
        "Handle 80% of common inquiries automatically", 
        "Free up staff for complex customer issues",
        "Improve customer satisfaction scores"
      ]
    },
    {
      title: "Sales Process Optimization", 
      description: "Intelligent lead scoring and automated follow-up systems to boost conversions",
      benefits: [
        "Increase lead conversion rates by 35%",
        "Automate lead nurturing campaigns",
        "Prioritize high-value prospects", 
        "Reduce sales cycle length"
      ]
    },
    {
      title: "Document Processing & Analysis",
      description: "Automated document classification, data extraction, and compliance checking",
      benefits: [
        "Process documents 10x faster",
        "Reduce manual errors by 90%",
        "Ensure regulatory compliance",
        "Extract insights from unstructured data"
      ]
    },
    {
      title: "Inventory & Supply Chain",
      description: "Predictive analytics for inventory management and supply chain optimization",
      benefits: [
        "Reduce inventory costs by 25%",
        "Prevent stockouts and overstock", 
        "Optimize supplier relationships",
        "Improve demand forecasting accuracy"
      ]
    }
  ];


  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="gradient" theme="primary" className="absolute inset-0 opacity-15" />
      <FloatingElements count={8} variant="circles" theme="primary" className="absolute inset-0 opacity-20" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-hero gradient-text-primary">
                Small & Medium Business
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enterprise-level AI insights and automation designed specifically for small and medium businesses. Get the power of AI without the enterprise complexity or cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="primary" size="lg" asChild>
                <Link to="/contact?type=demo&industry=smb">Request Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/contact?type=consultation">Schedule Consultation</Link>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Common SMB Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small and medium businesses face unique obstacles when trying to leverage AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-primary/5 rounded-xl p-6">
                <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                <p className="text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">SMB-Focused AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the solution that fits your business size and growth ambitions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Surround AI for SMB</h3>
              <p className="text-muted-foreground mb-6">Enterprise AI power designed for small business budgets</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">40% customer retention increase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">25% sales conversion improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">60% manual task reduction</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="surroundai" asChild className="w-full">
                <Link to="/use-cases/small-medium-business/surround-ai" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>

            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Data Coffee for SMB</h3>
              <p className="text-muted-foreground mb-6">Simple data unification for small business operations</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">80% manual data entry reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">90% data accuracy improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50% faster business reporting</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="datacoffee" asChild className="w-full">
                <Link to="/use-cases/small-medium-business/data-coffee" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>

            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Complete SMB Intelligence</h3>
              <p className="text-muted-foreground mb-6">Everything your small business needs to compete and win</p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-primary">Key Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">3x faster business insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">50% manual task reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">25% sales conversion increase</span>
                  </li>
                </ul>
              </div>
              
              <GradientButton variant="primary" asChild className="w-full">
                <Link to="/use-cases/small-medium-business/complete-solution" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Popular Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications that deliver immediate value to small and medium businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
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
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Small Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of SMBs using AI to compete with larger companies and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="primary" size="lg" asChild>
              <Link to="/contact?type=demo&industry=smb" className="flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/customer-success">View Success Stories</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SmallMediumBusiness;