
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ImageSlider from './ui/ImageSlider';
import { MapPin, Clock, Shield, HeartPulse } from 'lucide-react';

const ClinicSection = () => {
  const clinicImages = [
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629909614778-b6d8a620b151?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1953&auto=format&fit=crop"
  ];

  return (
    <section id="clinic" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/30 rounded-tr-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Our Clinic"
          title="State-of-the-Art Facility"
          description="Experience premium care in our modern, comfortable clinic designed with your safety and comfort in mind."
          centered={false}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-8">
              Our clinic combines luxury and cutting-edge technology to provide you with an exceptional experience. From our reception area to our procedure rooms, every detail has been considered to ensure your comfort, privacy, and safety.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Prime Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Conveniently located in the heart of Beverly Hills with easy access and private parking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Safety First</h4>
                  <p className="text-sm text-muted-foreground">
                    Our facility is AAAASF accredited, adhering to the highest safety standards in outpatient surgery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <HeartPulse className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Advanced Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Equipped with the latest medical technology and innovations for optimal results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Dedicated Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Our attentive staff provides personalized care throughout your entire journey.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-foreground rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              Schedule a Visit
            </button>
          </div>
          
          {/* Image Slider */}
          <div className="animate-scale-in">
            <ImageSlider 
              images={clinicImages} 
              aspectRatio="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
