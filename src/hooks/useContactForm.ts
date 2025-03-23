
import { useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
    setFormData(prev => ({ ...prev, [name]: value }));
    
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
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Введіть дійсний номер телефону з 10 цифр";
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
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Saving contact message to Supabase...");
      
      // Use type assertion to work around type issues
      const { error, data } = await supabase
        .from('contact_messages')
        .insert({
          full_name: formData.name,
          phone: formData.phone,
          message: formData.message
        } as any)
        .select();
        
      if (error) {
        console.error('Error saving contact message:', error);
        toast.error("Помилка при відправці повідомлення. Спробуйте ще раз.");
        setIsSubmitting(false);
        return;
      }
      
      console.log("Successfully saved contact message:", data);
      // Show success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Ваше повідомлення успішно надіслано!");
      
      // Reset form after submission
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      
      // Reset submission state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
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
