
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine if we're on the alternative (Russian) page
  const isAlternativePage = window.location.pathname.includes('/alternative');

  return (
    <div className={cn("relative", isMobile ? "mt-4" : "")} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center font-medium hover:text-primary transition-colors"
        aria-expanded={isOpen}
        aria-label="Змінити мову"
      >
        <span className="mr-1">{isAlternativePage ? 'RU' : 'UA'}</span>
        <ChevronDown size={16} className={cn("transition-transform", isOpen ? "rotate-180" : "")} />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-1 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden">
          {isAlternativePage ? (
            <Link 
              to="/" 
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={closeDropdown}
            >
              UA
            </Link>
          ) : (
            <Link 
              to="/alternative" 
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={closeDropdown}
            >
              RU
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
