# API Documentation

LeapGen.AI API endpoints and integration documentation.

## Overview

LeapGen.AI primarily operates as a static marketing site with select API integrations for analytics, form submissions, and dynamic content delivery.

## Analytics API

### Google Analytics 4 Integration

**Endpoint**: Google Analytics Measurement Protocol
**Purpose**: Track user interactions and conversions

#### Configuration
```typescript
// Analytics configuration
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Set via environment
const gtag = window.gtag;

// Page view tracking
gtag('config', GA_MEASUREMENT_ID, {
  page_title: document.title,
  page_location: window.location.href,
});

// Event tracking
gtag('event', 'conversion', {
  send_to: GA_MEASUREMENT_ID,
  value: 1.0,
  currency: 'USD',
});
```

#### Events Tracked
- **Page Views**: Automatic page navigation tracking
- **Button Clicks**: CTA button interactions
- **Form Submissions**: Contact form completions
- **Scroll Depth**: User engagement metrics
- **File Downloads**: Document download tracking

### Custom Analytics Hooks

#### useAnalytics Hook
```typescript
interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    // Implementation
  };

  const trackPageView = (path: string) => {
    // Implementation
  };

  const trackConversion = (type: string, value?: number) => {
    // Implementation
  };

  return { trackEvent, trackPageView, trackConversion };
};
```

## Form Submission API

### Contact Form Integration

**Endpoint**: Configured via environment variables
**Method**: POST
**Purpose**: Handle contact form submissions

#### Request Format
```typescript
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  product?: 'SurroundAI' | 'DataCoffee' | 'Seismic';
  consent: boolean;
}

// Example submission
const submitContactForm = async (data: ContactFormData): Promise<void> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
};
```

#### Response Format
```typescript
interface ContactFormResponse {
  success: boolean;
  message: string;
  id?: string; // Submission ID for tracking
}
```

#### Validation Schema
```typescript
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  product: z.enum(['SurroundAI', 'DataCoffee', 'Seismic']).optional(),
  consent: z.boolean().refine(val => val === true, 'Consent is required'),
});
```

## SEO and Metadata API

### Dynamic Meta Tags

**Purpose**: Generate dynamic meta tags for social sharing and SEO

#### Implementation
```typescript
interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: 'website' | 'article';
}

const generateMetaTags = (data: SEOData) => {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords?.join(', '),
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image,
    'og:url': data.url,
    'og:type': data.type || 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image,
  };
};
```

### Structured Data API

**Purpose**: Generate JSON-LD structured data for search engines

#### Organization Schema
```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LeapGen.AI',
  url: 'https://leapgen.ai',
  logo: 'https://leapgen.ai/logo.png',
  description: 'Enterprise AI platform for customer support automation, data governance, and clinical documentation.',
  address: {
    '@type': 'PostalAddress',
    // Address details
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
  },
};
```

#### Product Schema
```typescript
const productSchema = (product: string) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: product,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
});
```

## Performance Monitoring API

### Core Web Vitals Tracking

**Purpose**: Monitor and report Core Web Vitals metrics

#### Implementation
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface WebVitalMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

const reportWebVitals = (metric: WebVitalMetric) => {
  // Send to analytics
  gtag('event', 'web_vitals', {
    event_category: 'Web Vitals',
    event_action: metric.name,
    event_value: Math.round(metric.value),
    event_label: metric.rating,
    non_interaction: true,
  });
};

// Initialize monitoring
getCLS(reportWebVitals);
getFID(reportWebVitals);
getFCP(reportWebVitals);
getLCP(reportWebVitals);
getTTFB(reportWebVitals);
```

### Performance Monitoring Hook
```typescript
interface PerformanceMetrics {
  loading: boolean;
  fcp?: number;
  lcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
}

