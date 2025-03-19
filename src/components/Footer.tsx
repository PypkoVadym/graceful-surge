
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

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
              <span className="text-primary">Aesthetic</span>MD
            </a>
            <p className="text-muted-foreground text-sm">
              Premium plastic surgery and aesthetic services tailored to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Dr. Chen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Patient Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('clinic')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Clinic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Address:</strong> 123 Beverly Hills Boulevard, Beverly Hills, CA 90210
              </li>
              <li>
                <a href="tel:+1-800-123-4567" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Phone:</strong> (800) 123-4567
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
            <h3 className="font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Monday - Friday:</strong> 9:00 AM - 5:00 PM
              </li>
              <li>
                <strong className="text-foreground">Saturday:</strong> 10:00 AM - 2:00 PM
              </li>
              <li>
                <strong className="text-foreground">Sunday:</strong> Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} AestheticMD. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
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
