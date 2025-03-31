
import { useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

interface ContactFormErrors {
  name: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<ContactFormErrors>({
    name: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === 'phone') {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, '');
      
      // Limit to 9 digits (excluding country code)
      const truncated = digitsOnly.slice(0, 9);
      
      // Format the display value based on what's been entered
      // This will show the user their input with the proper format
      let formattedValue = '';
      if (truncated.length > 0) {
        formattedValue = truncated;
      }
      
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = "Ім'я обов'язкове";
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефону обов'язковий";
      isValid = false;
    } else if (formData.phone.length < 9) {
      newErrors.phone = "Введіть 9 цифр номера телефону";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Повідомлення обов'язкове";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      console.log("Validation failed:", errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Format phone number for database
    const formattedPhone = `+380${formData.phone}`;
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          full_name: formData.name,
          phone: formattedPhone,
          message: formData.message
        });
        
      if (error) {
        console.error('Error saving contact message:', error);
        toast.error("Помилка при відправці повідомлення. Спробуйте ще раз.");
        setIsSubmitting(false);
        return;
      }
      
      console.log("Successfully saved contact message");
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Ваше повідомлення успішно надіслано!");
      
      // Navigate to the thank-you page
      navigate('/thank-you');
      
    } catch (error) {
      console.error('Unexpected error during form submission:', error);
      toast.error("Сталася помилка при спробі зв'язатися з сервером.");
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted
  };
};
