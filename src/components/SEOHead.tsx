
import React, { useEffect } from 'react';

interface SEOHeadProps {
  isRussianVersion: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ isRussianVersion }) => {
  useEffect(() => {
    // Set the document title based on the language
    if (isRussianVersion) {
      document.title = "Пластический хирург в Украине Денис Маркович";
    } else {
      document.title = "Пластичний хірург в Україні Денис Маркович";
    }

    // Set meta description
    const metaDescription = isRussianVersion 
      ? 'Выполняю все виды пластических операций: маммопластику, блефаропластику, ринопластику, липосакцию, абдоминопластику. Пластический хирург: Львов, Днепр, Запорожье, Киев, Харьков.'
      : 'Виконую всі види пластичних операцій: мамопластику, блефаропластику, ринопластику, ліпосакцію, абдомінопластику. Пластичний хірург: Львів, Дніпро, Запоріжжя, Київ, Харків.';
    
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', metaDescription);
    
    // Create hreflang links
    const currentUrl = window.location.origin;
    const ukLink = `${currentUrl}/`;
    const ruLink = `${currentUrl}/alternative`;

    // Remove any existing hreflang links to avoid duplicates
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add canonical link for the current page
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', isRussianVersion ? ruLink : ukLink);

    // Add Ukrainian hreflang
    const ukHreflang = document.createElement('link');
    ukHreflang.setAttribute('rel', 'alternate');
    ukHreflang.setAttribute('hreflang', 'uk');
    ukHreflang.setAttribute('href', ukLink);
    document.head.appendChild(ukHreflang);

    // Add Russian hreflang
    const ruHreflang = document.createElement('link');
    ruHreflang.setAttribute('rel', 'alternate');
    ruHreflang.setAttribute('hreflang', 'ru');
    ruHreflang.setAttribute('href', ruLink);
    document.head.appendChild(ruHreflang);

    // Add x-default hreflang (pointing to the Ukrainian version as default)
    const defaultHreflang = document.createElement('link');
    defaultHreflang.setAttribute('rel', 'alternate');
    defaultHreflang.setAttribute('hreflang', 'x-default');
    defaultHreflang.setAttribute('href', ukLink);
    document.head.appendChild(defaultHreflang);

    // Update html lang attribute
    document.documentElement.lang = isRussianVersion ? 'ru' : 'uk';

    // Update og:locale meta tag
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', isRussianVersion ? 'ru_RU' : 'uk_UA');

    // Add alternate locale meta tags
    let ogAlternateLocale = document.querySelector('meta[property="og:locale:alternate"]');
    if (!ogAlternateLocale) {
      ogAlternateLocale = document.createElement('meta');
      ogAlternateLocale.setAttribute('property', 'og:locale:alternate');
      document.head.appendChild(ogAlternateLocale);
    }
    ogAlternateLocale.setAttribute('content', isRussianVersion ? 'uk_UA' : 'ru_RU');

    // Update og:url meta tag
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', isRussianVersion ? ruLink : ukLink);
  }, [isRussianVersion]);

  return null; // This is a utility component, it doesn't render anything
};

export default SEOHead;
