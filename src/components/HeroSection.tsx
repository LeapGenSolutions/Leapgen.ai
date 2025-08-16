'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, TrendingUp, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import AnimatedCounter from './AnimatedCounter'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
          <img
            src="https://cdn.abacus.ai/images/1c4a902b-0626-4110-8238-04bda99fe7ab.png"
            alt="AI Technology Workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Content Layout - Better Separated */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-blue-400"
              >
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Trusted by 500+ organizations worldwide</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Reduce Support Costs by </span>
                  <span className="gradient-text">60%</span>
                  <span className="text-white"> with Enterprise AI</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join 500+ organizations using LeapGen.AI to automate customer support, unlock data insights, 
                  and revolutionize clinical documentation—with enterprise-grade security and rapid deployment.
                </p>
              </motion.div>

              {/* Key Metrics - Better Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
              >
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <div className="text-3xl font-bold gradient-text">
                      <AnimatedCounter value={75} suffix="%" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">Faster Response Times</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <div className="text-3xl font-bold gradient-text">
                      <AnimatedCounter value={99.9} suffix="%" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-green-400" />
                    <div className="text-3xl font-bold gradient-text">
                      30 Day
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">Implementation</div>
                </div>
              </motion.div>

              {/* CTA Buttons - With More Spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start"
              >
                <Link to="/contact?type=demo">
                  <Button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                    Schedule Your Free AI Strategy Session
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/resources/roi-calculator">
                  <Button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                    <Play className="w-5 h-5 mr-2" />
                    Calculate Your ROI
                  </Button>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center justify-center lg:justify-start space-x-4 pt-6"
              >
                <span className="text-sm text-gray-400">Join 50+ demos scheduled this month</span>
                <div className="flex space-x-1">
                  {['A', 'B', 'C', 'D'].map((letter, index) => (
                    <div
                      key={letter}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold"
                      style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Dashboard Preview - Completely Separate */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
                {/* Dashboard Image - Contained and Smaller */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.abacus.ai/images/007859da-9f38-4031-bf4d-1aaf8d834962.png"
                    alt="AI Dashboard Interface"
                    className="w-full h-auto block"
                  />
                  
                  {/* Floating Stats - Smaller and More Contained */}
                  <div className="absolute top-2 right-2 bg-black/95 backdrop-blur-sm rounded-md border border-gray-700 p-2">
                    <div className="text-center">
                      <div className="text-sm lg:text-lg font-bold gradient-text">
                        <AnimatedCounter value={60} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-400">Cost Reduction</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 left-2 bg-black/95 backdrop-blur-sm rounded-md border border-gray-700 p-2">
                    <div className="text-center">
                      <div className="text-sm lg:text-lg font-bold gradient-text">
                        <AnimatedCounter value={500} suffix="+" />
                      </div>
                      <div className="text-xs text-gray-400">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection