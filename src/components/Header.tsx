'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { MobileNavigation } from './ui/mobile-navigation'
import { useAnalytics } from '@/utils/analytics'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const analytics = useAnalytics()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { name: 'SurroundAI', href: '/products/surroundai', description: 'AI-powered customer support automation' },
    { name: 'Data Coffee', href: '/products/data-coffee', description: 'Centralized data analytics platform' },
    { name: 'Seismic', href: '/products/seismic', description: 'Clinical documentation with AI' },
  ]


  const useCases = [
    {
      name: 'Customer Success Stories',
      href: '/customer-success',
      description: 'Real results from our clients',
      isSpecial: true
    },
    {
      name: 'View All Use Cases',
      href: '/use-cases',
      description: 'Explore AI solutions by industry',
      isSpecial: true
    },
    { 
      name: 'Finance & Banking', 
      href: '/use-cases/finance', 
      description: 'Predictive intelligence for financial services'
    },
    { 
      name: 'Healthcare', 
      href: '/use-cases/healthcare', 
      description: 'Proactive patient care and unified records'
    },
    { 
      name: 'Government & Education', 
      href: '/use-cases/sled', 
      description: 'Data-driven public service optimization'
    },
    { 
      name: 'E-commerce & Retail', 
      href: '/use-cases/retail', 
      description: 'Personalized customer experiences'
    },
    { 
      name: 'Accounting & Audit', 
      href: '/use-cases/accounting', 
      description: 'Automated financial analysis'
    },
    { 
      name: 'Enterprise', 
      href: '/use-cases/enterprise', 
      description: 'Enterprise-wide intelligence systems'
    },
    { 
      name: 'Small & Medium Business', 
      href: '/use-cases/small-medium-business', 
      description: 'Enterprise-level insights for SMBs'
    }
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    analytics.track('header_dropdown_toggle', { dropdown, opened: activeDropdown !== dropdown })
  }

  const handleMenuItemClick = (label: string, href: string) => {
    setActiveDropdown(null)
    analytics.track('header_menu_click', { label, href })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover-scale" 
            onClick={() => handleMenuItemClick('Logo', '/')}
          >
            <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownToggle('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 space-y-3">
                       {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="block p-3 hover:bg-gray-800 rounded-lg transition-colors"
                          onClick={() => handleMenuItemClick(product.name, product.href)}
                        >
                          <div className="font-semibold text-white">{product.name}</div>
                          <div className="text-sm text-gray-400">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownToggle('use-cases')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors">
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'use-cases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 space-y-1">
                      {useCases.map((useCase, index) => (
                        <div key={useCase.name}>
                          <Link
                            to={useCase.href}
                            className={`block p-3 rounded-lg transition-colors hover:bg-gray-700 ${
                              useCase.isSpecial 
                                ? 'border-b border-gray-600 mb-2' 
                                : ''
                            }`}
                            onClick={() => handleMenuItemClick(useCase.name, useCase.href)}
                          >
                            <div className="font-semibold text-white">{useCase.name}</div>
                            <div className="text-sm text-gray-300">{useCase.description}</div>
                          </Link>
                          {/* Add separator after special items */}
                          {useCase.isSpecial && index === 1 && (
                            <div className="border-b border-gray-600 my-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <Link 
              to="/about" 
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => handleMenuItemClick('About', '/about')}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => handleMenuItemClick('Contact', '/contact')}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact?type=demo">
              <Button 
                className="btn-primary"
                onClick={() => handleMenuItemClick('Schedule Demo CTA', '/contact?type=demo')}
              >
                Schedule Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </nav>
    </header>
  )
}

export default Header