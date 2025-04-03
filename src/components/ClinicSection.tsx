import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ImageSlider from './ui/ImageSlider';
import { MapPin, Clock, Shield, HeartPulse } from 'lucide-react';

const ClinicSection = () => {
  const clinicImages = [
    "https://i.imgur.com/1qypOoG.jpeg",
    "https://i.imgur.com/mNC0euJ.jpeg",
    "https://i.imgur.com/FbLgCOi.jpeg"
  ];

  return (
    <section id="clinic" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/30 rounded-tr-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Наша Клініка"
          title="Комфортний медичний заклад"
          description="Відчуйте преміальний догляд у нашій комфортній клініці, створеній з урахуванням вашої безпеки та затишку."
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-8">
            Наша клініка має поєднання класики та сучасних технологій, що створює атмосферу комфорту, надійності та високого рівня обслуговування.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Вигідне розташування</h4>
                  <p className="text-sm text-muted-foreground">
                    Зручно розташована в місті Київ біля метро Лукʼянівська з легким доступом та великою приватною парковкою.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Комфортні палати</h4>
                  <p className="text-sm text-muted-foreground">
                  Обладнані сучасними ліжками, кондиціонерами, телевізорами, душовими кімнатами та необхідними засобами для гігієни.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Безпека та якість</h4>
                  <p className="text-sm text-muted-foreground">
                  Працюємо за найвищими медичними стандартами та використовуємо лише перевірені сучасні препарати для анестезії. Наша мета – створити простір, де пацієнти почуваються впевнено, спокійно та комфортно.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <HeartPulse className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Передові технології</h4>
                  <p className="text-sm text-muted-foreground">
                  Клініка обладнана сучасними апаратами для RF-ліфтингу, лазерних процедур, а також наркозним апаратом із BIS-моніторингом, що забезпечує максимальну точність та безпеку анестезії.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Індивідуальний підхід</h4>
                  <p className="text-sm text-muted-foreground">
                    Наш уважний персонал надає індивідуальний догляд протягом усього вашого шляху.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-foreground rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              Записатися на безкоштовну консультацію
            </button>
          </div>
          
          {/* Image Slider - Centered */}
          <div className="animate-scale-in flex justify-center items-center">
            <div className="w-full">
              <ImageSlider 
                images={clinicImages} 
                aspectRatio="portrait"
                height="600px"
                width="50%"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;