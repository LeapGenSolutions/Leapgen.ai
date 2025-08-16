import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/utils/analytics';

interface GoogleAnalyticsProps {
  measurementId?: string;
  debug?: boolean;
  enableEnhancedMeasurement?: boolean;
  enableLinker?: boolean;
  customDimensions?: Record<string, string>;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  measurementId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  debug = false,
  enableEnhancedMeasurement = true,
  enableLinker = false,
  customDimensions = {}
}) => {
  const location = useLocation();
  const analytics = useAnalytics();

  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };

    // Configure Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      debug_mode: debug,
      enhanced_measurement: enableEnhancedMeasurement,
      linker: enableLinker ? { domains: ['leapgen.ai'] } : undefined,
      custom_map: customDimensions,
      // Enhanced ecommerce
      allow_enhanced_conversions: true,
      // Privacy settings
      anonymize_ip: true,
      respect_dnt: true
    });

    return () => {
      // Cleanup
      document.head.removeChild(script1);
    };
  }, [measurementId, debug, enableEnhancedMeasurement, enableLinker, customDimensions]);

  // Track page views
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
      
      // Also track in our internal analytics
      analytics.track('page_view', {
        path: location.pathname,
        search: location.search,
        title: document.title,
        ga_measurement_id: measurementId
      });
    }
  }, [location, measurementId, analytics]);

  return null;
};

// Google Tag Manager component
interface GoogleTagManagerProps {
  containerId?: string;
  dataLayerName?: string;
  preview?: string;
  auth?: string;
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({
  containerId = 'GTM-XXXXXXX', // Replace with actual GTM ID
  dataLayerName = 'dataLayer',
  preview,
  auth
}) => {
  useEffect(() => {
    // Initialize dataLayer
    (window as any)[dataLayerName] = (window as any)[dataLayerName] || [];

    // GTM script
    const gtmScript = document.createElement('script');
    let gtmSrc = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    
    if (preview && auth) {
      gtmSrc += `&gtm_preview=${preview}&gtm_auth=${auth}`;
    }
    
    gtmScript.src = gtmSrc;
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    // GTM initialization
    (window as any)[dataLayerName].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    return () => {
      document.head.removeChild(gtmScript);
    };
  }, [containerId, dataLayerName, preview, auth]);

  return (
    <>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
};

// Enhanced conversion tracking
export const useGoogleAnalyticsEvents = () => {
  const trackEvent = (action: string, parameters: Record<string, any> = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, parameters);
    }
  };

  const trackPurchase = (transactionId: string, value: number, currency = 'USD', items: any[] = []) => {
    trackEvent('purchase', {
      transaction_id: transactionId,
      value,
      currency,
      items
    });
  };

  const trackLead = (value?: number, currency = 'USD') => {
    trackEvent('generate_lead', {
      value,
      currency
    });
  };

  const trackSignUp = (method?: string) => {
    trackEvent('sign_up', {
      method
    });
  };

  const trackLogin = (method?: string) => {
    trackEvent('login', {
      method
    });
  };

  const trackSearch = (searchTerm: string) => {
    trackEvent('search', {
      search_term: searchTerm
    });
  };

  const trackShare = (contentType: string, itemId: string) => {
    trackEvent('share', {
      content_type: contentType,
      item_id: itemId
    });
  };

  const trackVideoPlay = (videoTitle: string, videoUrl: string) => {
    trackEvent('video_play', {
      video_title: videoTitle,
      video_url: videoUrl
    });
  };

  const trackFileDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      file_extension: fileType
    });
  };

  const trackFormSubmit = (formName: string, formDestination: string) => {
    trackEvent('form_submit', {
      form_name: formName,
      form_destination: formDestination
    });
  };

  const trackCustomEvent = (eventName: string, parameters: Record<string, any>) => {
    trackEvent(eventName, parameters);
  };

  return {
    trackEvent,
    trackPurchase,
    trackLead,
    trackSignUp,
    trackLogin,
    trackSearch,
    trackShare,
    trackVideoPlay,
    trackFileDownload,
    trackFormSubmit,
    trackCustomEvent
  };
};