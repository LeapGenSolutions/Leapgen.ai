import React from 'react';
import { AdvancedSEO } from './AdvancedSEO';
import { OrganizationSchema, ProductSchema } from './StructuredData';
import { CONTACT_INFO } from '@/config/contact';

interface PageSEOProps {
  page: 'home' | 'products' | 'about' | 'contact' | 'resources' | 'use-cases' | 'customer-success';
  productName?: string;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const PageSEO: React.FC<PageSEOProps> = ({
  page,
  productName,
  customTitle,
  customDescription,
  customKeywords,
  breadcrumbs = []
}) => {
  const getPageData = () => {
    switch (page) {
      case 'home':
        return {
          title: customTitle || 'LeapGen.AI - Transform Your Business with Enterprise AI Solutions',
          description: customDescription || 'Reduce support costs by 60% with LeapGen.AI\'s enterprise AI platform. Automate customer support, unlock data insights, and revolutionize clinical documentation. Trusted by 500+ organizations worldwide.',
          keywords: customKeywords || 'AI solutions, enterprise AI, customer support automation, data analytics, clinical documentation, artificial intelligence, business automation, SurroundAI, DataCoffee, Seismic',
          breadcrumbs: [
            { name: 'Home', url: '/' }
          ]
        };
      
      case 'products':
        return {
          title: customTitle || `${productName || 'AI Products'} - Enterprise AI Solutions | LeapGen.AI`,
          description: customDescription || `Discover ${productName || 'our enterprise AI products'} designed to automate workflows, reduce costs, and improve efficiency. Implementation in 30 days with 99.9% uptime guarantee.`,
          keywords: customKeywords || `${productName || 'AI products'}, enterprise AI, automation, workflow optimization, artificial intelligence, business solutions`,
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            ...(productName ? [{ name: productName, url: `/products/${productName.toLowerCase().replace(' ', '-')}` }] : [])
          ]
        };
      
      case 'use-cases':
        return {
          title: customTitle || 'AI Use Cases by Industry - Healthcare, Finance, Retail | LeapGen.AI',
          description: customDescription || 'Explore real-world AI implementations across healthcare, finance, retail, and enterprise. See how organizations achieve 60% cost reduction and 75% faster response times.',
          keywords: customKeywords || 'AI use cases, healthcare AI, finance AI, retail AI, enterprise AI, industry solutions, artificial intelligence applications',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Use Cases', url: '/use-cases' }
          ]
        };
      
      case 'customer-success':
        return {
          title: customTitle || 'Customer Success Stories - Real Results with AI | LeapGen.AI',
          description: customDescription || 'Read real customer success stories and case studies. See how organizations achieved 40% cost reduction, 75% faster response times, and transformed their operations with AI.',
          keywords: customKeywords || 'customer success, case studies, AI results, customer testimonials, success stories, ROI, business transformation',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Customer Success', url: '/customer-success' }
          ]
        };
      
      case 'resources':
        return {
          title: customTitle || 'AI Resources - ROI Calculator, Case Studies, Guides | LeapGen.AI',
          description: customDescription || 'Access free AI resources including ROI calculators, implementation guides, case studies, and industry reports. Calculate your potential savings and learn best practices.',
          keywords: customKeywords || 'AI resources, ROI calculator, implementation guide, case studies, white papers, AI best practices, artificial intelligence research',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' }
          ]
        };
      
      case 'about':
        return {
          title: customTitle || 'About LeapGen.AI - Enterprise AI Innovation Leaders',
          description: customDescription || 'Learn about LeapGen.AI\'s mission to democratize enterprise AI. Founded by AI experts, we\'ve helped 500+ organizations transform their operations with cutting-edge artificial intelligence.',
          keywords: customKeywords || 'about LeapGen.AI, AI company, artificial intelligence experts, enterprise AI solutions, company mission, AI innovation',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' }
          ]
        };
      
      case 'contact':
        return {
          title: customTitle || 'Contact LeapGen.AI - Get Your Free AI Strategy Session',
          description: customDescription || 'Contact LeapGen.AI for a free AI strategy session. Book a demo, calculate your ROI, or speak with our AI experts about transforming your business operations.',
          keywords: customKeywords || 'contact LeapGen.AI, AI consultation, free demo, AI strategy session, enterprise AI support, book demo',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' }
          ]
        };
      
      default:
        return {
          title: 'LeapGen.AI - Enterprise AI Solutions',
          description: 'Transform your business with enterprise AI solutions from LeapGen.AI.',
          keywords: 'AI solutions, enterprise AI, artificial intelligence',
          breadcrumbs: [{ name: 'Home', url: '/' }]
        };
    }
  };

  const pageData = getPageData();
  const finalBreadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : pageData.breadcrumbs;

  return (
    <>
      <AdvancedSEO
        title={pageData.title}
        description={pageData.description}
        keywords={pageData.keywords}
        breadcrumbs={finalBreadcrumbs}
        author="LeapGen.AI Team"
        locale="en_US"
        customMeta={[
          { name: 'application-name', content: 'LeapGen.AI' },
          { name: 'apple-mobile-web-app-title', content: 'LeapGen.AI' },
          { name: 'msapplication-TileColor', content: '#8B5CF6' },
          { property: 'business:contact_data:street_address', content: CONTACT_INFO.address.street },
          { property: 'business:contact_data:locality', content: CONTACT_INFO.address.city },
          { property: 'business:contact_data:region', content: CONTACT_INFO.address.state },
          { property: 'business:contact_data:postal_code', content: CONTACT_INFO.address.zipCode },
          { property: 'business:contact_data:country_name', content: CONTACT_INFO.address.country }
        ]}
      />
      
      {/* Always include organization schema */}
      <OrganizationSchema />
      
      {/* Include product schema on product pages */}
      {page === 'products' && productName && (
        <ProductSchema
          name={productName}
          description={pageData.description}
          features={[
            'Enterprise-grade AI automation',
            '99.9% uptime guarantee',
            '30-day implementation',
            'SOC 2 certified security',
            '24/7 expert support'
          ]}
        />
      )}
    </>
  );
};