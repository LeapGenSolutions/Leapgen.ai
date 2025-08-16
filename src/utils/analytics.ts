import { toast } from "@/hooks/use-toast";

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  timestamp?: number;
}

interface ConversionFunnel {
  step: string;
  value?: number;
  metadata?: Record<string, any>;
}

class ConversionAnalytics {
  private sessionId: string;
  private userId?: string;
  private events: AnalyticsEvent[] = [];
  
  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Track page load
    this.track('page_load', {
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      sessionId: this.sessionId
    });

    // Track scroll depth
    this.initializeScrollTracking();
    
    // Track time on page
    this.initializeTimeTracking();
  }

  private initializeScrollTracking() {
    let maxScroll = 0;
    const trackingPoints = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      maxScroll = Math.max(maxScroll, scrollPercent);
      
      trackingPoints.forEach(point => {
        if (scrollPercent >= point && !tracked.has(point)) {
          tracked.add(point);
          this.track('scroll_depth', { percentage: point });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  private initializeTimeTracking() {
    const startTime = Date.now();
    
    // Track engagement milestones
    const milestones = [10, 30, 60, 120, 300]; // seconds
    const tracked = new Set<number>();

    const trackTimeSpent = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      milestones.forEach(milestone => {
        if (timeSpent >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone);
          this.track('time_on_page', { seconds: milestone });
        }
      });
    };

    setInterval(trackTimeSpent, 5000); // Check every 5 seconds

    // Track when user leaves
    window.addEventListener('beforeunload', () => {
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      this.track('page_exit', { totalTimeSeconds: totalTime });
    });
  }

  // Core tracking method
  track(event: string, properties?: Record<string, any>, userId?: string) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        timestamp: Date.now(),
        url: window.location.href
      },
      userId: userId || this.userId,
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    
    // Send to analytics service (mock for now)
    this.sendToAnalytics(analyticsEvent);
    
    console.log('Analytics Event:', analyticsEvent);
  }

  // Conversion funnel tracking
  trackFunnelStep(step: string, value?: number, metadata?: Record<string, any>) {
    this.track('funnel_step', {
      step,
      value,
      ...metadata
    });
  }

  // CTA interaction tracking
  trackCTA(ctaType: string, ctaText: string, location: string, variant?: string) {
    this.track('cta_click', {
      ctaType,
      ctaText,
      location,
      variant
    });
  }

  // Form tracking
  trackFormStart(formType: string, formLocation: string) {
    this.track('form_started', {
      formType,
      formLocation
    });
  }

  trackFormStep(formType: string, step: number, totalSteps: number) {
    this.track('form_step_completed', {
      formType,
      step,
      totalSteps,
      completionRate: step / totalSteps
    });
  }

  trackFormSubmit(formType: string, success: boolean, errorMessage?: string) {
    this.track('form_submitted', {
      formType,
      success,
      errorMessage
    });
  }

  trackFormAbandonment(formType: string, step: number, totalSteps: number) {
    this.track('form_abandoned', {
      formType,
      step,
      totalSteps,
      abandonmentRate: 1 - (step / totalSteps)
    });
  }

  // A/B testing tracking
  trackABTest(testName: string, variant: string, conversionEvent?: string) {
    this.track('ab_test_exposure', {
      testName,
      variant,
      conversionEvent
    });
  }

  trackABConversion(testName: string, variant: string, conversionType: string, value?: number) {
    this.track('ab_test_conversion', {
      testName,
      variant,
      conversionType,
      value
    });
  }

  // Lead magnet tracking
  trackLeadMagnet(magnetType: string, magnetTitle: string, action: string) {
    this.track('lead_magnet_interaction', {
      magnetType,
      magnetTitle,
      action
    });
  }

  // Error tracking
  trackError(errorType: string, errorMessage: string, context?: Record<string, any>) {
    this.track('error_occurred', {
      errorType,
      errorMessage,
      context
    });
  }

  // Performance tracking
  trackPerformance() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.track('performance_metrics', {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      });
    }
  }

  // User identification
  identify(userId: string, traits?: Record<string, any>) {
    this.userId = userId;
    this.track('user_identified', traits);
  }

  // Send to analytics service
  private async sendToAnalytics(event: AnalyticsEvent) {
    try {
      // In a real implementation, this would send to your analytics service
      // For now, we'll store in localStorage for demo purposes
      const existingEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      existingEvents.push(event);
      
      // Keep only last 1000 events to prevent storage bloat
      if (existingEvents.length > 1000) {
        existingEvents.splice(0, existingEvents.length - 1000);
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(existingEvents));
      
      // You could also send to external services here:
      // - Google Analytics 4
      // - Mixpanel
      // - Amplitude
      // - Custom backend endpoint
      
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }

  // Get analytics data for dashboard
  getEvents(filterBy?: Partial<AnalyticsEvent>): AnalyticsEvent[] {
    if (!filterBy) return this.events;
    
    return this.events.filter(event => {
      return Object.entries(filterBy).every(([key, value]) => {
        if (key === 'properties') {
          return Object.entries(value as Record<string, any>).every(([propKey, propValue]) => {
            return event.properties?.[propKey] === propValue;
          });
        }
        return (event as any)[key] === value;
      });
    });
  }

  // Get conversion funnel data
  getFunnelData(funnelSteps: string[]): Array<{step: string, count: number, dropoffRate: number}> {
    const funnelEvents = this.events.filter(e => e.event === 'funnel_step');
    
    return funnelSteps.map((step, index) => {
      const stepEvents = funnelEvents.filter(e => e.properties?.step === step);
      const previousStepEvents = index > 0 ? 
        funnelEvents.filter(e => e.properties?.step === funnelSteps[index - 1]) : 
        [{ length: stepEvents.length }];
      
      const dropoffRate = index > 0 ? 
        1 - (stepEvents.length / previousStepEvents.length) : 
        0;
      
      return {
        step,
        count: stepEvents.length,
        dropoffRate
      };
    });
  }

  // Get A/B testing results
  getABTestResults(testName: string): Record<string, {exposures: number, conversions: number, conversionRate: number}> {
    const exposureEvents = this.events.filter(e => 
      e.event === 'ab_test_exposure' && e.properties?.testName === testName
    );
    
    const conversionEvents = this.events.filter(e => 
      e.event === 'ab_test_conversion' && e.properties?.testName === testName
    );
    
    const variants = [...new Set(exposureEvents.map(e => e.properties?.variant))];
    
    return variants.reduce((results, variant) => {
      const exposures = exposureEvents.filter(e => e.properties?.variant === variant).length;
      const conversions = conversionEvents.filter(e => e.properties?.variant === variant).length;
      
      results[variant] = {
        exposures,
        conversions,
        conversionRate: exposures > 0 ? conversions / exposures : 0
      };
      
      return results;
    }, {} as Record<string, {exposures: number, conversions: number, conversionRate: number}>);
  }
}

// Create singleton instance
const analytics = new ConversionAnalytics();

// React hook for using analytics
export const useAnalytics = () => {
  return {
    track: analytics.track.bind(analytics),
    trackFunnelStep: analytics.trackFunnelStep.bind(analytics),
    trackCTA: analytics.trackCTA.bind(analytics),
    trackFormStart: analytics.trackFormStart.bind(analytics),
    trackFormStep: analytics.trackFormStep.bind(analytics),
    trackFormSubmit: analytics.trackFormSubmit.bind(analytics),
    trackFormAbandonment: analytics.trackFormAbandonment.bind(analytics),
    trackABTest: analytics.trackABTest.bind(analytics),
    trackABConversion: analytics.trackABConversion.bind(analytics),
    trackLeadMagnet: analytics.trackLeadMagnet.bind(analytics),
    trackError: analytics.trackError.bind(analytics),
    trackPerformance: analytics.trackPerformance.bind(analytics),
    identify: analytics.identify.bind(analytics),
    getEvents: analytics.getEvents.bind(analytics),
    getFunnelData: analytics.getFunnelData.bind(analytics),
    getABTestResults: analytics.getABTestResults.bind(analytics)
  };
};

export default analytics;
