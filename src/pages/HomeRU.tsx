
import React from 'react';
import Header from '../components/russian/HeaderRu';
import Footer from '../components/russian/FooterRu';
import HeroSectionRu from '../components/russian/HeroSectionRu';
import AboutSectionRu from '../components/russian/AboutSectionRu';
import ServicesSectionRu from '../components/russian/ServicesSectionRu';
import TestimonialsSectionRu from '../components/russian/TestimonialsSectionRu';
import ClinicSectionRu from '../components/russian/ClinicSectionRu';
import ContactSectionRu from '../components/russian/ContactSectionRu';
import SEOHead from '../components/SEOHead';

const HomeRU = () => {
  return (
    <div className="min-h-screen">
      {/* Add SEO Head with Russian language attributes */}
      <SEOHead isRussianVersion={true} />
      
      <Header />
      <main>
        <HeroSectionRu />
        <AboutSectionRu />
        <ServicesSectionRu />
        <TestimonialsSectionRu />
        <ClinicSectionRu />
        <ContactSectionRu />
      </main>
      <Footer />
    </div>
  );
};

export default HomeRU;
