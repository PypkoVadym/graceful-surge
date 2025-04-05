import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const isRussianVersion = location.pathname.includes('/ru');

    // Get the base URL without path
    const baseUrl = window.location.origin;
    const ukLink = `${baseUrl}/`;
    const ruLink = `${baseUrl}/ru`;

    document.title = isRussianVersion
      ? 'Пластический хирург в Украине Денис Маркович'
      : 'Пластичний хірург в Україні Денис Маркович';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = isRussianVersion
        ? 'Выполняю все виды пластических операций: маммопластику, блефаропластику, ринопластику, липосакцию, абдоминопластику. Пластический хирург: Львов, Днепр, Запорожье, Киев, Харьков.'
        : 'Виконую всі види пластичних операцій: мамопластику, блефаропластику, ринопластику, ліпосакцію, абдомінопластику. Пластичний хірург: Львів, Дніпро, Запоріжжя, Київ, Харків.';
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
  }, [location]);

  return null;
};

export default SEOHead;
