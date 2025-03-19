
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-accent rounded-bl-[100px] opacity-60 -z-10" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-[100px] -z-10" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              Premium Aesthetic Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Enhance Your Natural Beauty With Expert Care
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Discover the perfect balance between artistry and medical expertise with our personalized aesthetic treatments designed to bring out your natural beauty.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Consultation <ArrowRight className="inline ml-2" size={16} />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-50 text-foreground rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
              >
                Explore Services
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1595621864587-b1c494df667d?q=80&w=1740&auto=format&fit=crop"
              alt="Doctor with patient"
              className="rounded-2xl shadow-lg object-cover w-full h-full aspect-[4/3] transform -rotate-3 transition-transform duration-500 hover:rotate-0"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-scale-in">
              <p className="text-sm font-medium">Dr. Elizabeth Chen</p>
              <p className="text-xs text-muted-foreground">Board Certified Plastic Surgeon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
