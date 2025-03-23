
import React from 'react';
import ContactForm from './ContactForm';

const ContactFormContainer = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Надіслати повідомлення</h3>
      <ContactForm />
    </div>
  );
};

export default ContactFormContainer;
