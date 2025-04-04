
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import FormField from '../contact/FormField';
import SubmitButton from '../contact/SubmitButton';
import SuccessMessageRu from './SuccessMessageRu';

const ContactFormRu = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit
  } = useContactForm();

  if (isSubmitted) {
    return <SuccessMessageRu />;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        id="name"
        name="name"
        label="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        placeholder="Введите ваше имя"
        error={errors.name}
      />
      
      <FormField
        id="phone"
        name="phone"
        label="Номер телефона"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="xx)xxxxxxx"
        error={errors.phone}
      />
      
      <FormField
        id="message"
        name="message"
        label="Сообщение"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        placeholder="Расскажите о своих эстетических целях или задайте вопросы"
        error={errors.message}
      />
      
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactFormRu;
