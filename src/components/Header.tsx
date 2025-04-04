
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './header/Logo';
import SocialMediaIcons from './header/SocialMediaIcons';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenu from './header/MobileMenu';
import LanguageSwitcher from './header/LanguageSwitcher';

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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo onClick={handleLogoClick} />

          {/* Desktop Navigation, Language Switcher and Social Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <DesktopNavigation scrollToSection={scrollToSection} />
            <LanguageSwitcher />
            <SocialMediaIcons />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Перемкнути меню"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;
