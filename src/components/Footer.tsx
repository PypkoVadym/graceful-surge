
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

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
                  Про мене
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Послуги
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
                  Клініка
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
                <strong className="text-foreground">Адреса:</strong> Київ, вул. М. Пимоненка, 8
              </li>
              <li>
                <a href="tel:+380 73 283 01 29" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Телефон:</strong> +380 73 283 01 29
                </a>
              </li>
              <li>
                <a href="mailto:Denismrkv4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Email:</strong> Denismrkv4@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Office Hours */}
          <div>
            <h3 className="font-semibold mb-4">Години роботи</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Понеділок – Субота:</strong> 9:00 – 20:00
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

