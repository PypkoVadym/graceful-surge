
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import TestimonialPopup from '../ui/TestimonialPopup';

const TestimonialsSectionRu = () => {
  const testimonials = [
    {
      quote: "Мне подходят абсолютно все наряды, где есть декольте и не только, так как форма и межгрудье сделаны просто идеально.",
      name: "Виктория",
      title: "Пациентка после маммопластики",
      rating: 5,
      image: "https://i.imgur.com/q2tRjtO.jpeg",
      resultImage: "https://i.imgur.com/8eJUM0S.jpeg"
    },
    {
      quote: "За 5 месяцев уже настолько привыкла, что как будто так и должно было быть с рождения 🙈 все комфортно, все нравится, большое спасибо 🥰",
      name: "Лилия",
      title: "Пациентка после маммопластики",
      rating: 5,
      image: "https://i.imgur.com/N9hGPsp.jpeg",
      resultImage: "https://i.imgur.com/plj1KIc.jpeg"
    },
    {
      quote: "Все отлично дышит!",
      name: "Вероника",
      title: "Пациентка после ринопластики",
      rating: 5,
      image: "https://i.imgur.com/thTOcmt.jpeg",
      resultImage: "https://i.imgur.com/pFMI6he.jpeg"
    },
    {
      quote: "Все супер! Иногда забываю, что они такими были не всегда 😊",
      name: "Анна",
      title: "Пациентка после маммопластики",
      rating: 5,
      image: "https://i.imgur.com/RlSbQev.jpeg",
      resultImage: "https://i.imgur.com/1lm5qIa.jpeg"
    },
    {
      quote: "Я в шоке, что все так хорошо выглядит, я больше не выгляжу такой \"уставшей и унылой\".",
      name: "Оксана",
      title: "Пациентка после блефаропластики",
      rating: 5,
      image: "https://i.imgur.com/dcmEMEx.jpeg",
      resultImage: "https://i.imgur.com/5bklEbf.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Отзывы"
          title="Что говорят мои пациентки"
          description="Ознакомьтесь с реальным опытом пациенток и результатами их трансформаций."
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
            Записаться на консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionRu;