const usePerformanceMonitoring = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loading: true,
  });

  useEffect(() => {
    // Implementation
  }, []);

  return metrics;
};
```

## Error Handling and Logging

### Error Boundary API

**Purpose**: Catch and report JavaScript errors

#### Implementation
```typescript
interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to analytics
    gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: {
        custom_parameter_1: errorInfo.componentStack,
      },
    });

    // Log to external service (if configured)
    console.error('React Error Boundary:', error, errorInfo);
  }
}
```

### Network Error Handling
```typescript
const handleNetworkError = (error: Error, context: string) => {
  // Log error
  console.error(`Network error in ${context}:`, error);

  // Track in analytics
  gtag('event', 'exception', {
    description: `Network error: ${error.message}`,
    fatal: false,
    custom_map: {
      custom_parameter_1: context,
    },
  });

  // Show user-friendly message
  toast.error('Network error. Please try again.');
};
```

## Security and Authentication

### Content Security Policy

**Purpose**: Prevent XSS attacks and unauthorized content

#### CSP Configuration
```typescript
const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // For inline scripts
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // For Tailwind CSS
    'https://fonts.googleapis.com',
  ],
  'img-src': [
    "'self'",
    'data:',
    'https:',
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
  ],
  'connect-src': [
    "'self'",
    'https://www.google-analytics.com',
  ],
};
```

### Input Sanitization
```typescript
import DOMPurify from 'dompurify';

const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [],
  });
};

const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: [],
  });
};
```

## Environment Configuration

### Environment Variables

#### Required Variables
```bash
# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# API Endpoints (Optional)
VITE_API_BASE_URL=https://api.leapgen.ai
VITE_CONTACT_FORM_ENDPOINT=/api/contact

# Feature Flags (Optional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CONTACT_FORM=true
```

#### Configuration Hook
```typescript
interface AppConfig {
  gaId?: string;
  apiBaseUrl?: string;
  contactFormEndpoint?: string;
  enableAnalytics: boolean;
  enableContactForm: boolean;
}

const useAppConfig = (): AppConfig => {
  return {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableContactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM === 'true',
  };
};
```

## Testing API Integrations

### Mock Implementations

#### Analytics Mock
```typescript
const mockGtag = jest.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

// Test analytics calls
expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
  send_to: 'GA_MEASUREMENT_ID',
  value: 1.0,
  currency: 'USD',
});
```

#### API Mock
```typescript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post('/api/contact', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        message: 'Form submitted successfully',
        id: 'test-id-123',
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## Rate Limiting and Caching

### Client-Side Caching
```typescript
interface CacheConfig {
  key: string;
  ttl: number; // Time to live in milliseconds
}

const useCache = <T>(config: CacheConfig) => {
  const get = (): T | null => {
    const cached = localStorage.getItem(config.key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > config.ttl) {
      localStorage.removeItem(config.key);
      return null;
    }

    return data;
  };

  const set = (data: T): void => {
    localStorage.setItem(config.key, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  };

  return { get, set };
};
```

### Request Debouncing
```typescript
import { debounce } from 'lodash-es';

const debouncedSubmit = debounce(async (data: ContactFormData) => {
  await submitContactForm(data);
}, 300);
```

## Migration and Versioning

### API Versioning Strategy
- **URL Versioning**: `/api/v1/contact`, `/api/v2/contact`
- **Header Versioning**: `Accept: application/vnd.api+json;version=1`
- **Backward Compatibility**: Support previous versions for 12 months

### Migration Guides
- **Breaking Changes**: Document all breaking changes
- **Deprecation Notices**: 6-month deprecation period
- **Migration Scripts**: Provide automated migration tools

## Support and Troubleshooting

### Common Issues

#### Analytics Not Tracking
```typescript
// Debug analytics
if (typeof gtag === 'undefined') {
  console.error('Google Analytics not loaded');
}

// Check configuration
console.log('GA Measurement ID:', import.meta.env.VITE_GA_MEASUREMENT_ID);
```

#### Form Submission Errors
```typescript
// Debug form submission
try {
  await submitContactForm(data);
} catch (error) {
  console.error('Form submission failed:', error);
  // Show user-friendly error message
}
```

### Performance Debugging
```typescript
// Monitor API response times
const startTime = performance.now();
await apiCall();
const endTime = performance.now();
console.log(`API call took ${endTime - startTime} milliseconds`);
```

## Contact and Support

- **Technical Issues**: tech-support@leapgen.ai
- **API Questions**: api-support@leapgen.ai
- **Security Concerns**: security@leapgen.ai
- **Documentation**: docs@leapgen.ai

---

For the most up-to-date API documentation, visit: https://docs.leapgen.ai