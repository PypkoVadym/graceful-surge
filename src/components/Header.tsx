
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
      setIsScrolled(window.scrollY > 10);
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
        // Always white (or subtly opaque if desired)
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
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

          {/* Social Media Icons - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4 mr-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="Threads">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                <path d="M7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.44 7.5C6.48 8.74 5.25 10.97 5.25 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 7.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25 4.5V4.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                <path d="M9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15V8.25C11.25 7.85218 11.408 7.47064 11.6893 7.18934C11.9706 6.90804 12.3522 6.75 12.75 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 10.5C11.25 9.25736 12.2574 8.25 13.5 8.25C14.7426 8.25 15.75 9.25736 15.75 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.25 8.25C14.25 6.17893 15.9289 4.5 18 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="LinkedIn">
              <Linkedin size={20} />
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
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              Зв'язатися з нами
            </Button>
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
          
          {/* Social Media Icons - Mobile */}
          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-100">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="Threads">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                <path d="M7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.44 7.5C6.48 8.74 5.25 10.97 5.25 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 7.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25 4.5V4.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                <path d="M9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15V8.25C11.25 7.85218 11.408 7.47064 11.6893 7.18934C11.9706 6.90804 12.3522 6.75 12.75 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 10.5C11.25 9.25736 12.2574 8.25 13.5 8.25C14.7426 8.25 15.75 9.25736 15.75 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.25 8.25C14.25 6.17893 15.9289 4.5 18 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-primary transition-colors" 
               aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
