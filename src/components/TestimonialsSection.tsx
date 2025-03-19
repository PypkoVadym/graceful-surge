
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TestimonialCard from './ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Dr. Chen's skill and artistry transformed my appearance in the most natural way. I couldn't be happier with my results!",
      name: "Jennifer L.",
      title: "Facelift Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
      quote: "The care I received was exceptional from consultation through recovery. Dr. Chen listened to my concerns and delivered exactly what I wanted.",
      name: "Michael T.",
      title: "Rhinoplasty Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "After my mommy makeover, I feel like myself again. The results exceeded my expectations, and the staff made the entire process so comfortable.",
      name: "Sarah K.",
      title: "Body Contouring Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
    },
    {
      quote: "Dr. Chen's attention to detail is remarkable. My breast augmentation looks so natural that no one can tell I've had surgery.",
      name: "Emily R.",
      title: "Breast Augmentation Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      quote: "The non-surgical treatments have taken years off my appearance. Dr. Chen knows exactly what's needed to create a refreshed look.",
      name: "David M.",
      title: "Non-Surgical Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1960&auto=format&fit=crop"
    },
    {
      quote: "I researched many surgeons before choosing Dr. Chen, and I couldn't be happier with my decision. My results are exactly what I hoped for.",
      name: "Amanda B.",
      title: "Eyelid Surgery Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Testimonials"
          title="What Our Patients Say"
          description="Discover the experiences of our satisfied patients and their transformational journeys."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
