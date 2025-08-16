'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientButton } from '../../components/ui/gradient-button'
import { EnhancedCard } from '../../components/ui/enhanced-card'
import { AnimatedBackground } from '../../components/ui/animated-background'
import { FloatingElements } from '../../components/ui/floating-elements'
import AnimatedCounter from '../../components/AnimatedCounter'

const SurroundAI = () => {
  const features = [
    {
      icon: Shield,
      title: 'Intelligent Ticket Routing',
      description: 'AI automatically categorizes and routes support tickets to the right teams for faster resolution.'
    },
    {
      icon: TrendingUp,
      title: 'Automated Responses',
      description: 'Handle 80% of common inquiries instantly with context-aware AI responses.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Provide round-the-clock support without increasing your team size.'
    },
    {
      icon: Users,
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and prioritize urgent cases automatically.'
    }
  ]

  const benefits = [
    '75% faster response times',
    '60% reduction in support costs',
    '30% improvement in satisfaction',
    '24/7 automated support',
    'Seamless integration with existing tools',
    'Advanced analytics and reporting'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden theme-surroundai">
        <AnimatedBackground variant="mesh" theme="surroundai" className="absolute inset-0" />
        <FloatingElements count={10} variant="mixed" theme="surroundai" className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-hero mb-6">
              <span className="gradient-text-surroundai">SurroundAI</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cut Customer Support Costs by 60% with AI-Powered Automation
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Reduce response times by 75%, improve satisfaction scores by 30%, and free up your team for strategic work with our intelligent customer support automation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact?type=demo">
                <GradientButton variant="surroundai" size="lg">
                  Schedule Free Demo
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
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <EnhancedCard variant="glass" className="text-center p-4">
                <div className="text-4xl font-bold gradient-text-surroundai mb-2">
                  <AnimatedCounter value={75} suffix="%" />
                </div>
                <div className="text-gray-400">Faster Responses</div>
              </EnhancedCard>
              <EnhancedCard variant="glass" className="text-center p-4">
                <div className="text-4xl font-bold gradient-text-surroundai mb-2">
                  <AnimatedCounter value={60} suffix="%" />
                </div>
                <div className="text-gray-400">Cost Reduction</div>
              </EnhancedCard>
              <EnhancedCard variant="glass" className="text-center p-4">
                <div className="text-4xl font-bold gradient-text-surroundai mb-2">
                  <AnimatedCounter value={30} suffix="%" />
                </div>
                <div className="text-gray-400">Higher Satisfaction</div>
              </EnhancedCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SurroundAI combines advanced AI technology with intuitive design to revolutionize your customer support operations.
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
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
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

      {/* Benefits Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose SurroundAI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your customer support from a cost center into a competitive advantage with measurable results.
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://static.liveperson.com/static-assets/2023/06/23162249/MessagingAI_Feature.1_ProductUI_JV_0523%402x.png"
                alt="SurroundAI Interface"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Support?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations already using SurroundAI to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=demo">
                <GradientButton variant="surroundai" size="lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </Link>
              <Link to="/contact">
                <GradientButton variant="secondary" size="lg">
                  Speak with Expert
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SurroundAI