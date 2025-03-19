
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClinicSection from '../components/ClinicSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
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
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ClinicSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
