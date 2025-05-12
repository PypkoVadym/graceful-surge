
import React from 'react';
import { Button } from '@/components/ui/button';

interface DesktopNavigationRuProps {
  scrollToSection: (id: string) => void;
}

const DesktopNavigationRu: React.FC<DesktopNavigationRuProps> = ({ scrollToSection }) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button 
        onClick={() => scrollToSection('about')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Обо мне
      </button>
      <button 
        onClick={() => scrollToSection('services')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Услуги
      </button>
      <button 
        onClick={() => scrollToSection('testimonials')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Отзывы
      </button>
      <button 
        onClick={() => scrollToSection('clinic')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Клиника
      </button>
      <Button 
        onClick={() => scrollToSection('contact')}
        className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
      >
        Бесплатная консультация
      </Button>
    </nav>
  );
};

export default DesktopNavigationRu;
