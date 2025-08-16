'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Download, ExternalLink, Clock, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GradientButton } from '../components/ui/gradient-button'
import { EnhancedCard } from '../components/ui/enhanced-card'
import { AnimatedBackground } from '../components/ui/animated-background'
import { FloatingElements } from '../components/ui/floating-elements'

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Resources', count: 24 },
    { id: 'case-studies', label: 'Case Studies', count: 8 },
    { id: 'whitepapers', label: 'Whitepapers', count: 6 },
    { id: 'webinars', label: 'Webinars', count: 5 },
    { id: 'tools', label: 'Tools & Calculators', count: 3 },
    { id: 'guides', label: 'Implementation Guides', count: 2 }
  ]

  const featuredResources = [
    {
      title: 'ROI Calculator for AI Implementation',
      description: 'Calculate potential cost savings and efficiency gains from implementing our AI solutions in your organization.',
      image: 'https://www.smartsheet.com/sites/default/files/IC-PLM-Product-Lifecycle-Management-ROI-Calculator.png',
      type: 'tool',
      href: '/resources/roi-calculator',
      featured: true
    },
    {
      title: 'Healthcare AI Transformation: Regional Health Network Case Study',
      description: 'How a 500-bed hospital system reduced documentation time by 50% and improved patient satisfaction by 25%.',
      image: 'https://www.healthcareitnews.com/sites/hitn/files/EFormistock_0.jpg',
      type: 'case-study',
      href: '/resources/healthcare-case-study',
      featured: true
    },
    {
      title: 'The Complete Guide to Enterprise AI Implementation',
      description: 'A comprehensive whitepaper covering strategy, implementation, and best practices for enterprise AI adoption.',
      image: 'https://bernardmarr.com/img/Data%20Stratey%20Template%20Image.png',
      type: 'whitepaper',
      href: '/resources/enterprise-ai-guide',
      featured: true
    }
  ]

  const allResources = [
    {
      title: 'TechFlow Solutions: 45% Support Cost Reduction with SurroundAI',
      description: 'How a growing SaaS company automated 80% of customer inquiries and improved response times by 75%.',
      image: 'https://lh4.googleusercontent.com/P9iQQuNsY49du_cl6hvCM99XYZoMWGtZ9kXQ7_501qWQb832apFmGZXcsIUkxqwUUV3aPg-zJHc-Dw-2NFcaLqABsa_DtjKgIRzNJvOOFdh8ejo6HhHotWHN83pQeYsU5TdTei30vkFm4RM5xA',
      type: 'case-study',
      category: 'Technology',
      product: 'SurroundAI',
      href: '/resources/techflow-case-study'
    },
    {
      title: 'Global Finance Corp: 10x Faster Data Insights with Data Coffee',
      description: 'Financial services firm transforms regulatory reporting and risk analysis with centralized data platform.',
      image: 'https://i.pinimg.com/originals/88/75/28/887528f840d9027d43b4ce93f54bc1ef.png',
      type: 'case-study',
      category: 'Financial Services',
      product: 'Data Coffee',
      href: '/resources/finance-case-study'
    },
    {
      title: 'Metro Medical Center: Revolutionizing Clinical Documentation',
      description: 'Large hospital system improves physician satisfaction and billing accuracy with AI-powered documentation.',
      image: 'https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2022/02/067620ab-bigstock-asian-doctor-with-the-stethosc-449418803-1068x698.jpg',
      type: 'case-study',
      category: 'Healthcare',
      product: 'Seismic',
      href: '/resources/medical-case-study'
    },
    {
      title: 'AI in Healthcare: Balancing Innovation with Patient Privacy',
      description: 'Exploring HIPAA compliance, ethical considerations, and best practices for healthcare AI implementation.',
      image: 'https://imgix-prod.sgs.com/-/media/sgscorp/images/white-paper-thumbnails/sgs-dti-ai-whitepaper--privacy-and-security-in-ai.cdn.en.1.jpg?fit=clip&auto=format&w=1504',
      type: 'whitepaper',
      category: 'Healthcare',
      href: '/resources/healthcare-ai-privacy'
    },
    {
      title: 'The Future of Customer Support: AI-Human Collaboration',
      description: 'Research-backed insights on optimizing customer support with AI while maintaining human touch.',
      image: 'https://assets-global.website-files.com/5d9bdb47e33988bf5815bfed/64432f668ce602905ec1f721_AI-Role-in-Customer-Service.png',
      type: 'whitepaper',
      category: 'Technology',
      href: '/resources/future-customer-support'
    },
    {
      title: 'Data Governance in the Age of AI',
      description: 'Best practices for data management, security, and compliance in AI-driven organizations.',
      image: 'https://plurilock.com/wp-content/uploads/2023/06/ai-policy-thumb.jpg',
      type: 'whitepaper',
      href: '/resources/data-governance-ai'
    },
    {
      title: 'Getting Started with AI: A 30-Minute Implementation Roadmap',
      description: 'Live webinar covering the essential steps for successful AI implementation in your organization.',
      image: 'https://i.ytimg.com/vi/bZwpXEgG0to/maxresdefault.jpg',
      type: 'webinar',
      duration: '30 min',
      href: '/resources/ai-implementation-webinar'
    },
    {
      title: 'Healthcare AI Success Stories: Lessons from Early Adopters',
      description: 'Panel discussion with healthcare leaders who have successfully implemented AI solutions.',
      image: 'https://i.ytimg.com/vi/wdugh1mpyI4/maxresdefault.jpg',
      type: 'webinar',
      category: 'Healthcare',
      duration: '45 min',
      href: '/resources/healthcare-ai-panel'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI implementation with our comprehensive assessment tool.',
      image: 'https://www.wsiworld.com/hubfs/AI%20Readiness%20Assessment%20LP%20Image%20-%20web.png',
      type: 'tool',
      href: '/resources/ai-readiness-assessment'
    },
    {
      title: 'Data Maturity Calculator',
      description: 'Assess your data infrastructure and identify areas for improvement before AI implementation.',
      image: 'https://sync.appfluence.com/static/images/data-management-maturity-assessment-matrix.png',
      type: 'tool',
      href: '/resources/data-maturity-calculator'
    }
  ]

  const filteredResources = allResources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'case-studies' && resource.type === 'case-study') ||
      (activeFilter === 'whitepapers' && resource.type === 'whitepaper') ||
      (activeFilter === 'webinars' && resource.type === 'webinar') ||
      (activeFilter === 'tools' && resource.type === 'tool') ||
      (activeFilter === 'guides' && resource.type === 'guide')
    
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'case-study': return <Users className="w-4 h-4" />
      case 'whitepaper': return <Download className="w-4 h-4" />
      case 'webinar': return <Clock className="w-4 h-4" />
      case 'tool': return <TrendingUp className="w-4 h-4" />
      default: return <Download className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="geometric" theme="retail" className="absolute inset-0" />
        <FloatingElements count={12} variant="squares" theme="retail" className="absolute inset-0" />
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://www.libraryjournal.com/binaries/content/gallery/Jlibrary/2024/january/enis/ljx240101webenis1.jpg"
              alt="AI Resources Library"
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
              <span className="text-white">AI Knowledge </span>
              <span className="gradient-text-retail">Resource Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our comprehensive library of case studies, whitepapers, tools, and guides to accelerate your AI journey. 
              Learn from real implementations and get practical insights from industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these essential resources to understand the impact and implementation of AI in your organization.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{resource.description}</p>
                  
                  <Link to={resource.href}>
                    <GradientButton variant="retail" className="w-full group">
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </GradientButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Resources */}
      <section className="section-padding bg-black">
        <div className="container mx-auto">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Filter Resources</h2>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-12"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent'
                      : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-purple-400'
                  }`}
                >
                  {category.label}({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              {filteredResources.length} resources found
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index % 6) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex">
                    <div className="w-1/3 relative overflow-hidden">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {resource.category && (
                          <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                            {resource.category}
                          </span>
                        )}
                        {resource.product && (
                          <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                            {resource.product}
                          </span>
                        )}
                        {resource.duration && (
                          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {resource.duration}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{resource.description}</p>
                      
                      <Link to={resource.href}>
                        <GradientButton variant="secondary" size="sm" className="group">
                          {getTypeIcon(resource.type)}
                          Download
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </GradientButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about implementing AI in your organization? Our experts are here to help you navigate your AI journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=consultation">
                <GradientButton variant="retail" size="lg">
                  Schedule Expert Consultation
                </GradientButton>
              </Link>
              <Link to="/resources/roi-calculator">
                <GradientButton variant="secondary" size="lg">
                  Calculate Your ROI
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources