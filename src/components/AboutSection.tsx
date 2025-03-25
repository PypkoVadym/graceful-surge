
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Award, Clock, User, Star, ArrowRight } from 'lucide-react';
import ImageOptimizer from './ImageOptimizer';

// Повторно використовуваний компонент StatCard
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
          pretitle="Про мене"
          title="Присвячено досконалості в естетичній медицині"
          centered={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side - Optimized */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10"></div>
            <ImageOptimizer
              src="https://i.imgur.com/7jZsUD2.jpeg"
              alt="Портрет доктора Дениса Марковича, сертифікованого пластичного хірурга"
              className="rounded-2xl shadow-lg object-cover w-full h-full transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              width={600}
              height={800}
            />

            {/* Certification Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-scale-in">
              <div className="flex items-center">
                <Award className="text-primary mr-2" size={20} />
                <div>
                  <p className="text-sm font-medium">Сертифікований фахівець</p>
                  <p className="text-xs text-muted-foreground">Американська рада пластичної хірургії</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Д-р Денис Маркович</h3>
            <h4 className="text-lg text-primary mb-6">Експерт з пластичної хірургії з понад 15-річним досвідом</h4>

            <p className="text-muted-foreground mb-6">
              Д-р Денис Маркович — сертифікований пластичний хірург, який спеціалізується на естетичних та реконструктивних процедурах. З понад 15-річним досвідом, вона поєднує хірургічну точність з художнім баченням для досягнення природного вигляду, адаптованого до унікальної анатомії та цілей кожного пацієнта.
            </p>

            <p className="text-muted-foreground mb-8">
              Після отримання медичної освіти в Гарвардській медичній школі, д-р Маркович проходила резидентуру з пластичної хірургії в престижній клініці Майо, а згодом — стажування з естетичної хірургії в лікарні Manhattan Eye, Ear and Throat у Нью-Йорку.
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <StatCard icon={Clock} value="15+" label="Років досвіду" />
              <StatCard icon={User} value="5,000+" label="Задоволених пацієнтів" />
              <StatCard icon={Star} value="4.9/5" label="Оцінка пацієнтів" />
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#services"
                className="inline-flex items-center text-primary font-medium hover:underline"
                aria-label="Переглянути доступні послуги"
                onClick={handleScrollToServices}
              >
                Переглянути послуги <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
