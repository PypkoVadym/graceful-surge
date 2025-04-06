
import React, { useEffect } from 'react';

interface SEOHeadProps {
  isRussianVersion: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ isRussianVersion }) => {
  useEffect(() => {
    // Get the base URL without path
    const baseUrl = window.location.origin;
    const ukLink = `${baseUrl}/`;
    const ruLink = `${baseUrl}/ru`;
    
    // Set the document title based on the language
    document.title = isRussianVersion 
      ? "Пластический хирург в Украине Бодя Ярош"
      : "Пластичний хірург в Україні Бодя Ярош";
    
    console.log("Setting title to:", isRussianVersion ? "Russian" : "Ukrainian", document.title);

    // Set meta description
    const metaDescription = isRussianVersion 
      ? 'Выполняю все виды пластических операций: маммопластику, блефаропластику, ринопластику, липосакцию, абдоминопластику. Пластический хирург: Львов, Днепр, Запорожье, Киев, Харьков.'
      : 'Виконую всі види пластичних операцій: мамопластику, блефаропластику, ринопластику, ліпосакцію, абдомінопластику. Пластичний хірург: Львів, Дніпро, Запоріжжя, Київ, Харків.';
    
    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaDescription);
    }
    
    // Update html lang attribute
    document.documentElement.lang = isRussianVersion ? 'ru' : 'uk';

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', isRussianVersion ? ruLink : ukLink);
    }

    // Update og:locale meta tag
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', isRussianVersion ? 'ru_RU' : 'uk_UA');
    }

    // Update og:locale:alternate meta tag
    let ogLocaleAlt = document.querySelector('meta[property="og:locale:alternate"]');
    if (ogLocaleAlt) {
      ogLocaleAlt.setAttribute('content', isRussianVersion ? 'uk_UA' : 'ru_RU');
    }

    // Update og:url meta tag
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', isRussianVersion ? ruLink : ukLink);
    }
  }, [isRussianVersion]);

  return null; // This component doesn't render anything
};

export default SEOHead;
