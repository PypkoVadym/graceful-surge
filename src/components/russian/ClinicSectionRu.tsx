
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ImageSlider from '../ui/ImageSlider';
import { MapPin, User, Bed, Shield, HeartPulse } from 'lucide-react';

const ClinicSectionRu = () => {
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
          pretitle="Клиника"
          title="Комфортное медицинское учреждение"
          description="Почувствуйте премиальный уход в нашей комфортной клинике, созданной с учетом вашей безопасности и уюта."
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-8">
            Клиника сочетает надежность с самыми современными медицинскими технологиями, создавая не просто атмосферу комфорта — а пространство, где о вашем здоровье заботятся на самом высоком уровне.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Выгодное расположение</h4>
                  <p className="text-sm text-muted-foreground">
                    Удобно расположена в городе Киев возле метро Лукьяновская с легким доступом и большой частной парковкой.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Bed className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Комфортные палаты</h4>
                  <p className="text-sm text-muted-foreground">
                  Оборудованы современными кроватями, кондиционерами, телевизорами, душевыми комнатами и необходимыми средствами для гигиены.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Безопасность и качество</h4>
                  <p className="text-sm text-muted-foreground">
                  Работаем по высочайшим медицинским стандартам и используем только проверенные современные препараты для анестезии с целью создать пространство, где пациенты чувствуют себя уверенно, спокойно и комфортно.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <HeartPulse className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Передовые технологии</h4>
                  <p className="text-sm text-muted-foreground">
                  Клиника оборудована современными аппаратами для RF-лифтинга, лазерных процедур, а также наркозным аппаратом с BIS-мониторингом, что обеспечивает максимальную точность и безопасность анестезии.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <User className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Индивидуальный подход</h4>
                  <p className="text-sm text-muted-foreground">
                    Наш внимательный персонал обеспечивает индивидуальный уход на протяжении всего вашего пути.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-50 text-foreground rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100"
            >
              Записаться на консультацию
            </button>
          </div>
          
          {/* Image Slider - Centered */}
          <div className="animate-scale-in flex justify-center items-center">
            <div className="w-full">
              <ImageSlider 
                images={clinicImages} 
                aspectRatio="portrait"
                height="600px"
                width="100%"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSectionRu;
