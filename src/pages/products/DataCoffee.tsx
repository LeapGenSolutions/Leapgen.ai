'use client'

import { motion } from 'framer-motion'
import { Database, Shield, Lock, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientButton } from '../../components/ui/gradient-button'
import { EnhancedCard } from '../../components/ui/enhanced-card'
import { AnimatedBackground } from '../../components/ui/animated-background'
import { FloatingElements } from '../../components/ui/floating-elements'
import AnimatedCounter from '../../components/AnimatedCounter'

const DataCoffee = () => {
  const features = [
    {
      icon: Shield,
      title: 'Tokenization & Anonymization Engine',
      description: 'Centralized system for protecting PII/PHI with real-time masking, allowing for secure and cross-referenceable data across different applications.'
    },
    {
      icon: Database,
      title: 'Synthetic Data Generator',
      description: 'Creates usable data clones that retain statistical accuracy without containing any real user information, ideal for safe testing, QA, and model training.'
    },
    {
      icon: Lock,
      title: 'GDPR/HIPAA/FedRAMP Compliance',
      description: 'Built-in compliance frameworks ensure your data governance meets the strictest regulatory requirements across industries.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Gain insights from your data while maintaining privacy with our advanced analytical capabilities and real-time reporting.'
    }
  ]

  const benefits = [
    '100% privacy protection',
    'GDPR/HIPAA/FedRAMP compliant',
    'Real-time data anonymization',
    'Synthetic test data generation',
    '93% statistical accuracy',
    '78% faster testing cycles'
  ]

  const stats = [
    { value: 100, suffix: '%', label: 'Privacy Protected' },
    { value: 93, suffix: '%', label: 'Statistical Accuracy' },
    { value: 78, suffix: '%', label: 'Faster Testing' },
    { value: 0, suffix: ' Breaches', label: 'Data Security Record' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden theme-datacoffee min-h-[80vh]">
        {/* Background Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/006/295/original/data-protection-concept-data-security-and-privacy-and-internet-security-flat-illustration-vector.jpg"
          alt="DataCoffee Data Governance Platform"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90 z-10" />
        
        <AnimatedBackground variant="particles" theme="datacoffee" className="absolute inset-0 z-20" />
        <FloatingElements count={8} variant="hexagons" theme="datacoffee" className="absolute inset-0 z-20" />
        <div className="container mx-auto relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-hero mb-6">
              <span className="gradient-text-datacoffee">DataCoffee</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Data Governance & Synthetic Data Platform
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Create Synthetic Test Data from Production Without Data Leaving Your Organization
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              DataCoffee is a comprehensive data governance platform that creates realistic synthetic data from your production systems 
              while ensuring sensitive information never leaves your organization. Perfect for regulated industries requiring GDPR, HIPAA, and FedRAMP compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact?type=demo&product=data-coffee">
                <GradientButton variant="datacoffee" size="lg">
                  Explore DataCoffee
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </Link>
              <Link to="/resources/roi-calculator">
                <GradientButton variant="secondary" size="lg">
                  Calculate Your ROI
                </GradientButton>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <EnhancedCard key={index} variant="glass" className="text-center p-4">
                  <div className="text-4xl font-bold gradient-text-datacoffee mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </EnhancedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Data Governance</h2>
              <p className="text-xl text-gray-300 mb-8">
                DataCoffee provides comprehensive data governance capabilities designed for regulated industries that need to 
                maintain strict compliance while enabling data-driven innovation.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Real-time Data Protection</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>✓ Real-time PII/PHI protection</div>
                    <div>✓ Cross-system data referencing</div>
                    <div>✓ GDPR, HIPAA, FedRAMP compliance</div>
                    <div>✓ Secure data masking</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://corporater.com/wp-content/uploads/2021/07/data-and-information-governance-software-1a.png"
                alt="DataCoffee Data Governance Dashboard"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Data Governance Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DataCoffee combines advanced data protection with synthetic data generation to enable safe testing and development environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthetic Data Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://thumbs.dreamstime.com/b/seven-components-data-governance-181051583.jpg"
                alt="Synthetic Data Generation"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Synthetic Data Generator</h2>
              <p className="text-xl text-gray-300 mb-8">
                Creates usable data clones that retain statistical accuracy without containing any real user information, 
                ideal for safe testing, QA, and model training.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/resources/data-governance-guide">
                  <GradientButton variant="datacoffee">
                    Learn More About Data Governance
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </GradientButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry-Leading Compliance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DataCoffee meets the most stringent regulatory requirements across industries, ensuring your data governance strategy is always compliant.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {['GDPR', 'HIPAA', 'FedRAMP'].map((compliance, index) => (
              <motion.div
                key={compliance}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{compliance}</h3>
                <p className="text-gray-300">
                  Fully compliant with {compliance} regulations, ensuring your data protection meets industry standards.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your data governance strategy with DataCoffee's comprehensive privacy protection and synthetic data capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=demo&product=data-coffee">
                <GradientButton variant="datacoffee" size="lg">
                  Schedule DataCoffee Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </Link>
              <Link to="/contact">
                <GradientButton variant="secondary" size="lg">
                  Speak with Data Expert
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DataCoffee