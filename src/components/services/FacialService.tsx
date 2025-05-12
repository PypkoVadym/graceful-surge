
import React from 'react';
import ImageSlider from '../ui/ImageSlider';
import { ServicePrice } from './ServiceBulletList';
import ServiceBulletList from './ServiceBulletList';
import ConsultationButton from './ConsultationButton';

interface FacialServiceProps {
  title: string;
  description: string;
  prices: ServicePrice[];
  images: string[];
}

const FacialService = ({ title, description, prices, images }: FacialServiceProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in">
      <div className="order-2 lg:order-1 animate-scale-in">
        <ImageSlider 
          images={images} 
          alt="корекція верхніх повік, корекція нижніх повік, хірургія повік, вирівнювання носової перетинки"
          aspectRatio="wide"
        />
      </div>
      
      <div className="order-1 lg:order-2">
        <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
          02
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ServiceBulletList prices={prices} />
        
        <ConsultationButton />
      </div>
    </div>
  );
};

export default FacialService;
