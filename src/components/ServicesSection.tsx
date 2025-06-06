
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { Separator } from './ui/separator';
import FacialService from './services/FacialService';
import BodyService from './services/BodyService';
import BreastService from './services/BreastService';
import { facialServices, bodyServices, breastServices } from './services/serviceData';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Послуги"
          title="Комплексні естетичні процедури"
          description="Пропоную широкий спектр хірургічних і нехірургічних процедур, спрямованих на підкреслення вашої природної краси та впевненості."
          centered={true}
        />
        
        {/* Service 1: Breast Procedures */}
        <BreastService 
          title={breastServices.title}
          description={breastServices.description}
          prices={breastServices.prices}
          images={breastServices.images}
          redirectUrls={breastServices.redirectUrls}
        />
        
        <Separator className="my-8" />
        
        {/* Service 2: Facial Procedures */}
        <FacialService 
          title={facialServices.title}
          description={facialServices.description}
          prices={facialServices.prices}
          images={facialServices.images}
          redirectUrls={facialServices.redirectUrls}
        />
        
        <Separator className="my-8" />
        
        {/* Service 3: Body Contouring */}
        <BodyService 
          title={bodyServices.title}
          description={bodyServices.description}
          prices={bodyServices.prices}
          images={bodyServices.images}
          redirectUrls={bodyServices.redirectUrls}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
