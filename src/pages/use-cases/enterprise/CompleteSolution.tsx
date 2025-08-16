import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building2, 
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

const CompleteSolutionEnterprise = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Strategic Enterprise Intelligence",
      description: "Combine unified data with AI insights to predict market trends, optimize operations, and drive competitive advantage"
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Break down departmental barriers with shared data and insights that align all business units toward common goals"
    },
    {
      icon: BarChart3,
      title: "Real-time Executive Dashboards",
      description: "Monitor enterprise performance with live dashboards showing KPIs, market trends, and operational metrics"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Governance",
      description: "Maintain strict data security and compliance while enabling authorized access across the organization"
    }
  ];

  const processSteps = [
    {
      step: "Discovery",
      title: "Enterprise Data Assessment",
      description: "Comprehensive analysis of current systems, data sources, and business requirements"
    },
    {
      step: "Unification",
      title: "Data Platform Implementation",
      description: "Deploy Data Coffee to unify all enterprise systems and create single source of truth"
    },
    {
      step: "Intelligence",
      title: "AI-Powered Analytics",
      description: "Implement Surround AI to analyze patterns and generate predictive insights"
    },
    {
      step: "Optimization", 
      title: "Continuous Enhancement",
      description: "Ongoing optimization of processes and outcomes based on real-time insights"
    }
  ];

  const outcomes = [
    { metric: "50%", description: "Faster strategic decision-making" },
    { metric: "35%", description: "Improvement in operational efficiency" },
    { metric: "25%", description: "Increase in revenue predictability" },
    { metric: "60%", description: "Better cross-department alignment" }
  ];

  const useCases = [
    {
      department: "Fortune 500 Manufacturing",
      challenge: "Supply chain disruptions and production inefficiencies across global operations",
      solution: "Unified operations data with predictive analytics for supply chain optimization",
      results: [
        "40% reduction in supply chain disruptions",
        "25% improvement in production efficiency",
        "Real-time visibility across global operations"
      ]
    },
    {
      department: "Global Financial Services",
      challenge: "Fragmented customer data limiting cross-selling and risk management capabilities", 
      solution: "360-degree customer view with predictive risk modeling and opportunity identification",
      results: [
        "30% increase in cross-selling success rates",
        "50% improvement in risk prediction accuracy",
        "Unified customer experience across all channels"
      ]
    },
    {
      department: "Technology Conglomerate",
      challenge: "Disconnected business units preventing enterprise-wide strategic planning",
      solution: "Integrated business intelligence platform with predictive market analysis",
      results: [
        "60% faster strategic planning cycles",
        "Better resource allocation across business units",
        "Improved market opportunity identification"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="finance" className="absolute inset-0 opacity-20" />
      <FloatingElements count={8} variant="mixed" theme="finance" className="absolute inset-0 opacity-15" />
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
              <Building2 className="w-12 h-12 text-primary" />
              <span className="text-2xl font-medium text-primary">Complete Enterprise Intelligence Solution</span>
            </div>
            
            <h1 className="text-hero gradient-text-finance">
              Transform Enterprise Strategy with Unified AI Intelligence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine the power of Data Coffee's enterprise data unification with Surround AI's predictive intelligence to create a comprehensive solution for Fortune 500 companies and large enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="finance" size="lg" asChild>
                <Link to="/contact?solution=complete&industry=enterprise">See Complete Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate Total ROI</Link>
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
            <h2 className="text-4xl font-bold mb-4">Complete Enterprise Intelligence Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The only solution that combines enterprise data unification with AI-powered insights at the scale and security required by Fortune 500 companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Enterprise Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures smooth deployment at enterprise scale with minimal disruption to business operations
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
              Enterprise clients consistently see significant improvements across all key business metrics
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
            <h2 className="text-4xl font-bold mb-4">Enterprise Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Fortune 500 companies have transformed their operations with our complete intelligence platform
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
                    <h3 className="text-xl font-semibold mb-3 text-primary">{useCase.department}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join Fortune 500 companies using our complete intelligence platform to drive competitive advantage and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="finance" size="lg" asChild>
              <Link to="/contact?solution=complete&industry=enterprise" className="flex items-center gap-2">
                Schedule Complete Demo <ArrowRight className="w-4 h-4" />
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

export default CompleteSolutionEnterprise;