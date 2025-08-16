'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Database, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const ProductsSection = () => {
  const products = [
    {
      name: 'SurroundAI',
      title: 'Cut Customer Support Costs by 60% with AI-Powered Automation',
      description: 'Reduce response times by 75%, improve satisfaction scores by 30%, and free up your team for strategic work',
      image: 'https://static.liveperson.com/static-assets/2023/06/23162249/MessagingAI_Feature.1_ProductUI_JV_0523%402x.png',
      icon: Shield,
      href: '/products/surroundai',
      stats: [
        '75% faster response times',
        '60% reduction in support costs',
        '30% improvement in satisfaction',
        '24/7 automated support'
      ]
    },
    {
      name: 'DataCoffee',
      title: 'Secure Data Governance with Synthetic Data Generation',
      description: 'Create realistic synthetic data from production without exposing sensitive information. GDPR, HIPAA, and FedRAMP compliant.',
      image: 'https://thumbs.dreamstime.com/b/seven-components-data-governance-181051583.jpg',
      icon: Database,
      href: '/products/data-coffee',
      stats: [
        '100% privacy protection',
        'GDPR/HIPAA/FedRAMP compliant',
        'Real-time data anonymization',
        'Synthetic test data generation'
      ]
    },
    {
      name: 'Seismic',
      title: 'Reduce Documentation Time by 80% with 90% Billing Accuracy',
      description: 'AI-powered clinical notes with emotional intelligence, automated billing codes, and HIPAA compliance',
      image: 'https://www.pulmonologyadvisor.com/wp-content/uploads/sites/21/2020/09/AI-medicine-G-840370370.jpg',
      icon: FileText,
      href: '/products/seismic',
      stats: [
        '80% less documentation time',
        '90% billing accuracy improvement',
        'HIPAA compliant',
        'Emotional intelligence insights'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Enterprise AI Solutions That </span>
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our three core products work together to transform your business operations, 
            reduce costs, and accelerate growth with measurable outcomes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl border border-gray-700">
                  <img
                    src={product.image}
                    alt={`${product.name} Interface`}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Product Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">{product.name}</h3>
                </div>

                <h4 className="text-2xl font-bold text-white">{product.title}</h4>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {product.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      <span className="text-sm text-gray-300">{stat}</span>
                    </div>
                  ))}
                </div>

                <Link to={product.href}>
                  <Button className="btn-secondary group">
                    Learn More About {product.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-800"
        >
          {[
            { number: '500+', label: 'Organizations Trust Us' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '60%', label: 'Average Cost Reduction' },
            { number: '30-Day', label: 'Implementation' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6">
            Join the 500+ organizations already using LeapGen.AI to reduce costs, improve efficiency, and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=demo">
              <Button className="btn-primary">
                Schedule Your Free Demo
              </Button>
            </Link>
            <Link to="/resources/roi-calculator">
              <Button className="btn-secondary">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection