
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-display font-semibold tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMobileMenu();
              }}
            >
              <span className="text-primary">Денис</span>Маркович
            </a>
          </div>

          {/* Desktop Navigation */}
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
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              Зв'язатися з нами
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Перемкнути меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
