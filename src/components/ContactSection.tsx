
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ContactInfo from './contact/ContactInfo';
import ContactFormContainer from './contact/ContactFormContainer';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Зв'язатися з нами"
          title="Запишіться на безкоштовну онлайн консультацію"
          description="Зробіть перший крок до досягнення ваших естетичних цілей, записавшись на персональну безкоштовну консультацію."
          centered={true}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {isMobile ? (
            // Mobile order: Form first, then Contact Info
            <>
              <div className="animate-slide-in">
                <ContactFormContainer />
              </div>
              <div className="animate-fade-in">
                <ContactInfo />
              </div>
            </>
          ) : (
            // Desktop order: Contact Info first, then Form
            <>
              <div className="animate-fade-in">
                <ContactInfo />
              </div>
              <div className="animate-slide-in">
                <ContactFormContainer />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
