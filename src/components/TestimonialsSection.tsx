
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TestimonialCard from './ui/TestimonialCard';
import TestimonialPopup from './ui/TestimonialPopup';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Майстерність та художній підхід д-ра Маркович кардинально, але природно змінили мою зовнішність. Я в захваті від результату!",
      name: "Люда П.",
      title: "Пацієнтка після підтяжки обличчя",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
      quote: "Я отримав виняткову турботу від консультації до відновлення. Доктор Маркович уважно вислухав мої побажання і виконав все ідеально.",
      name: "Максим Л.",
      title: "Пацієнт після ринопластики",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Після мамопластики я знову відчула себе собою. Результат перевершив мої очікування, а персонал зробив процес надзвичайно комфортним.",
      name: "Сара К.",
      title: "Пацієнтка контурної пластики тіла",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
    },
    {
      quote: "Уважність д-ра Чен до деталей вражає. Моє збільшення грудей виглядає настільки природно, що ніхто навіть не здогадується про операцію.",
      name: "Емілі Р.",
      title: "Пацієнтка після мамопластики",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      quote: "Безопераційні процедури повернули мені молодий вигляд. Доктор Чен точно знає, що потрібно для свіжого та природного результату.",
      name: "Девід М.",
      title: "Пацієнт безопераційного омолодження",
      rating: 5,
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1960&auto=format&fit=crop"
    },
    {
      quote: "Я довго обирав хірурга, і не пожалкував, що обрав д-ра Чен. Результат саме такий, як я мріяв.",
      name: "Аманда Б.",
      title: "Пацієнтка після пластики повік",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
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
                image={testimonial.image} 
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
            Записатися на консультацію
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
