
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Award, Clock, Star, ArrowRight, Syringe } from 'lucide-react';
import ImageOptimizer from '../ImageOptimizer';

// Переиспользуемый компонент StatCard
const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="bg-white bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-2">
      <Icon className="text-primary mr-2" size={20} />
      <span className="font-semibold">{value}</span>
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const AboutSectionRu = () => {
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
          pretitle="Обо мне"
          title="Ваша уникальность — моя философия"
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side - Optimized */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10"></div>
            <ImageOptimizer
              src="https://i.imgur.com/7jZsUD2.jpeg"
              alt="Портрет Дениса Марковича, сертифицированного пластического хирурга"
              className="rounded-2xl shadow-lg object-cover w-full h-full transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              width={600}
              height={800}
            />

            {/* Certification Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-scale-in">
              <div className="flex items-center">
                <Award className="text-primary mr-2" size={20} />
                <div>
                  <p className="text-xs text-muted-foreground">Работаю в клинике, соответствующей<br/>международным стандартам безопасности и качества</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">Денис Маркович</h3>
            <h4 className="text-lg text-primary mb-6">Специализируюсь на реконструктивной хирургии лица и груди</h4>

            <p className="text-muted-foreground mb-6">
            Использую современные методы и международные техники для получения натуральных результатов с минимальным вмешательством. Обеспечиваю индивидуальный подход к каждому пациенту, гарантируя безопасность, качество и долговременный эффект.
            </p>
            <div className="text-muted-foreground mb-6">
              <p>🔹 Современные методики и международные подходы</p>
              <p>🔹 Индивидуальное планирование каждой операции</p>
              <p>🔹 Натуральные результаты без чрезмерного вмешательства</p>
              <p>🔹 Безопасность, эстетика, долговременный эффект</p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <StatCard icon={Syringe} value="500+" label="Успешных процедур" />
              <StatCard icon={Clock} value="95% пациентов" label="Восстанавливаются за 10 дней" />
              <StatCard icon={Star} value="4.9/5" label="Оценка пациентов" />
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#services"
                className="inline-flex items-center text-primary font-medium hover:underline"
                aria-label="Просмотреть доступные услуги"
                onClick={handleScrollToServices}
              >
                Просмотреть услуги <ArrowRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionRu;
