'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SurroundAI reduced our customer support costs by 45% in just 3 months. The AI handles 80% of our inquiries automatically, and our team can focus on complex issues.",
      results: "45% cost reduction, 80% automation rate",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      image: "https://i.pinimg.com/originals/5f/4a/56/5f4a5607b02c0d3e0cc89c27e64a02ee.jpg"
    },
    {
      quote: "Seismic has revolutionized our clinical documentation. Doctors save 2 hours per day on paperwork, and our billing accuracy improved by 35%.",
      results: "2 hours saved daily, 35% billing accuracy improvement",
      author: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      company: "Regional Health Network",
      image: "https://i.pinimg.com/736x/dc/87/60/dc8760d2432e68a72d473e40c781f0e0.jpg"
    },
    {
      quote: "Data Coffee transformed how we handle financial data. We now generate insights 10x faster and our compliance reporting is completely automated.",
      results: "10x faster insights, 100% automated compliance",
      author: "Jennifer Walsh",
      role: "VP of Analytics",
      company: "Global Finance Corp",
      image: "https://i.pinimg.com/originals/b6/0a/f0/b60af0a20d78722d81690af213e5354f.jpg"
    }
  ]

  const trustIndicators = [
    "SOC 2 Certified",
    "HIPAA Compliant", 
    "GDPR Ready",
    "99.9% Uptime SLA"
  ]

  const companies = [
    "TechFlow",
    "HealthNet", 
    "FinanceCorp",
    "RetailPlus"
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
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
            <span className="text-white">What Our </span>
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See how organizations like yours are achieving 
            measurable results with LeapGen.AI solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <blockquote className="text-lg text-gray-300 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Results */}
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-sm text-purple-300 font-semibold mb-1">Key Results:</div>
                  <div className="text-white font-medium">{testimonial.results}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-purple-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by Industry Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
          
          {/* Company Logos/Names */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
                  {company}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium text-sm">{indicator}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection