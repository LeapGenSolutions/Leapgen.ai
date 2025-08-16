import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  Database, 
  FileText, 
  TrendingUp, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Zap,
  BarChart3,
  RefreshCw
} from 'lucide-react';

const AccountingDataCoffee = () => {
  const features = [
    {
      icon: Database,
      title: "Automated Data Preparation",
      description: "Streamline data collection and preparation from multiple client systems and formats",
      benefit: "80% time reduction"
    },
    {
      icon: Shield,
      title: "Data Quality Assurance",
      description: "Advanced validation and cleansing ensures 95% data integrity for audit processes",
      benefit: "95% data integrity"
    },
    {
      icon: Zap,
      title: "Rapid Data Integration",
      description: "Connect and harmonize data from various accounting systems, ERPs, and databases",
      benefit: "10x faster integration"
    },
    {
      icon: FileText,
      title: "Audit-Ready Output",
      description: "Generate clean, standardized datasets optimized for audit analysis and testing",
      benefit: "Audit-optimized format"
    }
  ];

  const dataSources = [
    "QuickBooks & Sage Accounting Systems",
    "SAP & Oracle ERP Systems", 
    "Bank Statement Files (PDF, CSV, Excel)",
    "Payroll Systems & HR Databases",
    "Inventory Management Systems",
    "CRM & Sales Transaction Data",
    "Tax Preparation Software",
    "Custom Database Exports"
  ];

  const workflow = [
    {
      step: "1",
      title: "Data Discovery",
      description: "Automatically identify and catalog all relevant data sources across client systems"
    },
    {
      step: "2",
      title: "Smart Extraction",
      description: "Extract data from various formats while maintaining source integrity and lineage"
    },
    {
      step: "3",
      title: "Quality Validation",
      description: "Apply advanced validation rules to identify and flag data quality issues"
    },
    {
      step: "4",
      title: "Data Cleansing",
      description: "Automatically clean and standardize data according to audit requirements"
    },
    {
      step: "5",
      title: "Audit Optimization",
      description: "Transform data into audit-ready formats for analysis and testing"
    }
  ];

  const benefits = [
    {
      metric: "80%",
      label: "Reduction in data preparation time",
      description: "Hours saved per engagement"
    },
    {
      metric: "95%",
      label: "Data integrity improvement",
      description: "Fewer audit issues and corrections"
    },
    {
      metric: "60%",
      label: "Faster audit cycle completion",
      description: "Earlier audit delivery"
    },
    {
      metric: "90%",
      label: "Reduction in manual errors",
      description: "Higher audit quality"
    }
  ];

  const caseStudy = {
    title: "Mid-Size Accounting Firm",
    challenge: "Audit team spending 60% of engagement time on data preparation and cleansing instead of analysis",
    solution: "Implemented Data Coffee for automated data preparation across all audit engagements",
    results: [
      "Reduced data prep time from 24 hours to 5 hours per engagement",
      "Increased audit capacity by 40% with same team size",
      "Improved data quality resulted in 85% fewer audit adjustments",
      "Completed audit seasons 3 weeks earlier than previous years"
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="gradient" theme="datacoffee" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="hexagons" theme="datacoffee" className="absolute inset-0 opacity-15" />
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-muted-foreground">
            <Link to="/use-cases" className="hover:text-primary">Use Cases</Link> / 
            <Link to="/use-cases/accounting" className="hover:text-primary ml-1">Accounting & Audit</Link> / 
            <span className="ml-1">Data Coffee</span>
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
                Data Coffee for Auditors
              </span>
            </div>
            
            <h1 className="text-hero gradient-text-datacoffee">
              Automate Data Preparation
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Eliminate the most time-consuming part of audit engagements. Data Coffee automatically prepares, cleanses, and optimizes client data for audit analysis, reducing preparation time by 80%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton variant="datacoffee" size="lg" asChild>
                <Link to="/contact?product=data-coffee&industry=accounting">Request Demo</Link>
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
                <h3 className="font-semibold mb-2">Manual Data Prep</h3>
                <div className="text-2xl font-bold text-destructive">40+ hours</div>
              </div>
            </EnhancedCard>
            <EnhancedCard variant="glass">
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-2">With Data Coffee</h3>
                <div className="text-2xl font-bold text-primary">8 hours</div>
              </div>
            </EnhancedCard>
            <EnhancedCard variant="glass">
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-2">Time Saved</h3>
                <div className="text-2xl font-bold text-primary">32+ hours</div>
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
            <h2 className="text-4xl font-bold mb-4">Intelligent Data Processing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee transforms messy, inconsistent client data into clean, audit-ready datasets automatically.
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

      {/* Data Sources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Connect Any Data Source</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee works seamlessly with all major accounting systems and data formats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-xl p-4 border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{source}</p>
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
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Automated Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Data Coffee transforms raw client data into audit-ready insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 + index * 0.1 }}
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
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <h2 className="text-4xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data Coffee delivers immediate, quantifiable benefits to your audit practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.1 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                <div className="text-lg font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            <EnhancedCard variant="glass">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Success Story</h2>
                  <h3 className="text-xl font-semibold text-primary">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    Struggling with time-consuming data preparation across multiple client engagements
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-destructive" />
                      Challenge:
                    </h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      Solution:
                    </h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Results:
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Eliminate Data Preparation Bottlenecks?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join accounting firms using Data Coffee to transform their audit efficiency and focus on high-value analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="datacoffee" size="lg" asChild>
              <Link to="/contact?product=data-coffee&industry=accounting" className="flex items-center gap-2">
                Request Data Coffee Demo <ArrowRight className="w-4 h-4" />
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

export default AccountingDataCoffee;