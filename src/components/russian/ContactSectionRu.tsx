
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ContactInfo from '../contact/ContactInfo';
import ContactFormContainerRu from './ContactFormContainerRu';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSectionRu = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Связаться с нами"
          title="Запишитесь на бесплатную консультацию"
          description="Сделайте первый шаг к достижению ваших эстетических целей, записавшись на персональную бесплатную консультацию."
          centered={true}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {isMobile ? (
            // Mobile order: Form first, then Contact Info
            <>
              <div className="animate-slide-in">
                <ContactFormContainerRu />
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
                <ContactFormContainerRu />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSectionRu;
