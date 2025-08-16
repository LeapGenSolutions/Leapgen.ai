import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Package, 
  Users, 
  FileText, 
  Phone,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { useAnalytics } from '@/utils/analytics';

interface MobileNavigationProps {
  className?: string;
}

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: MenuItem[];
  external?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Products',
    icon: Package,
    children: [
      { label: 'SurroundAI', href: '/products/surround-ai' },
      { label: 'DataCoffee', href: '/products/data-coffee' },
      { label: 'Seismic', href: '/products/seismic' }
    ]
  },
  {
    label: 'Use Cases',
    icon: Users,
    children: [
      { label: 'Healthcare', href: '/use-cases/healthcare' },
      { label: 'Finance', href: '/use-cases/finance' },
      { label: 'Enterprise', href: '/use-cases/enterprise' },
      { label: 'Retail', href: '/use-cases/retail' },
      { label: 'Government', href: '/use-cases/sled' },
      { label: 'Small Business', href: '/use-cases/small-medium-business' }
    ]
  },
  {
    label: 'Resources',
    icon: FileText,
    children: [
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
      { label: 'Healthcare ROI', href: '/resources/healthcare-roi-calculator' },
      { label: 'Case Studies', href: '/resources/finance-case-study' }
    ]
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const location = useLocation();
  const analytics = useAnalytics();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedMenus(new Set());
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    analytics.track('mobile_menu_toggle', { action: isOpen ? 'close' : 'open' });
  };

  const toggleSubmenu = (label: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedMenus(newExpanded);
    analytics.track('mobile_submenu_toggle', { menu: label, expanded: !expandedMenus.has(label) });
  };

  const handleMenuItemClick = (item: MenuItem) => {
    analytics.track('mobile_menu_click', { 
      label: item.label, 
      href: item.href,
      hasChildren: !!item.children 
    });
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 30
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const submenuVariants = {
    closed: { height: 0, opacity: 0 },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    }
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus.has(item.label);
    const isActive = item.href ? location.pathname === item.href : false;

    return (
      <motion.div
        key={item.label}
        custom={index}
        variants={itemVariants}
        className="border-b border-gray-700/50 last:border-b-0"
      >
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleSubmenu(item.label)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 text-left transition-colors",
                "hover:bg-gray-800/50 active:bg-gray-700/50",
                isExpanded && "bg-gray-800/30"
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon && <item.icon className="w-5 h-5 text-gray-400" />}
                <span className="text-white font-medium">{item.label}</span>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={submenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="overflow-hidden bg-gray-900/50"
                >
                  {item.children?.map((child, childIndex) => (
                    <Link
                      key={child.label}
                      to={child.href || '#'}
                      onClick={() => handleMenuItemClick(child)}
                      className={cn(
                        "block px-12 py-3 text-gray-300 transition-colors",
                        "hover:text-white hover:bg-gray-800/50",
                        location.pathname === child.href && "text-primary bg-primary/10"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span>{child.label}</span>
                        {child.external && <ExternalLink className="w-3 h-3" />}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            to={item.href || '#'}
            onClick={() => handleMenuItemClick(item)}
            className={cn(
              "flex items-center gap-3 px-6 py-4 transition-colors",
              "hover:bg-gray-800/50 active:bg-gray-700/50",
              isActive && "bg-primary/10 text-primary"
            )}
          >
            {item.icon && <item.icon className="w-5 h-5 text-gray-400" />}
            <span className={cn(
              "font-medium",
              isActive ? "text-primary" : "text-white"
            )}>
              {item.label}
            </span>
          </Link>
        )}
      </motion.div>
    );
  };

  return (
    <div className={cn("md:hidden", className)}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "p-2 rounded-lg transition-colors",
          "hover:bg-gray-800/50 active:bg-gray-700/50",
          isOpen && "bg-gray-800/50"
        )}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <Link to="/" className="text-xl font-bold text-white">
                LeapGen.AI
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Navigation Items */}
            <motion.nav 
              className="flex-1 overflow-y-auto"
              initial="closed"
              animate="open"
            >
              {menuItems.map((item, index) => renderMenuItem(item, index))}
            </motion.nav>

            {/* Footer CTA */}
            <motion.div
              custom={menuItems.length}
              variants={itemVariants}
              className="p-6 border-t border-gray-700"
            >
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700"
              >
                <Link to="/contact?type=demo" onClick={() => {
                  analytics.track('mobile_menu_cta_click', { location: 'footer' });
                  handleMenuItemClick({ label: 'Book Demo', href: '/contact?type=demo' });
                }}>
                  Book Free Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};