
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ImageSlider from '../ui/ImageSlider';
import { ArrowRight, Check } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';
import { Separator } from '../ui/separator';

const ServicesSectionRu = () => {
  // Sample service data
  const breastServices = {
    title: "Процедуры для груди (маммопластика)",
    description: "Современные методы коррекции формы груди, включая пластический лифтинг, поднятие и омоложение груди, позволяют достичь желаемого результата благодаря индивидуально подобранным подходам.",
    prices: [
      {procedure: "Увеличение груди", price: "от 120000 грн"},
      {procedure: "Подтяжка груди (мастопексия)", price: "от 90000 грн"},
      {procedure: "Уменьшение груди", price: "от 100000 грн"},
      {procedure: "Реконструкция груди", price: "от 150000 грн"}
    ],
    images: [
      "/images/mamo1.jpg",
      "/images/mamo2.jpg",
      "/images/mamo3.jpg"
    ]
  };
  
  const facialServices = {
    title: "Процедуры для лица",
    description: "Инновационные методики направлены на омоложение взгляда, эффективное устранение «мешков» под глазами, а также включают пластику носа — современную операцию на носу, которая помогает гармонизировать черты лица и подчеркнуть естественную красоту.",
    prices: [
      {procedure: "Ринопластика (эстетическая и функциональная)", price: "от 70000 грн"},
      {procedure: "Пластика век (блефаропластика)", price: "от 40000 грн"},
      {procedure: "Подтяжка лица и шеи", price: "от 110000 грн"},
      {procedure: "Восстановление формы лица (липофилинг)", price: "от 60000 грн"},
      {procedure: "Безоперационное омоложение лица", price: "от 15000 грн"}
    ],
    images: [
      "https://i.imgur.com/bBbQdor.jpeg",
      "https://i.imgur.com/Uxnfrto.jpeg",
      "https://i.imgur.com/RwsO9XW.jpeg"
    ]
  };

  const bodyServices = {
    title: "Контурная пластика тела",
    description: "Коррекция контуров тела, пересадка жира, пластика живота или удаление лишней кожи — у нас есть решение, соответствующее именно вашему видению идеального тела.",
    prices: [
      {procedure: "Липосакция и скульптурирование тела", price: "от 85000 грн"},
      {procedure: "Абдоминопластика", price: "от 95000 грн"},
      {procedure: "RF-лифтинг (создание нового коллагена)", price: "от 30000 грн"},
      {procedure: "Восстановление живота после родов", price: "от 110000 грн"},
      {procedure: "Контурная пластика после похудения", price: "от 80000 грн"}
    ],
    images: [
      "https://i.imgur.com/AEqzc88.jpeg",
      "/images/lipo1.jpg"
    ]
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          pretitle="Услуги"
          title="Комплексные эстетические процедуры"
          description="Предлагаю широкий спектр хирургических и нехирургических процедур, направленных на подчеркивание вашей естественной красоты и уверенности."
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
            
            <div className="mb-6 overflow-hidden rounded-lg border bg-white shadow-sm">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-semibold text-foreground w-2/3">Процедура</TableHead>
                    <TableHead className="text-right font-semibold text-foreground">Стоимость</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facialServices.prices.map((price, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Check size={16} className="text-primary shrink-0" />
                        {price.procedure}
                      </TableCell>
                      <TableCell className="text-right font-semibold">{price.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записаться на бесплатную консультацию <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={facialServices.images} 
              alt="коррекция верхних век, коррекция нижних век, хирургия век, выравнивание носовой перегородки"
              aspectRatio="wide"
            />
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Service 2: Body Contouring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in">
          <div className="order-2 lg:order-1 animate-scale-in">
            <ImageSlider 
              images={bodyServices.images} 
              alt="коррекция формы груди, импланты груди, пластическая хирургия молочной железы"
              aspectRatio="wide"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              02
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{bodyServices.title}</h3>
            <p className="text-muted-foreground mb-6">{bodyServices.description}</p>
            
            <div className="mb-6 overflow-hidden rounded-lg border bg-white shadow-sm">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-semibold text-foreground w-2/3">Процедура</TableHead>
                    <TableHead className="text-right font-semibold text-foreground">Стоимость</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bodyServices.prices.map((price, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Check size={16} className="text-primary shrink-0" />
                        {price.procedure}
                      </TableCell>
                      <TableCell className="text-right font-semibold">{price.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записаться на бесплатную консультацию <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Service 3: Breast Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full">
              03
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{breastServices.title}</h3>
            <p className="text-muted-foreground mb-6">{breastServices.description}</p>
            
            <div className="mb-6 overflow-hidden rounded-lg border bg-white shadow-sm">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-semibold text-foreground w-2/3">Процедура</TableHead>
                    <TableHead className="text-right font-semibold text-foreground">Стоимость</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {breastServices.prices.map((price, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Check size={16} className="text-primary shrink-0" />
                        {price.procedure}
                      </TableCell>
                      <TableCell className="text-right font-semibold">{price.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Записаться на бесплатную консультацию <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={breastServices.images} 
              alt="увеличение груди, подтяжка груди, уменьшение груди"
              aspectRatio="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionRu;
