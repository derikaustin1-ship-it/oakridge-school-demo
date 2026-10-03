import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SCHOOL_INFO } from '../data/schoolData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Oakridge International Academy | Premium CBSE School in New Delhi",
  description = "Oakridge International Academy is a premier CBSE affiliated school offering world-class holistic education, state-of-the-art STEM robotics labs, and 100% academic excellence.",
  canonicalUrl = "https://oakridge-demo.example.com",
}) => {
  const pageTitle = title.includes("Oakridge") ? title : `${title} | ${SCHOOL_INFO.name}`;

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SCHOOL_INFO.name,
    "description": description,
    "url": canonicalUrl,
    "telephone": SCHOOL_INFO.admissionsHelpline,
    "email": SCHOOL_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Green Hills Estate, Knowledge Corridor",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://youtube.com"
    ]
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SCHOOL_INFO.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};
