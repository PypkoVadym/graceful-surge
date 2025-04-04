
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SocialMediaIcons from './SocialMediaIcons';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
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
          aria-label="Закрити меню"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col space-y-6">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Про мене
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Послуги
        </button>
        <button 
          onClick={() => scrollToSection('testimonials')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Відгуки
        </button>
        <button 
          onClick={() => scrollToSection('clinic')}
          className="text-lg font-medium py-2 border-b border-gray-100"
        >
          Клініка
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-primary text-white rounded-lg py-3 text-center font-medium mt-4"
        >
          Зв'язатися з нами
        </button>
        
        {/* Language Switcher - Mobile */}
        <LanguageSwitcher isMobile={true} />
        
        {/* Social Media Icons - Mobile */}
        <SocialMediaIcons isMobile={true} />
      </nav>
    </div>
  );
};

export default MobileMenu;
