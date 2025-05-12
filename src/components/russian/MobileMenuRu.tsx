
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SocialMediaIcons from '../header/SocialMediaIcons';
import LanguageSwitcher from '../header/LanguageSwitcher';

interface MobileMenuRuProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenuRu: React.FC<MobileMenuRuProps> = ({ 
  isMobileMenuOpen, 
  closeMobileMenu, 
  scrollToSection 
}) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out transform md:hidden',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="absolute right-4 top-4">
        <button
          onClick={closeMobileMenu}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Закрыть меню"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col space-y-6">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Обо мне
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Услуги
        </button>
        <button 
          onClick={() => scrollToSection('testimonials')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Отзывы
        </button>
        <button 
          onClick={() => scrollToSection('clinic')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Клиника
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-primary text-white rounded-lg py-3 text-center font-medium mt-4"
        >
          Бесплатная консультация
        </button>
        
        {/* Language Switcher - Mobile */}
        <LanguageSwitcher isMobile={true} />
        
        {/* Social Media Icons - Mobile */}
        <SocialMediaIcons isMobile={true} />
      </nav>
    </div>
  );
};

export default MobileMenuRu;
