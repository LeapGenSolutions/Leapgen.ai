import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '@/config/contact';

interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'VideoObject';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Add specific enhancements based on type
    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          name: data.name || 'LeapGen.AI',
          url: data.url || 'https://leapgen.ai',
          logo: data.logo || 'https://leapgen.ai/logo.png',
          sameAs: data.sameAs || [
            'https://linkedin.com/company/leapgen-ai',
            'https://twitter.com/leapgenai'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone || CONTACT_INFO.phoneFormatted,
            contactType: 'customer service',
            email: data.email || CONTACT_INFO.email,
            availableLanguage: ['English']
          }
        };
      
      case 'Product':
        return {
          ...baseSchema,
          '@type': 'Product',
          aggregateRating: data.aggregateRating || {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500',
            bestRating: '5',
            worstRating: '1'
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: data.price || '0',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              price: data.price || '0'
            },
            availability: 'https://schema.org/InStock'
          }
        };
      
      case 'Article':
        return {
          ...baseSchema,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'LeapGen.AI',
            logo: {
              '@type': 'ImageObject',
              url: 'https://leapgen.ai/logo.png'
            }
          },
          dateModified: data.dateModified || new Date().toISOString(),
          datePublished: data.datePublished || new Date().toISOString()
        };
      
      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

// Pre-built schemas for common use cases
export const OrganizationSchema: React.FC<{ data?: Partial<any> }> = ({ data = {} }) => (
  <StructuredData 
    type="Organization"
    data={{
      name: 'LeapGen.AI',
      description: 'Enterprise AI solutions for customer support automation, data governance, and clinical documentation',
      url: 'https://leapgen.ai',
      logo: 'https://leapgen.ai/logo.png',
      foundingDate: '2023',
      industry: 'Artificial Intelligence',
      numberOfEmployees: '50-100',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT_INFO.address.street,
        addressLocality: CONTACT_INFO.address.city,
        addressRegion: CONTACT_INFO.address.state,
        postalCode: CONTACT_INFO.address.zipCode,
        addressCountry: CONTACT_INFO.address.country
      },
      telephone: CONTACT_INFO.phoneFormatted,
      email: CONTACT_INFO.email,
      sameAs: [
        CONTACT_INFO.socialMedia.linkedin,
        CONTACT_INFO.socialMedia.twitter,
        CONTACT_INFO.socialMedia.instagram,
        CONTACT_INFO.socialMedia.youtube
      ],
      ...data
    }}
  />
);

export const ProductSchema: React.FC<{ 
  name: string; 
  description: string; 
  price?: string;
  features?: string[];
  data?: Partial<any>;
}> = ({ name, description, price = '0', features = [], data = {} }) => (
  <StructuredData 
    type="Product"
    data={{
      name,
      description,
      price,
      brand: {
        '@type': 'Brand',
        name: 'LeapGen.AI'
      },
      category: 'Software',
      additionalProperty: features.map(feature => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature
      })),
      ...data
    }}
  />
);

export const FAQSchema: React.FC<{ faqs: Array<{ question: string; answer: string }> }> = ({ faqs }) => (
  <StructuredData 
    type="FAQPage"
    data={{
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }}
  />
);