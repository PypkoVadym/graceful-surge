
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Separator } from '../ui/separator';
import FacialServiceRu from '../services/FacialServiceRu';
import BodyServiceRu from '../services/BodyServiceRu';
import BreastServiceRu from '../services/BreastServiceRu';
import { facialServices, bodyServices, breastServices } from '../services/serviceDataRu';

const ServicesSectionRu = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Услуги"
          title="Комплексные эстетические процедуры"
          description="Предлагаю широкий спектр хирургических и нехирургических процедур, направленных на подчеркивание вашей естественной красоты и уверенности."
          centered={true}
        />
        
        {/* Service 1: Breast Procedures */}
        <BreastServiceRu 
          title={breastServices.title}
          description={breastServices.description}
          prices={breastServices.prices}
          images={breastServices.images}
        />
        
        <Separator className="my-8" />
        
        {/* Service 2: Facial Procedures */}
        <FacialServiceRu 
          title={facialServices.title}
          description={facialServices.description}
          prices={facialServices.prices}
          images={facialServices.images}
        />
        
        <Separator className="my-8" />
        
        {/* Service 3: Body Contouring */}
        <BodyServiceRu 
          title={bodyServices.title}
          description={bodyServices.description}
          prices={bodyServices.prices}
          images={bodyServices.images}
        />
      </div>
    </section>
  );
};

export default ServicesSectionRu;
