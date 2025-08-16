import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'
import { CONTACT_INFO } from '@/config/contact'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">LeapGen.AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering Artificial Intelligence Solutions for Tomorrow's Challenges.
              Trusted by 500+ organizations worldwide.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/surroundai" className="text-gray-400 hover:text-white transition-colors">SurroundAI</Link></li>
              <li><Link to="/products/data-coffee" className="text-gray-400 hover:text-white transition-colors">Data Coffee</Link></li>
              <li><Link to="/products/seismic" className="text-gray-400 hover:text-white transition-colors">Seismic</Link></li>
            </ul>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/resources/roi-calculator" className="text-gray-400 hover:text-white transition-colors">ROI Calculator</Link></li>
              <li><Link to="/customer-success" className="text-gray-400 hover:text-white transition-colors">Customer Success</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href={CONTACT_INFO.phoneLink} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  <a 
                    href={CONTACT_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_INFO.addressFormatted}
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Enterprise-grade security • HIPAA compliant • GDPR ready
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer