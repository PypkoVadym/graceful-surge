
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TestimonialCard from './ui/TestimonialCard';
import TestimonialPopup from './ui/TestimonialPopup';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Мені підходять абсолютно всі наряди, де є декольте і не тільки, так як форма і міжгруддя зроблені просто ідеально.",
      name: "Вікторія",
      title: "Пацієнтка після мамопластики",
      rating: 5,
      image: "https://i.imgur.com/q2tRjtO.jpeg",
      resultImage: "https://i.imgur.com/8eJUM0S.jpeg"
    },
    {
      quote: "За 5 місяців вже на стільки звикла, що ніби так і мало б бути з народження 🙈 все комфортно, все подобається, дуже дякую 🥰",
      name: "Лілія",
      title: "Пацієнтка після мамопластики",
      rating: 5,
      image: "https://i.imgur.com/N9hGPsp.jpeg",
      resultImage: "https://i.imgur.com/plj1KIc.jpeg"
    },
    {
      quote: "Все чудово дихає!",
      name: "Вероніка",
      title: "Пацієнтка після ринопластики",
      rating: 5,
      image: "https://i.imgur.com/thTOcmt.jpeg",
      resultImage: "https://i.imgur.com/pFMI6he.jpeg"
    },
    {
      quote: "Все супер! Часом забуваю, що вони такі були не завжди 😊",
      name: "Анна",
      title: "Пацієнтка після мамопластики",
      rating: 5,
      image: "https://i.imgur.com/RlSbQev.jpeg",
      resultImage: "https://i.imgur.com/1lm5qIa.jpeg"
    },
    {
      quote: "Я в шоці, що все так гарно виглядає, я більше не виглядаю такою \"втомленою і унившою\".",
      name: "Оксана",
      title: "Пацієнтка після блефаропластики",
      rating: 5,
      image: "https://i.imgur.com/dcmEMEx.jpeg",
      resultImage: "https://i.imgur.com/5bklEbf.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Відгуки"
          title="Що кажуть наші пацієнти"
          description="Ознайомтеся з реальним досвідом наших пацієнтів та результатами їхніх трансформацій."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialPopup 
                popupImage={testimonial.resultImage} 
                name={testimonial.name}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  rating={testimonial.rating}
                  image={testimonial.image}
                  className="transition-transform hover:scale-[1.02] duration-300"
                />
              </TestimonialPopup>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Записатися на безкоштовну консультацію
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
