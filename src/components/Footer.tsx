
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-display font-semibold tracking-tight inline-block">
              <span className="text-primary">Денис</span>Маркович
            </a>
            <p className="text-muted-foreground text-sm">
              Преміальна пластична хірургія та естетичні послуги, спрямовані на підкреслення вашої природної краси.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                  <path d="M7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12C16.5 14.49 14.49 16.5 12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.44 7.5C6.48 8.74 5.25 10.97 5.25 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.75 13.5V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.75 7.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.25 4.5V4.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                  <path d="M9 12.75C7.75736 12.75 6.75 13.7574 6.75 15C6.75 16.2426 7.75736 17.25 9 17.25C10.2426 17.25 11.25 16.2426 11.25 15V8.25C11.25 7.85218 11.408 7.47064 11.6893 7.18934C11.9706 6.90804 12.3522 6.75 12.75 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.25 10.5C11.25 9.25736 12.2574 8.25 13.5 8.25C14.7426 8.25 15.75 9.25736 15.75 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.25 8.25C14.25 6.17893 15.9289 4.5 18 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 7.5V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Про д-ра Марковича
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Наші послуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Відгуки пацієнтів
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('clinic')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Наша клініка
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Зв'язатися з нами
                </button>
              </li>
            </ul>
          </div>
          
          {/* Контактна інформація */}
          <div>
            <h3 className="font-semibold mb-4">Контактна інформація</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Адреса:</strong> м.Київ, вул. Хрещатик, 123
              </li>
              <li>
                <a href="tel:+1-800-123-4567" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Телефон:</strong> (063) 1234567
                </a>
              </li>
              <li>
                <a href="mailto:info@aestheticmd.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Email:</strong> info@aestheticmd.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Office Hours */}
          <div>
            <h3 className="font-semibold mb-4">Години роботи</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Понеділок – П'ятниця:</strong> 9:00 – 17:00
              </li>
              <li>
                <strong className="text-foreground">Субота:</strong> 10:00 – 14:00
              </li>
              <li>
                <strong className="text-foreground">Неділя:</strong> Вихідний
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Денис Маркович. Всі права захищено.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Політика конфіденційності
              </Link>
              <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Умови користування
              </Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
              aria-label="Прокрутити вгору"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
