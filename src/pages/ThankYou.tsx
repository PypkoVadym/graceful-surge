
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
  const navigate = useNavigate();
  
  // If someone lands on this page directly without submitting the form,
  // redirect them to the homepage after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if they came from our site, if not redirect
      if (!document.referrer.includes(window.location.host)) {
        navigate('/');
      }
    }, 30000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
              <CheckCircle className="text-primary" size={48} />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">Дякуємо!</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Ваше повідомлення успішно надіслано. Наша команда зв'яжеться з вами найближчим часом.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              onClick={() => navigate('/')} 
              className="group"
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Повернутися на головну
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
