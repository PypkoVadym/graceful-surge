
import React from 'react';
import SEOHead from '../components/SEOHead';
import HeaderRu from '../components/russian/HeaderRu';
import HeroSectionRu from '../components/russian/HeroSectionRu';
import AboutSectionRu from '../components/russian/AboutSectionRu';
import ServicesSectionRu from '../components/russian/ServicesSectionRu';
import TestimonialsSectionRu from '../components/russian/TestimonialsSectionRu';
import ClinicSectionRu from '../components/russian/ClinicSectionRu';
import ContactSectionRu from '../components/russian/ContactSectionRu';
import FooterRu from '../components/russian/FooterRu';

const HomeRU = () => {
  return (
    <div className="min-h-screen">
      {/* Use SEOHead for proper metadata management */}
      <SEOHead isRussianVersion={true} />
      
      <HeaderRu />
      <main>
        <HeroSectionRu />
        <AboutSectionRu />
        <ServicesSectionRu />
        <TestimonialsSectionRu />
        <ClinicSectionRu />
        <ContactSectionRu />
      </main>
      <FooterRu />
    </div>
  );
};

export default HomeRU;
