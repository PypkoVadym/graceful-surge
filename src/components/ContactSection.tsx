
import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Контактна інформація</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+1-800-123-4567" className="hover:text-primary transition-colors">
                        (800) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@aestheticmd.com" className="hover:text-primary transition-colors">
                        info@aestheticmd.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Адреса</h4>
                    <p className="text-muted-foreground">
                      123 Beverly Hills Boulevard<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Години роботи</h4>
                    <p className="text-muted-foreground">
                      Понеділок – П'ятниця: 9:00 – 17:00<br />
                      Субота: 10:00 – 14:00<br />
                      Неділя: Вихідний
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Надіслати повідомлення</h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Дякуємо!</h4>
                  <p className="text-muted-foreground mb-4">
                    Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50`}
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
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50`}
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
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-destructive' : 'border-input'} focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]`}
                      placeholder="Розкажіть про свої естетичні цілі або запитання"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
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
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
