
import React, { useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
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
      // Save the contact message to Supabase
      const { error, data } = await supabase
        .from('contact_messages')
        .insert({
          full_name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
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

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <CheckCircle className="text-primary" size={32} />
        </div>
        <h4 className="text-xl font-medium mb-2">Дякуємо!</h4>
        <p className="text-muted-foreground mb-4">
          Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg ${errors.name ? 'border-destructive' : 'border-input'}`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg ${errors.phone ? 'border-destructive' : 'border-input'}`}
          placeholder="Введіть номер телефону"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg ${errors.message ? 'border-destructive' : 'border-input'} min-h-[120px]`}
          placeholder="Розкажіть про свої естетичні цілі або запитання"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-medium transition-colors relative overflow-hidden group"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Обробка...
          </span>
        ) : (
          <>
            <span className="relative z-10">Надіслати повідомлення</span>
            <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
