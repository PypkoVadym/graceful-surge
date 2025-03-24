
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ContactInfo from './contact/ContactInfo';
import ContactFormContainer from './contact/ContactFormContainer';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Зв'язок з нами"
          title="Запишіться на консультацію"
          description="Зробіть перший крок до досягнення ваших естетичних цілей, записавшись на персональну консультацію."
          centered={true}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <ContactInfo />
          </div>
          <div className="animate-slide-in">
            <ContactFormContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
