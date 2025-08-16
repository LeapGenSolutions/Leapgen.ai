import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  author?: string;
  articleTags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  locale?: string;
  alternateLocales?: Array<{ locale: string; url: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  jsonLd?: object;
  customMeta?: Array<{ name?: string; property?: string; content: string }>;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords,
  image,
  imageAlt,
  canonical,
  noindex = false,
  nofollow = false,
  robots,
  author,
  articleTags = [],
  publishedTime,
  modifiedTime,
  section,
  locale = 'en_US',
  alternateLocales = [],
  breadcrumbs = [],
  jsonLd,
  customMeta = []
}) => {
  const location = useLocation();
  const currentUrl = `https://leapgen.ai${location.pathname}`;
  
  // Generate robots directive
  const robotsDirective = robots || [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  // Default image
  const defaultImage = 'https://leapgen.ai/og-image.jpg';
  const socialImage = image || defaultImage;
  const socialImageAlt = imageAlt || 'LeapGen.AI - Enterprise AI Solutions';

  // Generate breadcrumb JSON-LD
  const breadcrumbJsonLd = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `https://leapgen.ai${breadcrumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Robots */}
      <meta name="robots" content={robotsDirective} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LeapGen.AI" />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={canonical || currentUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={socialImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Article-specific OG tags */}
      {section && <meta property="article:section" content={section} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {articleTags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@leapgenai" />
      <meta name="twitter:creator" content="@leapgenai" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={socialImageAlt} />
      
      {/* LinkedIn */}
      {title && <meta property="linkedin:title" content={title} />}
      {description && <meta property="linkedin:description" content={description} />}
      <meta property="linkedin:image" content={socialImage} />
      
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url }) => (
        <link key={altLocale} rel="alternate" hrefLang={altLocale} href={url} />
      ))}
      
      {/* Custom Meta Tags */}
      {customMeta.map((meta, index) => (
        <meta 
          key={index}
          {...(meta.name ? { name: meta.name } : { property: meta.property })}
          content={meta.content}
        />
      ))}
      
      {/* JSON-LD Structured Data */}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {/* Performance and Security */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.abacus.ai" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#8B5CF6" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};