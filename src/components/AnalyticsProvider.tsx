import React from 'react';
import { GoogleAnalytics, GoogleTagManager } from './seo/GoogleAnalytics';
import { PerformanceMonitor } from './ui/performance-monitor';
import { useSEOAnalytics } from '@/hooks/use-seo-analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enableGA?: boolean;
  enableGTM?: boolean;
  enableSEOMonitoring?: boolean;
  enablePerformanceMonitoring?: boolean;
  gaId?: string;
  gtmId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  enableGA = true,
  enableGTM = false,
  enableSEOMonitoring = true,
  enablePerformanceMonitoring = true,
  gaId,
  gtmId
}) => {
  const { metrics, isAnalyzing } = useSEOAnalytics();

  return (
    <>
      {children}
      
      {/* Google Analytics */}
      {enableGA && (
        <GoogleAnalytics 
          measurementId={gaId}
          debug={process.env.NODE_ENV === 'development'}
          enableEnhancedMeasurement={true}
          customDimensions={{
            custom_dimension_1: 'page_category',
            custom_dimension_2: 'user_engagement_level'
          }}
        />
      )}
      
      {/* Google Tag Manager */}
      {enableGTM && gtmId && (
        <GoogleTagManager 
          containerId={gtmId}
        />
      )}
      
      {/* Performance Monitoring */}
      {enablePerformanceMonitoring && (
        <PerformanceMonitor 
          position="bottom-left"
          autoHide={false}
          showDetailed={true}
        />
      )}
      
      {/* SEO Monitoring in Development */}
      {enableSEOMonitoring && process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg border border-gray-700 max-w-sm">
          <div className="text-sm font-medium mb-2">SEO Analysis</div>
          <div className="space-y-1 text-xs">
            <div>Overall: {metrics.seoScore.overall}/100</div>
            <div>Performance: {metrics.seoScore.performance}/100</div>
            <div>SEO: {metrics.seoScore.seo}/100</div>
            <div>Issues: {metrics.issues.length}</div>
            {isAnalyzing && <div className="text-yellow-400">Analyzing...</div>}
          </div>
        </div>
      )}
    </>
  );
};