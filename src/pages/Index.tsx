
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClinicSection from '../components/ClinicSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Russian language components
import HeaderRu from '../components/russian/HeaderRu';
import FooterRu from '../components/russian/FooterRu';
import HeroSectionRu from '../components/russian/HeroSectionRu';
import AboutSectionRu from '../components/russian/AboutSectionRu';
import ServicesSectionRu from '../components/russian/ServicesSectionRu';
import TestimonialsSectionRu from '../components/russian/TestimonialsSectionRu';
import ClinicSectionRu from '../components/russian/ClinicSectionRu';
import ContactSectionRu from '../components/russian/ContactSectionRu';
import SEOHead from '../components/SEOHead';

const Index = () => {
  const location = useLocation();
  const isRussianVersion = location.pathname.includes('/alternative');

  // Add language-specific SEO metadata
  useEffect(() => {
    if (isRussianVersion) {
      document.title = "Пластический хирург в России Денис Маркович";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'Выполняю все виды пластических операций: маммопластику, блефаропластику, ринопластику, липосакцию, абдоминопластику. Пластический хирург Денис Маркович.');
    } else {
      document.title = "Пластичний хірург в Україні Денис Маркович";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 
        'Виконую всі види пластичних операцій: мамопластику, блефаропластику, ринопластику, ліпосакцію, абдомінопластику. Пластичний хірург: Львів, Дніпро, Запоріжжя, Київ, Харків.');
    }
  }, [isRussianVersion]);

  // Smooth scroll to section when URL contains hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Add SEO Head with language attributes */}
      <SEOHead isRussianVersion={isRussianVersion} />
      
      {isRussianVersion ? <HeaderRu /> : <Header />}
      <main>
        {isRussianVersion ? (
          // Russian content
          <>
            <HeroSectionRu />
            <AboutSectionRu />
            <ServicesSectionRu />
            <TestimonialsSectionRu />
            <ClinicSectionRu />
            <ContactSectionRu />
          </>
        ) : (
          // Ukrainian content
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <ClinicSection />
            <ContactSection />
          </>
        )}
      </main>
      {isRussianVersion ? <FooterRu /> : <Footer />}
    </div>
  );
};

export default Index;
