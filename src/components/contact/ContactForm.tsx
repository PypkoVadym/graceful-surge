
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit
  } = useContactForm();

  if (isSubmitted) {
    return <SuccessMessage />;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        id="name"
        name="name"
        label="Ваше ім'я"
        value={formData.name}
        onChange={handleChange}
        placeholder="Введіть ваше ім'я"
        error={errors.name}
      />
      
      <FormField
        id="phone"
        name="phone"
        label="Номер телефону"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder=""
        error={errors.phone}
      />
      
      <FormField
        id="message"
        name="message"
        label="Повідомлення"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        placeholder="Розкажіть про свої естетичні цілі або запитання"
        error={errors.message}
      />
      
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;
