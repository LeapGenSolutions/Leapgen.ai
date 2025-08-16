import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Lightbulb,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

const HealthcareSalesTransformation = () => {
  const results = [
    {
      metric: "50%",
      label: "Response Time Reduction",
      description: "Faster customer inquiry responses"
    },
    {
      metric: "40%", 
      label: "Sales Productivity Boost",
      description: "Increased sales team efficiency"
    },
    {
      metric: "Increased",
      label: "Conversion Rate", 
      description: "Higher lead-to-customer conversion"
    },
    {
      metric: "Instant",
      label: "Real-time Insights",
      description: "Immediate access to customer data"
    }
  ];

  const challenges = [
    "Manual workflows causing inefficiencies",
    "Fragmented data across multiple systems", 
    "Delayed response times for customer inquiries",
    "Sales reps relying on outdated reports",
    "Missed opportunities due to slow processes",
    "Limited real-time customer insights"
  ];

  const businessImpact = [
    { aspect: "Response Time", status: "Slow & Inconsistent" },
    { aspect: "Sales Productivity", status: "Below Potential" },
    { aspect: "Customer Satisfaction", status: "Declining" },
    { aspect: "Revenue Growth", status: "Stagnant" }
  ];

  const solutionFeatures = [
    {
      icon: Zap,
      title: "AI Sales Assistant",
      description: "Intelligent automation for lead qualification and customer interactions"
    },
    {
      icon: BarChart3,
      title: "CRM Integration",
      description: "Seamless connection with existing sales systems and workflows"
    },
    {
      icon: Users,
      title: "Real-time Insights",
      description: "Instant access to customer data and sales performance metrics"
    },
    {
      icon: Shield,
      title: "Automated Workflows",
      description: "Streamlined processes for follow-ups and lead nurturing"
    }
  ];

  const implementationSteps = [
    {
      phase: "Discovery & Planning",
      duration: "2 weeks",
      activities: ["System assessment", "Workflow analysis", "Integration planning"]
    },
    {
      phase: "AI Model Development", 
      duration: "4 weeks",
      activities: ["Custom AI training", "CRM integration", "Automation setup"]
    },
    {
      phase: "Testing & Optimization",
      duration: "2 weeks", 
      activities: ["User acceptance testing", "Performance tuning", "Staff training"]
    },
    {
      phase: "Full Deployment",
      duration: "1 week",
      activities: ["Go-live support", "Performance monitoring", "Ongoing optimization"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="geometric" theme="surroundai" className="absolute inset-0 opacity-20" />
      <FloatingElements count={12} variant="circles" theme="surroundai" className="absolute inset-0 opacity-30" />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-600 rounded-full text-sm font-medium">
                SurroundAI Success Story
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Large Enterprise
              </span>
            </div>
            
            <h1 className="text-hero mb-6 gradient-text-surroundai">
              Healthcare Sales Transformation
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              How a leading healthcare organization revolutionized their sales operations with AI-powered automation, achieving 50% faster response times and 40% productivity gains.
            </p>
            
            <div className="text-muted-foreground mb-8">
              <span className="font-medium">Leading Healthcare Organization</span> • Healthcare Industry • Large Enterprise
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The AI Sales Assistant delivered significant improvements across all key performance indicators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-lg font-semibold mb-2">{result.label}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-destructive" />
                <h2 className="text-4xl font-bold">The Challenge</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                The healthcare organization faced significant inefficiencies in their sales process that were impacting customer satisfaction and revenue growth.
              </p>

              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <EnhancedCard variant="glass">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Impact on Business</h3>
                  <div className="space-y-4">
                    {businessImpact.map((impact, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{impact.aspect}</span>
                        <span className="text-destructive font-medium">{impact.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </EnhancedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-background/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">The SurroundAI Solution</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implemented a comprehensive AI Sales Assistant that integrated seamlessly with their existing systems while providing advanced automation capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg"
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

      {/* Implementation Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured 9-week implementation process ensuring smooth transition and maximum ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{step.phase}</h3>
                  <span className="text-sm text-primary font-medium">{step.duration}</span>
                </div>
                <ul className="space-y-1">
                  {step.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {activity}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Sales Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how SurroundAI can deliver similar results for your organization with AI-powered sales automation and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="surroundai" size="lg" asChild>
              <Link to="/contact?type=demo&product=surroundai" className="flex items-center gap-2">
                Schedule SurroundAI Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/surroundai-roi-calculator">Calculate Your ROI</Link>
            </GradientButton>
          </div>
          <div className="mt-6 text-center">
            <GradientButton variant="secondary" asChild>
              <Link to="/customer-success" className="flex items-center gap-2 mx-auto">
                ← Back to Customer Success Stories
              </Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthcareSalesTransformation;