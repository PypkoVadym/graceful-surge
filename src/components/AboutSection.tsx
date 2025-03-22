import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Award, Clock, User, Star, ArrowRight } from 'lucide-react';

// Reusable StatCard Component
const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="bg-white bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-2">
      <Icon className="text-primary mr-2" size={20} />
      <span className="font-semibold">{value}</span>
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const AboutSection = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/30 rounded-bl-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="About Me"
          title="Dedicated to Excellence in Aesthetic Medicine"
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1740&auto=format&fit=crop"
              alt="Portrait of Dr. Elizabeth Chen, a board-certified plastic surgeon"
              loading="lazy"
              className="rounded-2xl shadow-lg object-cover w-full h-full transform -rotate-3 transition-transform duration-500 hover:rotate-0"
            />

            {/* Certification Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-scale-in">
              <div className="flex items-center">
                <Award className="text-primary mr-2" size={20} />
                <div>
                  <p className="text-sm font-medium">Board Certified</p>
                  <p className="text-xs text-muted-foreground">American Board of Plastic Surgery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Dr. Elizabeth Chen</h3>
            <h4 className="text-lg text-primary mb-6">Expert Plastic Surgeon with 15+ Years Experience</h4>

            <p className="text-muted-foreground mb-6">
              Dr. Elizabeth Chen is a board-certified plastic surgeon specializing in aesthetic and reconstructive procedures. With over 15 years of experience, she combines surgical precision with an artistic eye to deliver natural-looking results tailored to each patient's unique anatomy and goals.
            </p>

            <p className="text-muted-foreground mb-8">
              After completing her medical degree at Harvard Medical School, Dr. Chen trained at the prestigious Mayo Clinic for her residency in plastic surgery, followed by a fellowship in aesthetic surgery at Manhattan Eye, Ear and Throat Hospital in New York.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <StatCard icon={Clock} value="15+" label="Years Experience" />
              <StatCard icon={User} value="5,000+" label="Satisfied Patients" />
              <StatCard icon={Star} value="4.9/5" label="Patient Rating" />
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#services"
                className="inline-flex items-center text-primary font-medium hover:underline"
                aria-label="Explore available services"
                onClick={handleScrollToServices}
              >
                Explore Services <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
