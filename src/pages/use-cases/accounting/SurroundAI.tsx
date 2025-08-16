import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Zap,
  FileText,
  Brain
} from 'lucide-react';

const AccountingSurroundAI = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Client Advisory",
      description: "Intelligent recommendations for tax planning, cash flow optimization, and financial strategy",
      benefit: "3x faster advisory delivery"
    },
    {
      icon: Calculator,
      title: "Automated Tax Optimization",
      description: "Real-time tax strategy recommendations and scenario modeling for clients",
      benefit: "25% average tax savings"
    },
    {
      icon: Users,
      title: "Client Relationship Management",
      description: "AI-driven insights into client needs, preferences, and communication patterns",
      benefit: "40% improved client satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Predictive Financial Analysis",
      description: "Forecast business performance and identify optimization opportunities",
      benefit: "90% forecast accuracy"
    }
  ];

  const useCases = [
    {
      title: "Tax Planning & Strategy",
      description: "Automate complex tax scenarios and optimize strategies",
      capabilities: [
        "Real-time tax impact analysis",
        "Multi-scenario tax planning",
        "Compliance risk assessment",
        "Strategic tax recommendations"
      ],
      impact: "50% reduction in tax planning time"
    },
    {
      title: "Client Advisory Services",
      description: "Enhance advisory capabilities with AI-driven insights",
      capabilities: [
        "Automated financial health scoring",
        "Cash flow optimization recommendations",
        "Risk assessment and mitigation",
        "Growth strategy development"
      ],
      impact: "3x increase in advisory revenue"
    },
    {
      title: "Practice Management",
      description: "Optimize firm operations and resource allocation",
      capabilities: [
        "Staff utilization optimization",
        "Client profitability analysis",
        "Workflow automation",
        "Performance benchmarking"
      ],
      impact: "35% improvement in firm efficiency"
    }
  ];

  const workflow = [
    {
      step: "1",
      title: "Data Integration",
      description: "Connect to client's financial systems and data sources"
    },
    {
      step: "2",
      title: "AI Analysis",
      description: "Advanced algorithms analyze financial patterns and opportunities"
    },
    {
      step: "3",
      title: "Strategic Insights",
      description: "Generate actionable recommendations and advisory points"
    },
    {
      step: "4",
      title: "Client Delivery",
      description: "Present insights through automated reports and dashboards"
    }
  ];

  const benefits = [
    {
      metric: "50%",
      label: "Faster Tax Planning",
      description: "Automated scenario modeling and optimization"
    },
    {
      metric: "3x",
      label: "Advisory Revenue Growth",
      description: "Enhanced service capabilities drive new revenue"
    },
    {
      metric: "40%",
      label: "Client Satisfaction Increase",
      description: "More strategic, value-added services"
    },
    {
      metric: "60%",
      label: "Efficiency Improvement",
      description: "Streamlined workflows and automation"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="geometric" theme="surroundai" className="absolute inset-0 opacity-20" />
      <FloatingElements count={10} variant="circles" theme="surroundai" className="absolute inset-0 opacity-15" />
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/use-cases" className="hover:text-primary">Use Cases</Link> / 
            <Link to="/use-cases/accounting" className="hover:text-primary ml-1">Accounting & Audit</Link> / 
            <span className="ml-1">SurroundAI</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/use-cases/accounting"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
            >
              ← Back to Accounting
            </Link>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                SurroundAI for Accountants
              </span>
            </div>
            
            <h1 className="text-hero gradient-text-surroundai">
              Transform Client Advisory
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Elevate your accounting practice with AI-powered client advisory services. Deliver strategic insights, optimize tax planning, and increase revenue per client with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton variant="surroundai" size="lg" asChild>
                <Link to="/contact?product=surroundai&industry=accounting">Request Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate ROI</Link>
              </GradientButton>
            </div>
          </motion.div>

          {/* Time Savings Comparison */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <EnhancedCard variant="glass">
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-2">Manual Advisory</h3>
                <div className="text-2xl font-bold text-destructive">20+ hours</div>
              </div>
            </EnhancedCard>
            <EnhancedCard variant="glass">
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-2">With SurroundAI</h3>
                <div className="text-2xl font-bold text-primary">6 hours</div>
              </div>
            </EnhancedCard>
            <EnhancedCard variant="glass">
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-2">Time Saved</h3>
                <div className="text-2xl font-bold text-primary">14+ hours</div>
              </div>
            </EnhancedCard>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Intelligent Advisory Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SurroundAI transforms how you deliver advisory services with advanced AI capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy SurroundAI across critical accounting and advisory functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <ul className="space-y-2 mb-4">
                  {useCase.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Target className="w-3 h-3" />
                  {useCase.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">How SurroundAI Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamless integration that enhances your existing advisory process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SurroundAI delivers quantifiable benefits to your accounting practice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <div className="text-lg font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
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
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Advisory Practice?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join accounting firms using SurroundAI to deliver strategic insights and grow advisory revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?product=surroundai&industry=accounting" className="flex items-center gap-2">
                Request SurroundAI Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/use-cases/accounting">Back to Accounting Solutions</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AccountingSurroundAI;