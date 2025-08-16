import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Wifi, 
  Zap, 
  Clock,
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  connectionType: string;
  memoryUsage?: number;
  jsHeapSize?: number;
}

interface PerformanceMonitorProps {
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  autoHide?: boolean;
  showDetailed?: boolean;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  position = 'bottom-left',
  autoHide = true,
  showDetailed = false,
  className
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(!autoHide);
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<'good' | 'needs-improvement' | 'poor'>('good');

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        // Get connection info if available
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        const connectionType = connection?.effectiveType || 'unknown';
        
        // Get memory info if available
        const memory = (performance as any).memory;
        
        const performanceMetrics: PerformanceMetrics = {
          loadTime,
          firstContentfulPaint: fcp,
          largestContentfulPaint: lcp,
          connectionType,
          memoryUsage: memory?.usedJSHeapSize,
          jsHeapSize: memory?.totalJSHeapSize
        };
        
        setMetrics(performanceMetrics);
        
        // Calculate performance score
        if (loadTime < 1000 && fcp < 1800 && lcp < 2500) {
          setPerformanceScore('good');
        } else if (loadTime < 3000 && fcp < 3000 && lcp < 4000) {
          setPerformanceScore('needs-improvement');
        } else {
          setPerformanceScore('poor');
        }
        
        // Auto-hide after 10 seconds if performance is good
        if (autoHide && performanceScore === 'good') {
          setTimeout(() => setIsVisible(false), 10000);
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => window.removeEventListener('load', measurePerformance);
  }, [autoHide, performanceScore]);

  const getPositionClasses = () => {
    const positions = {
      'top-right': 'top-4 right-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-left': 'top-4 left-4'
    };
    return positions[position];
  };

  const getScoreColor = () => {
    const colors = {
      'good': 'text-green-400 border-green-400/30 bg-green-400/10',
      'needs-improvement': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
      'poor': 'text-red-400 border-red-400/30 bg-red-400/10'
    };
    return colors[performanceScore];
  };

  const getScoreIcon = () => {
    const icons = {
      'good': CheckCircle,
      'needs-improvement': AlertTriangle,
      'poor': AlertTriangle
    };
    const Icon = icons[performanceScore];
    return <Icon className="w-4 h-4" />;
  };

  const formatTime = (time: number) => {
    return time < 1000 ? `${Math.round(time)}ms` : `${(time / 1000).toFixed(1)}s`;
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  if (!metrics || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={cn(
          "fixed z-50 max-w-sm",
          getPositionClasses(),
          className
        )}
      >
        <div className={cn(
          "border rounded-lg backdrop-blur-sm transition-all duration-300",
          getScoreColor(),
          isExpanded ? "p-4" : "p-3"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="font-medium text-sm">Performance</span>
              {getScoreIcon()}
            </div>
            <div className="flex items-center gap-1">
              {showDetailed && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs opacity-70 hover:opacity-100 transition-opacity"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              )}
              <button
                onClick={() => setIsVisible(false)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Basic metrics */}
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="opacity-70">Load Time:</span>
              <span className="font-medium">{formatTime(metrics.loadTime)}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">FCP:</span>
              <span className="font-medium">{formatTime(metrics.firstContentfulPaint)}</span>
            </div>
            {metrics.connectionType !== 'unknown' && (
              <div className="flex items-center justify-between">
                <span className="opacity-70 flex items-center gap-1">
                  <Wifi className="w-3 h-3" />
                  Connection:
                </span>
                <span className="font-medium uppercase">{metrics.connectionType}</span>
              </div>
            )}
          </div>

          {/* Detailed metrics */}
          <AnimatePresence>
            {isExpanded && showDetailed && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="border-t border-current/20 mt-3 pt-3 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-70">LCP:</span>
                    <span className="font-medium">{formatTime(metrics.largestContentfulPaint)}</span>
                  </div>
                  {metrics.memoryUsage && (
                    <div className="flex justify-between">
                      <span className="opacity-70">Memory:</span>
                      <span className="font-medium">{formatBytes(metrics.memoryUsage)}</span>
                    </div>
                  )}
                  {metrics.jsHeapSize && (
                    <div className="flex justify-between">
                      <span className="opacity-70">JS Heap:</span>
                      <span className="font-medium">{formatBytes(metrics.jsHeapSize)}</span>
                    </div>
                  )}
                  
                  {/* Performance tips */}
                  {performanceScore === 'poor' && (
                    <div className="mt-2 p-2 bg-current/10 rounded text-xs">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap className="w-3 h-3" />
                        <span className="font-medium">Optimization Tips:</span>
                      </div>
                      <ul className="text-xs opacity-80 space-y-0.5">
                        <li>• Enable browser caching</li>
                        <li>• Optimize images</li>
                        <li>• Minimize JavaScript</li>
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};