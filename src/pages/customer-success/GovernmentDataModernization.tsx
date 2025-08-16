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
  Shield,
  FileText,
  Database,
  Zap,
  Cloud
} from 'lucide-react';

const GovernmentDataModernization = () => {
  const results = [
    {
      metric: "80%",
      label: "Document Review Time",
      description: "Reduction in manual processing"
    },
    {
      metric: "60%", 
      label: "Citizen Response Speed",
      description: "Faster query responses"
    },
    {
      metric: "Enhanced",
      label: "Compliance Enhancement", 
      description: "Automated data governance"
    },
    {
      metric: "Real-time",
      label: "Decision Making",
      description: "Instant insights from data"
    }
  ];

  const challenges = [
    "Processing vast amounts of classified and unclassified documents",
    "Ensuring strict compliance with security regulations", 
    "Improving citizen service efficiency and response times",
    "Manual document review consuming excessive resources",
    "Limited real-time decision-making capabilities",
    "Fragmented data across multiple government systems"
  ];

  const requirements = [
    { aspect: "Data Security", level: "Mission Critical" },
    { aspect: "Compliance", level: "Multi-Standard" },
    { aspect: "Processing Speed", level: "Real-time Required" },
    { aspect: "Citizen Service", level: "24/7 Availability" }
  ];

  const solutionFeatures = [
    {
      icon: Cloud,
      title: "Azure-based AI Platform",
      description: "Secure cloud infrastructure meeting government compliance standards"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automated classification and extraction of key information"
    },
    {
      icon: Users,
      title: "Virtual Assistants",
      description: "AI-powered chatbots for citizen service and internal operations"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "End-to-end encryption with audit trails and access controls"
    }
  ];

  const technicalFeatures = [
    {
      title: "Automated Document Processing",
      features: [
        "Multi-format document ingestion",
        "Intelligent classification and tagging", 
        "Key information extraction",
        "Compliance verification"
      ]
    },
    {
      title: "AI Virtual Assistants",
      features: [
        "Natural language query processing",
        "Real-time information retrieval",
        "Multi-channel deployment",
        "Escalation workflows"
      ]
    },
    {
      title: "Security & Governance",
      features: [
        "Role-based access controls",
        "Audit trail generation",
        "Data encryption at rest and in transit",
        "Compliance reporting"
      ]
    }
  ];

  const outcomes = [
    {
      category: "Operational Efficiency",
      improvements: [
        "80% reduction in document processing time",
        "60% faster citizen query responses", 
        "Automated compliance reporting",
        "Real-time operational dashboards"
      ]
    },
    {
      category: "Citizen Experience",
      improvements: [
        "24/7 automated service availability",
        "Instant access to information",
        "Consistent service quality",
        "Reduced wait times"
      ]
    },
    {
      category: "Security & Compliance",
      improvements: [
        "Enhanced data protection",
        "Automated audit trails",
        "Multi-level security controls",
        "Regulatory compliance automation"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="government" className="absolute inset-0 opacity-30" />
      <FloatingElements count={8} variant="circles" theme="government" className="absolute inset-0 opacity-20" />
      
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
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-600 rounded-full text-sm font-medium">
                DataCoffee Success Story
              </span>
              <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">
                Medium Enterprise
              </span>
            </div>
            
            <h1 className="text-hero mb-6 gradient-text-datacoffee">
              Government Data Modernization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              How a leading government agency transformed data processing and citizen services with secure AI-powered automation, achieving 80% efficiency gains while maintaining strict compliance.
            </p>
            
            <div className="text-muted-foreground mb-8">
              <span className="font-medium">Leading Government Agency</span> • Public Sector • Medium Enterprise
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
            <h2 className="text-4xl font-bold mb-4">Transformative Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The DataCoffee implementation delivered significant improvements in efficiency, security, and citizen service quality.
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
                The government agency faced complex challenges in modernizing their data processing while maintaining the highest security and compliance standards.
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
                  <h3 className="text-xl font-semibold mb-6">Critical Requirements</h3>
                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{req.aspect}</span>
                        <span className="text-primary font-medium">{req.level}</span>
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
              <h2 className="text-4xl font-bold">The DataCoffee Solution</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We implemented a comprehensive Azure-based AI solution that addressed all security, compliance, and efficiency requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          {/* Technical Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {technicalFeatures.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The implementation delivered transformative results across all areas of government operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{outcome.category}</h3>
                <ul className="space-y-3">
                  {outcome.improvements.map((improvement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {improvement}
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
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Data Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how DataCoffee can deliver secure, compliant, and efficient data processing for your organization with enterprise-grade AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="datacoffee" size="lg" asChild>
              <Link to="/contact?type=demo&product=datacoffee" className="flex items-center gap-2">
                Schedule DataCoffee Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/datacoffee-roi-calculator">Calculate Your ROI</Link>
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

export default GovernmentDataModernization;