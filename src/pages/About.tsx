'use client'

import { motion } from 'framer-motion'
import { Users, Target, Shield, Zap, Heart, Trophy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientButton } from '../components/ui/gradient-button'
import { EnhancedCard } from '../components/ui/enhanced-card'
import { AnimatedBackground } from '../components/ui/animated-background'
import { FloatingElements } from '../components/ui/floating-elements'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Organizations Trust Us', description: 'From startups to Fortune 500 companies' },
    { value: 99, suffix: '%', label: 'Uptime Guarantee', description: 'Enterprise-grade reliability' },
    { value: 40, suffix: '%', label: 'Average Cost Reduction', description: 'Measurable ROI for our clients' },
    { value: 30, suffix: '-Day', label: 'Implementation', description: 'Rapid deployment process' }
  ]

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies to solve complex business challenges.'
    },
    {
      icon: Trophy,
      title: 'Customer Success',
      description: 'Our success is measured by our customers\' success. We\'re committed to delivering measurable value and long-term partnerships.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and compliance, ensuring our solutions protect your data and meet regulatory requirements.'
    },
    {
      icon: Target,
      title: 'Rapid Impact',
      description: 'We believe AI should deliver immediate value. Our solutions are designed for quick implementation and fast time-to-value.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://i.pinimg.com/originals/fb/c8/29/fbc8295cc4b534ec874c722b4e568d2f.jpg',
      bio: 'Former AI Research Director at Google, PhD in Machine Learning from Stanford. 15+ years building enterprise AI solutions.',
      expertise: ['AI Strategy', 'Machine Learning', 'Enterprise Software']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://media.istockphoto.com/id/157558498/photo/young-hispanic-professional-headshot.jpg?s=612x612&w=0&k=20&c=Cr3ZKnH54yVGaiogH5x6fxsZs5Qs4gtzjvF3hpxfbIg=',
      bio: 'Ex-Principal Engineer at Microsoft Azure AI. Led development of cloud-scale AI platforms serving millions of users.',
      expertise: ['Cloud Architecture', 'AI Infrastructure', 'Scalable Systems']
    },
    {
      name: 'Dr. Jennifer Walsh',
      role: 'VP of Product',
      image: 'https://i.pinimg.com/originals/e2/cc/9e/e2cc9e2f2545443113be3cc3a99abb18.jpg',
      bio: 'Former Product Lead at Salesforce Einstein. PhD in Computer Science, expert in human-AI interaction design.',
      expertise: ['Product Strategy', 'UX Design', 'AI Ethics']
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      image: 'https://i.pinimg.com/originals/fa/be/61/fabe61b03be64af9d7deefbb59ddb278.jpg',
      bio: 'Previously Senior Engineering Manager at Uber AI. Built real-time ML systems processing billions of events daily.',
      expertise: ['Distributed Systems', 'Real-time ML', 'Team Leadership']
    }
  ]

  const timeline = [
    { year: '2024', title: 'Company Founded', description: 'LeapGen.AI was founded with a mission to democratize AI for enterprises of all sizes.' },
    { year: '2025', title: 'First Product Launch', description: 'Launched SurroundAI, our flagship customer support automation platform.' },
    { year: '2025', title: 'Platform Expansion', description: 'Introduced Data Coffee and Seismic, completing our comprehensive AI platform.' },
    { year: '2026', title: 'Global Scale', description: 'Reached 500+ enterprise customers across 25 countries with 99.9% uptime.' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="mesh" theme="primary" className="absolute inset-0" />
        <FloatingElements count={8} variant="mixed" theme="primary" className="absolute inset-0" />
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://img.freepik.com/premium-photo/teamwork-laptop-team-working-project-together-with-research-modern-corporate-office-diversity-technology-business-people-collaboration-company-strategy-planning-workplace_590464-101822.jpg?w=2000"
              alt="LeapGen.AI Team"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              onError={(e) => {
                console.log('Image failed to load:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-hero mb-6">
              <span className="text-white">Pioneering AI Solutions for </span>
              <span className="gradient-text-animated">Tomorrow's Challenges</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At LeapGen.AI, we believe artificial intelligence should enhance human potential, not replace it. 
              We're building the future of enterprise AI—one that's accessible, ethical, and delivers measurable value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <GradientButton variant="animated" size="lg">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <EnhancedCard key={index} variant="glass" className="text-center p-6">
                  <div className="text-4xl font-bold gradient-text-animated mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </EnhancedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding relative">
        <AnimatedBackground variant="particles" theme="primary" className="absolute inset-0" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We're on a mission to democratize artificial intelligence for enterprises worldwide. 
                Our goal is to make advanced AI accessible, practical, and immediately valuable for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that AI should augment human intelligence, not replace it. Our solutions are designed to 
                free people from repetitive tasks so they can focus on what they do best—creative problem-solving, 
                strategic thinking, and building meaningful relationships.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  A world where every organization can harness the power of AI to solve their biggest challenges.
                </p>
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
                src="https://c8.alamy.com/comp/2WC4KBF/futuristic-collaboration-human-and-robot-hands-touching-ai-artificial-intelligence-technological-machine-innovation-global-network-data-2WC4KBF.jpg"
                alt="AI Technology Vision"
                className="w-full rounded-2xl border border-gray-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer relationships and company culture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small startup to a trusted AI platform serving hundreds of enterprises worldwide.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your business with AI or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <GradientButton variant="primary" size="lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
              </Link>
              <Link to="/careers">
                <GradientButton variant="secondary" size="lg">
                  View Open Positions
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About