
import React from 'react';
import ImageSlider from '../ui/ImageSlider';
import { ServicePrice } from './ServiceBulletListRu';
import ServiceBulletListRu from './ServiceBulletListRu';
import ConsultationButtonRu from './ConsultationButtonRu';

interface BodyServiceProps {
  title: string;
  description: string;
  prices: ServicePrice[];
  images: string[];
}

const BodyServiceRu = ({ title, description, prices, images }: BodyServiceProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in">
      <div>
        <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
          03
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ServiceBulletListRu prices={prices} />
        
        <ConsultationButtonRu />
      </div>
      
      <div className="animate-scale-in">
        <ImageSlider 
          images={images} 
          alt="коррекция формы тела, липосакция, моделирование тела"
          aspectRatio="wide"
        />
      </div>
    </div>
  );
};

export default BodyServiceRu;
