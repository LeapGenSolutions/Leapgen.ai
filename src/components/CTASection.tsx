'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Calculator, Phone, Shield, Clock, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import AnimatedCounter from './AnimatedCounter'

const CTASection = () => {
  const stats = [
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
    { icon: Clock, value: '30-Day', label: 'Implementation' },
    { icon: Headphones, value: '24/7', label: 'Support' },
    { icon: ArrowRight, value: 'SOC 2', label: 'Certified' }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Transform Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join 500+ organizations already using LeapGen.AI to reduce costs by 60%, 
            improve efficiency, and drive measurable results. Get started today.
          </p>
          
          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <div className="flex space-x-1">
              {['A', 'B', 'C', 'D'].map((letter, index) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold"
                  style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-gray-300 font-medium">
              <span className="gradient-text font-bold">50+ demos</span> scheduled this month
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Free Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Schedule Your Free AI Strategy Session</h3>
            <p className="text-gray-300 mb-6">
              Get a personalized demo and ROI analysis for your organization
            </p>
            <Link to="/contact?type=demo">
              <Button className="btn-primary w-full">
                Book Free Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Download ROI Calculator</h3>
            <p className="text-gray-300 mb-6">
              Calculate potential cost savings and efficiency gains
            </p>
            <Link to="/resources/roi-calculator">
              <Button className="btn-secondary w-full">
                Get Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Expert Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600 rounded-2xl p-8 text-center hover:border-gray-500 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Speak with an Expert</h3>
            <p className="text-gray-300 mb-6">
              Get immediate answers to your AI implementation questions
            </p>
            <Link to="/contact?type=consultation">
              <Button className="btn-secondary w-full">
                Call Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-800"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <stat.icon className="w-6 h-6 text-purple-400" />
                <div className="text-3xl font-bold gradient-text">
                  {stat.value.includes('%') || stat.value.includes('-') ? (
                    <AnimatedCounter 
                      value={stat.value.includes('%') ? parseFloat(stat.value) : 0} 
                      suffix={stat.value.includes('%') ? '%' : stat.value}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection