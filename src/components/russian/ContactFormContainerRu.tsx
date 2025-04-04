
import React from 'react';
import ContactFormRu from './ContactFormRu';

const ContactFormContainerRu = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
      <ContactFormRu />
    </div>
  );
};

export default ContactFormContainerRu;
