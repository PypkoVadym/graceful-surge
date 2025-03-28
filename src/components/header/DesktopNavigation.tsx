
import React from 'react';
import { Button } from '@/components/ui/button';

interface DesktopNavigationProps {
  scrollToSection: (id: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ scrollToSection }) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button 
        onClick={() => scrollToSection('about')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Про нас
      </button>
      <button 
        onClick={() => scrollToSection('services')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Послуги
      </button>
      <button 
        onClick={() => scrollToSection('testimonials')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Відгуки
      </button>
      <button 
        onClick={() => scrollToSection('clinic')}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Наша клініка
      </button>
      <Button 
        onClick={() => scrollToSection('contact')}
        className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
      >
        Зв'язатися з нами
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
