import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnhancedCard } from './enhanced-card';
import { 
  TrendingUp, 
  Users, 
  MousePointer, 
  Target,
  AlertCircle,
  CheckCircle,
  Eye,
  Clock,
  BarChart3,
  Activity
} from 'lucide-react';
import { useAnalytics } from '@/utils/analytics';
import { cn } from '@/lib/utils';

interface ConversionAlertProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const ConversionMonitor: React.FC<ConversionAlertProps> = ({
  className,
  position = 'bottom-right'
}) => {
  const analytics = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<any>(null);

  useEffect(() => {
    const checkConversionMetrics = () => {
      // Get events from localStorage for demo
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      const now = Date.now();
      const oneHourAgo = now - (60 * 60 * 1000);
      
      const recentEvents = events.filter((e: any) => e.timestamp > oneHourAgo);
      
      // Calculate real-time metrics
      const metrics = {
        pageViews: recentEvents.filter((e: any) => e.event === 'page_load').length,
        ctaClicks: recentEvents.filter((e: any) => e.event === 'cta_click').length,
        formStarts: recentEvents.filter((e: any) => e.event === 'form_started').length,
        formSubmissions: recentEvents.filter((e: any) => 
          e.event === 'form_submitted' && e.properties?.success
        ).length,
        leadMagnets: recentEvents.filter((e: any) => e.event === 'lead_magnet_interaction').length
      };
      
      // Calculate conversion rates
      const ctaRate = metrics.pageViews > 0 ? (metrics.ctaClicks / metrics.pageViews) * 100 : 0;
      const formRate = metrics.formStarts > 0 ? (metrics.formSubmissions / metrics.formStarts) * 100 : 0;
      
      setCurrentMetrics({
        ...metrics,
        ctaConversionRate: ctaRate,
        formConversionRate: formRate
      });
      
      // Generate alerts based on performance
      const newAlerts = [];
      
      // High conversion rate alert
      if (ctaRate > 15) {
        newAlerts.push({
          id: `high-cta-${Date.now()}`,
          type: 'success',
          title: 'High CTA Performance!',
          message: `${ctaRate.toFixed(1)}% conversion rate - 2x above average`,
          timestamp: now
        });
      }
      
      // Low conversion rate alert
      if (ctaRate < 3 && metrics.pageViews > 10) {
        newAlerts.push({
          id: `low-cta-${Date.now()}`,
          type: 'warning',
          title: 'Low CTA Performance',
          message: `${ctaRate.toFixed(1)}% conversion rate - consider A/B testing`,
          timestamp: now
        });
      }
      
      // High traffic alert
      if (metrics.pageViews > 50) {
        newAlerts.push({
          id: `high-traffic-${Date.now()}`,
          type: 'info',
          title: 'High Traffic Alert',
          message: `${metrics.pageViews} page views in the last hour`,
          timestamp: now
        });
      }
      
      // Form abandonment alert
      if (metrics.formStarts > 5 && formRate < 40) {
        newAlerts.push({
          id: `form-abandon-${Date.now()}`,
          type: 'warning',
          title: 'Form Abandonment Issue',
          message: `${(100 - formRate).toFixed(1)}% of users abandon forms`,
          timestamp: now
        });
      }
      
      // Lead magnet success
      if (metrics.leadMagnets > 20) {
        newAlerts.push({
          id: `lead-magnet-${Date.now()}`,
          type: 'success',
          title: 'Lead Magnet Success!',
          message: `${metrics.leadMagnets} interactions with lead magnets`,
          timestamp: now
        });
      }
      
      // Remove duplicates and old alerts
      const filteredAlerts = newAlerts.filter(alert => 
        !alerts.some(existing => existing.title === alert.title)
      );
      
      if (filteredAlerts.length > 0) {
        setAlerts(prev => [...prev, ...filteredAlerts].slice(-3)); // Keep only last 3
        setIsVisible(true);
      }
    };
    
    // Check metrics every 30 seconds
    const interval = setInterval(checkConversionMetrics, 30000);
    checkConversionMetrics(); // Initial check
    
    return () => clearInterval(interval);
  }, [alerts]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success':
        return CheckCircle;
      case 'warning':
        return AlertCircle;
      case 'info':
        return Activity;
      default:
        return AlertCircle;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-400 border-green-500/30 bg-green-500/10';
      case 'warning':
        return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
      case 'info':
        return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      default:
        return 'text-gray-400 border-gray-500/30 bg-gray-500/10';
    }
  };

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6 z-50',
    'bottom-left': 'fixed bottom-6 left-6 z-50',
    'top-right': 'fixed top-6 right-6 z-50',
    'top-left': 'fixed top-6 left-6 z-50'
  };

  if (!isVisible || alerts.length === 0) {
    return null;
  }

  return (
    <div className={cn(positionClasses[position], className)}>
      <AnimatePresence>
        {alerts.map((alert, index) => {
          const AlertIcon = getAlertIcon(alert.type);
          
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`mb-4 last:mb-0`}
            >
              <EnhancedCard 
                variant="glass" 
                className={cn(
                  "p-4 max-w-sm border backdrop-blur-lg",
                  getAlertColor(alert.type)
                )}
              >
                <div className="flex items-start gap-3">
                  <AlertIcon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", 
                    alert.type === 'success' ? 'text-green-400' :
                    alert.type === 'warning' ? 'text-orange-400' :
                    alert.type === 'info' ? 'text-blue-400' : 'text-gray-400'
                  )} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {alert.title}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {alert.message}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </EnhancedCard>
            </motion.div>
          );
        })}
      </AnimatePresence>
      
      {/* Real-time metrics mini dashboard */}
      {currentMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4"
        >
          <EnhancedCard variant="glass" className="p-3 bg-gray-900/80 border-gray-700/50">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-white text-sm font-medium">Live Metrics (1h)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Views:</span>
                <span className="text-white font-medium">{currentMetrics.pageViews}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Clicks:</span>
                <span className="text-white font-medium">{currentMetrics.ctaClicks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Forms:</span>
                <span className="text-white font-medium">{currentMetrics.formSubmissions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rate:</span>
                <span className={cn(
                  "font-medium",
                  currentMetrics.ctaConversionRate > 10 ? "text-green-400" :
                  currentMetrics.ctaConversionRate > 5 ? "text-yellow-400" : "text-red-400"
                )}>
                  {currentMetrics.ctaConversionRate.toFixed(1)}%
                </span>
              </div>
            </div>
          </EnhancedCard>
        </motion.div>
      )}
    </div>
  );
};

export { ConversionMonitor };