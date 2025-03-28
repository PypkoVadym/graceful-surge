
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SocialMediaIcons from './SocialMediaIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out transform md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="absolute right-4 top-4">
        <button
          onClick={onClose}
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
          Про нас
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
          Наша клініка
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-primary text-white rounded-lg py-3 text-center font-medium mt-4"
        >
          Зв'язатися з нами
        </button>
        
        {/* Social Media Icons - Mobile */}
        <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-100">
          <SocialMediaIcons size={24} className="space-x-6" />
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
