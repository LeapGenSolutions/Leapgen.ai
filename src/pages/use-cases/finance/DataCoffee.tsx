import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { Database, AlertTriangle, Target, Zap, CheckCircle, ArrowLeft, Coffee, Shield, FileSearch } from 'lucide-react';

const DataCoffeeFinance = () => {
  const challenges = [
    "Financial data fragmented across multiple systems (legacy databases, CRMs, loan origination software)",
    "Data frequently inconsistent, incomplete, or duplicated", 
    "Significant manual effort required to clean and consolidate data",
    "Delayed reporting and inaccurate customer insights",
    "Higher risk of non-compliance due to data inconsistencies"
  ];

  const costFactors = [
    { label: "Delayed reporting", impact: "High", icon: Target },
    { label: "Inaccurate customer insights", impact: "Critical", icon: FileSearch },
    { label: "Compliance risk", impact: "Critical", icon: Shield },
    { label: "Manual reconciliation effort", impact: "High", icon: Database }
  ];

  const capabilities = [
    {
      title: "Data Cleansing",
      description: "Intelligent algorithms automatically cleanse, standardize, and de-duplicate data from multiple sources.",
      features: [
        "Automated data validation",
        "Duplicate record elimination",
        "Format standardization"
      ]
    },
    {
      title: "Compliance Ready", 
      description: "Ensures all departments work with the same accurate information for regulatory submissions.",
      features: [
        "Regulatory reporting accuracy",
        "Audit trail maintenance",
        "Data lineage tracking"
      ]
    },
    {
      title: "Golden Records",
      description: "Creates a single, reliable \"golden record\" for each customer, eliminating data inconsistencies.",
      features: [
        "Single source of truth",
        "Customer 360-degree view",
        "Real-time data synchronization"
      ]
    }
  ];

  const results = [
    { metric: "80%", label: "Reduction in Time Spent on Data Consolidation and Cleansing" },
    { metric: "95%", label: "Improvement in Regulatory Compliance Report Accuracy" },
    { metric: "100%", label: "Elimination of Data Leakage from Single Source of Truth" }
  ];

  const features = [
    {
      title: "Automated Data Preparation",
      description: "Powerful data preparation and integration tool designed specifically for business users"
    },
    {
      title: "Universal Connectivity", 
      description: "Automatically connects to all internal and external data sources across your organization"
    },
    {
      title: "Intelligent Processing",
      description: "Uses intelligent algorithms to cleanse, standardize, and de-duplicate data automatically"
    },
    {
      title: "Golden Record Creation",
      description: "Creates a single, reliable \"golden record\" for each customer with consistent information"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="datacoffee" className="absolute inset-0 opacity-20" />
      <FloatingElements count={6} variant="mixed" theme="datacoffee" className="absolute inset-0 opacity-15" />
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
              <Coffee className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-primary">Data Coffee for Finance</span>
            </div>
            
            <h1 className="text-hero gradient-text-datacoffee">
              Unify Financial Data with Intelligent Integration
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform fragmented financial data across multiple systems into a single, reliable source of truth. Eliminate manual data reconciliation and ensure regulatory compliance with automated data preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="datacoffee" size="lg" asChild>
                <Link to="/contact?product=data-coffee&industry=finance">See Data Integration Demo</Link>
              </GradientButton>
              <GradientButton variant="secondary" size="lg" asChild>
                <Link to="/resources/roi-calculator">Calculate Time Savings</Link>
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
            <h2 className="text-4xl font-bold mb-4">The Financial Data Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Financial data is often fragmented across multiple systems: legacy databases, CRMs, loan origination software, and compliance tools. This data is frequently inconsistent, incomplete, or duplicated, requiring significant manual effort to clean and consolidate.
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
            <h3 className="text-2xl font-bold mb-8 text-center">The Cost of Fragmented Financial Data</h3>
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
            <h2 className="text-4xl font-bold mb-4">The Data Coffee Solution</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Data Coffee is a powerful data preparation and integration tool designed for business users. It automatically connects to all of a bank's internal and external data sources, creating a single, reliable "golden record" for each customer.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border text-center"
              >
                <h3 className="text-lg font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
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
                  <strong>Disparate Sources</strong>
                  <p>CRM, Legacy DB, Spreadsheets</p>
                </div>
                <div>
                  <strong>Manual Reconciliation</strong>
                  <p>Inconsistent, Duplicate Data</p>
                </div>
                <div>
                  <strong>Delayed Reporting</strong>
                  <p>Compliance Risk & Poor Insights</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="bg-primary/5 rounded-lg p-8 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✅</span>
                </div>
                <h3 className="text-xl font-bold">Data Coffee Approach</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <strong className="text-primary">Unified Sources</strong>
                  <p>CRM, Legacy DB, Spreadsheets</p>
                </div>
                <div>
                  <strong className="text-primary">Automated Unification</strong>
                  <p>Single Golden Record</p>
                </div>
                <div>
                  <strong className="text-primary">Real-time Access</strong>
                  <p>Accurate Insights & Compliance</p>
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
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Data Integration Capabilities</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
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
            transition={{ duration: 0.8, delay: 2.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proven Data Management Results</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 + index * 0.1 }}
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
            transition={{ duration: 0.8, delay: 3.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How Data Coffee Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.4 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <Database className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Automated Data Connection</h3>
              <p className="text-muted-foreground">
                Data Coffee automatically connects to all of a bank's internal and external data sources, eliminating the need for manual data gathering and integration efforts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Intelligent Data Processing</h3>
              <p className="text-muted-foreground">
                Uses intelligent algorithms to cleanse, standardize, and de-duplicate data, creating a single, reliable "golden record" for each customer that all departments can trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <Coffee className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Business User Friendly</h3>
              <p className="text-muted-foreground">
                Designed specifically for business users, Data Coffee simplifies the process of creating clean, structured data sets ready for analysis, reporting, and regulatory submissions.
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
          transition={{ duration: 0.8, delay: 4.0 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Unify Your Financial Data?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading financial institutions using Data Coffee to eliminate manual data reconciliation and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="datacoffee" size="lg" asChild>
                <Link to="/contact?product=data-coffee&industry=finance">Schedule Data Integration Demo</Link>
              </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/roi-calculator">Calculate Time Savings</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DataCoffeeFinance;