import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnhancedCard } from './enhanced-card';
import { 
  TrendingUp, 
  Users, 
  MousePointer, 
  Target,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  Clock,
  Eye
} from 'lucide-react';
import { useAnalytics } from '@/utils/analytics';
import { cn } from '@/lib/utils';

interface ConversionDashboardProps {
  className?: string;
  timeRange?: '24h' | '7d' | '30d';
}

const ConversionDashboard: React.FC<ConversionDashboardProps> = ({
  className,
  timeRange = '7d'
}) => {
  const analytics = useAnalytics();
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = () => {
      setLoading(true);
      
      // Get events from localStorage for demo
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      
      // Calculate metrics
      const metrics = calculateMetrics(events, timeRange);
      setDashboardData(metrics);
      setLoading(false);
    };

    loadDashboardData();
    
    // Refresh every 30 seconds
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, [timeRange]);

  const calculateMetrics = (events: any[], range: string) => {
    const now = Date.now();
    const timeRanges = {
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000
    };
    
    const cutoff = now - timeRanges[range as keyof typeof timeRanges];
    const filteredEvents = events.filter((e: any) => e.timestamp > cutoff);
    
    // Page views
    const pageViews = filteredEvents.filter((e: any) => e.event === 'page_load').length;
    
    // CTA clicks
    const ctaClicks = filteredEvents.filter((e: any) => e.event === 'cta_click').length;
    
    // Form submissions
    const formSubmissions = filteredEvents.filter((e: any) => 
      e.event === 'form_submitted' && e.properties?.success
    ).length;
    
    // Form starts
    const formStarts = filteredEvents.filter((e: any) => e.event === 'form_started').length;
    
    // Calculate conversion rates
    const ctaConversionRate = pageViews > 0 ? (ctaClicks / pageViews) * 100 : 0;
    const formConversionRate = formStarts > 0 ? (formSubmissions / formStarts) * 100 : 0;
    
    // Time on page average
    const timeEvents = filteredEvents.filter((e: any) => e.event === 'page_exit');
    const avgTimeOnPage = timeEvents.length > 0 ? 
      timeEvents.reduce((sum: number, e: any) => sum + (e.properties?.totalTimeSeconds || 0), 0) / timeEvents.length :
      0;
    
    // Lead magnets
    const leadMagnetInteractions = filteredEvents.filter((e: any) => 
      e.event === 'lead_magnet_interaction'
    ).length;
    
    // A/B test data
    const abTestData = getABTestSummary(filteredEvents);
    
    // Funnel data
    const funnelData = getFunnelSummary(filteredEvents);
    
    return {
      pageViews,
      ctaClicks,
      formSubmissions,
      formStarts,
      ctaConversionRate,
      formConversionRate,
      avgTimeOnPage,
      leadMagnetInteractions,
      abTestData,
      funnelData
    };
  };

  const getABTestSummary = (events: any[]) => {
    const abTests = events.filter(e => e.event === 'ab_test_exposure');
    const abConversions = events.filter(e => e.event === 'ab_test_conversion');
    
    const testNames = [...new Set(abTests.map(e => e.properties?.testName))];
    
    return testNames.map(testName => {
      const testExposures = abTests.filter(e => e.properties?.testName === testName);
      const testConversions = abConversions.filter(e => e.properties?.testName === testName);
      
      const variants = [...new Set(testExposures.map(e => e.properties?.variant))];
      
      const variantData = variants.map(variant => {
        const exposures = testExposures.filter(e => e.properties?.variant === variant).length;
        const conversions = testConversions.filter(e => e.properties?.variant === variant).length;
        
        return {
          variant,
          exposures,
          conversions,
          conversionRate: exposures > 0 ? (conversions / exposures) * 100 : 0
        };
      });
      
      return {
        testName,
        variants: variantData
      };
    });
  };

  const getFunnelSummary = (events: any[]) => {
    const funnelEvents = events.filter(e => e.event === 'funnel_step');
    const steps = [...new Set(funnelEvents.map(e => e.properties?.step))];
    
    return steps.map(step => ({
      step,
      count: funnelEvents.filter(e => e.properties?.step === step).length
    }));
  };

  if (loading) {
    return (
      <div className={cn("p-6", className)}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-700 rounded w-1/3"></div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="h-24 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const MetricCard = ({ 
    title, 
    value, 
    change, 
    icon: Icon, 
    color = 'primary' 
  }: {
    title: string;
    value: string | number;
    change?: number;
    icon: any;
    color?: string;
  }) => (
    <EnhancedCard variant="default" className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          {change !== undefined && (
            <div className={cn(
              "flex items-center gap-1 text-sm",
              change > 0 ? "text-green-400" : change < 0 ? "text-red-400" : "text-gray-400"
            )}>
              {change > 0 ? <ArrowUp className="w-3 h-3" /> : change < 0 ? <ArrowDown className="w-3 h-3" /> : null}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          color === 'primary' ? "bg-primary/20" : 
          color === 'green' ? "bg-green-500/20" :
          color === 'blue' ? "bg-blue-500/20" :
          color === 'orange' ? "bg-orange-500/20" : "bg-primary/20"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            color === 'primary' ? "text-primary" :
            color === 'green' ? "text-green-400" :
            color === 'blue' ? "text-blue-400" :
            color === 'orange' ? "text-orange-400" : "text-primary"
          )} />
        </div>
      </div>
    </EnhancedCard>
  );

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Conversion Analytics</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Page Views"
          value={dashboardData?.pageViews || 0}
          change={12}
          icon={Eye}
          color="blue"
        />
        <MetricCard
          title="CTA Clicks"
          value={dashboardData?.ctaClicks || 0}
          change={8}
          icon={MousePointer}
          color="green"
        />
        <MetricCard
          title="Form Submissions"
          value={dashboardData?.formSubmissions || 0}
          change={-3}
          icon={Target}
          color="primary"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${(dashboardData?.formConversionRate || 0).toFixed(1)}%`}
          change={5}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Conversion Funnel */}
      <div className="grid lg:grid-cols-2 gap-6">
        <EnhancedCard variant="default" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Conversion Funnel
          </h3>
          <div className="space-y-3">
            {dashboardData?.funnelData?.map((step: any, index: number) => (
              <div key={step.step} className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-300">{step.step}</span>
                  <span className="text-sm font-medium text-white">{step.count}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{ 
                      width: `${Math.max(10, (step.count / Math.max(...(dashboardData?.funnelData?.map((s: any) => s.count) || [1]))) * 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </EnhancedCard>

        {/* A/B Test Results */}
        <EnhancedCard variant="default" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary" />
            A/B Test Performance
          </h3>
          <div className="space-y-4">
            {dashboardData?.abTestData?.length > 0 ? (
              dashboardData.abTestData.map((test: any) => (
                <div key={test.testName} className="border border-gray-700 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-3">{test.testName}</h4>
                  <div className="space-y-2">
                    {test.variants.map((variant: any) => (
                      <div key={variant.variant} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">{variant.variant}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white">{variant.conversionRate.toFixed(1)}%</span>
                          <div className="w-16 bg-gray-700 rounded-full h-1">
                            <div 
                              className="bg-primary rounded-full h-1"
                              style={{ width: `${Math.min(100, variant.conversionRate * 2)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No A/B tests running</p>
            )}
          </div>
        </EnhancedCard>
      </div>

      {/* Additional Metrics */}
      <div className="grid lg:grid-cols-3 gap-6">
        <EnhancedCard variant="default" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Engagement</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Avg. Time on Page</span>
              <span className="text-white font-medium">
                {Math.floor((dashboardData?.avgTimeOnPage || 0) / 60)}m {Math.floor((dashboardData?.avgTimeOnPage || 0) % 60)}s
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Lead Magnet Interactions</span>
              <span className="text-white font-medium">{dashboardData?.leadMagnetInteractions || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CTA Click Rate</span>
              <span className="text-white font-medium">{(dashboardData?.ctaConversionRate || 0).toFixed(1)}%</span>
            </div>
          </div>
        </EnhancedCard>

        <EnhancedCard variant="default" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Form Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Form Starts</span>
              <span className="text-white font-medium">{dashboardData?.formStarts || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Form Completions</span>
              <span className="text-white font-medium">{dashboardData?.formSubmissions || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Completion Rate</span>
              <span className="text-white font-medium">{(dashboardData?.formConversionRate || 0).toFixed(1)}%</span>
            </div>
          </div>
        </EnhancedCard>

        <EnhancedCard variant="default" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm text-gray-300">
              Export Analytics Data
            </button>
            <button className="w-full text-left p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm text-gray-300">
              Configure A/B Tests
            </button>
            <button className="w-full text-left p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm text-gray-300">
              View Detailed Reports
            </button>
          </div>
        </EnhancedCard>
      </div>
    </div>
  );
};

export { ConversionDashboard };