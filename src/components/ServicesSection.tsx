
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ImageSlider from './ui/ImageSlider';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  // Sample service data
  const facialServices = {
    title: "Процедури для обличчя",
    description: "Відновіть красу та зменшіть ознаки старіння завдяки нашим комплексним процедурам для обличчя.",
    details: [
      "Ринопластика",
      "Пластика повік (блефаропластика)",
      "Підтяжка обличчя та шиї",
      "Відновлення форми обличчя (ліпофілінг)",
      "Безопераційне омолодження обличчя"
    ],
    images: [
      "https://i.imgur.com/bBbQdor.jpeg",
      "https://i.imgur.com/Uxnfrto.jpeg",
      "https://i.imgur.com/RwsO9XW.jpeg"
    ]
  };

  const bodyServices = {
    title: "Контурна пластика тіла",
    description: "Сформуйте та підкресліть контури тіла за допомогою наших хірургічних та нехірургічних процедур.",
    details: [
      "Ліпосакція та скульптурування тіла",
      "Абдомінопластика",
      "RF-lifting (створення нового колагену)",
      "Мамопластика після пологів",
      "Контурна пластика після схуднення"
    ],
    images: [
      "https://i.imgur.com/AEqzc88.jpeg",
      "https://i.imgur.com/AEqzc88.jpeg",
      "https://i.imgur.com/AEqzc88.jpeg"
    ]
  };

  const breastServices = {
    title: "Процедури для грудей",
    description: "Збільшіть, зменшіть або відновіть форму грудей завдяки персоналізованим процедурам.",
    details: [
      "Збільшення грудей",
      "Підтяжка грудей (мастопексія)",
      "Зменшення грудей",
      "Реконструкція грудей"
    ],
    images: [
      "https://i.imgur.com/K701ddL.jpeg",
      "https://i.imgur.com/rE7phUj.jpeg",
      "https://i.imgur.com/MGPvIW1.jpeg"
    ]
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Послуги"
          title="Комплексні естетичні процедури"
          description="Ми пропонуємо широкий спектр хірургічних і нехірургічних процедур, спрямованих на підкреслення вашої природної краси та впевненості."
          centered={true}
        />
        
        {/* Service 1: Facial Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in">
          <div>
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              01
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{facialServices.title}</h3>
            <p className="text-muted-foreground mb-6">{facialServices.description}</p>
            
            <ul className="space-y-3 mb-6">
              {facialServices.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-primary rounded-full text-white text-xs mr-3 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={facialServices.images} 
              aspectRatio="wide"
            />
          </div>
        </div>
        
        {/* Service 2: Body Contouring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in">
          <div className="order-2 lg:order-1 animate-scale-in">
            <ImageSlider 
              images={bodyServices.images} 
              aspectRatio="wide"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              02
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{bodyServices.title}</h3>
            <p className="text-muted-foreground mb-6">{bodyServices.description}</p>
            
            <ul className="space-y-3 mb-6">
              {bodyServices.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-primary rounded-full text-white text-xs mr-3 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
        </div>
        
        {/* Service 3: Breast Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              03
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{breastServices.title}</h3>
            <p className="text-muted-foreground mb-6">{breastServices.description}</p>
            
            <ul className="space-y-3 mb-6">
              {breastServices.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-primary rounded-full text-white text-xs mr-3 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={breastServices.images} 
              aspectRatio="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
