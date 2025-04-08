
import React from 'react';
import SectionHeading from './ui/SectionHeading';
import ImageSlider from './ui/ImageSlider';
import { ArrowRight, Check } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';
import { Separator } from './ui/separator';

const ServicesSection = () => {
  // Sample service data
  const breastServices = {
    title: "Процедури для грудей (мамопластика)",
    description: "Сучасні методи корекції форми грудей, включно з пластичним ліфтингом, підняттям та омолодженням грудей, дозволяють досягти бажаного результату завдяки індивідуально підібраним підходам.",
    prices: [
      {procedure: "Збільшення грудей", price: "від 120000 грн"},
      {procedure: "Підтяжка грудей (мастопексія)", price: "від 90000 грн"},
      {procedure: "Зменшення грудей", price: "від 100000 грн"},
      {procedure: "Реконструкція грудей", price: "від 150000 грн"}
    ],
    images: [
      "/images/mamo1.jpg",
      "/images/mamo2.jpg",
      "/images/mamo3.jpg"
    ]
  };
  
  const facialServices = {
    title: "Процедури для обличчя",
    description: "Інноваційні методики спрямовані на омолодження погляду, ефективне усунення «мішків» під очима, а також включають пластику носа — сучасну операцію на носі, що допомагає гармонізувати риси обличчя та підкреслити природну красу.",
    prices: [
      {procedure: "Ринопластика (естетична і функціональна)", price: "від 70000 грн"},
      {procedure: "Пластика повік (блефаропластика)", price: "від 40000 грн"},
      {procedure: "Підтяжка обличчя та шиї", price: "від 110000 грн"},
      {procedure: "Відновлення форми обличчя (ліпофілінг)", price: "від 60000 грн"},
      {procedure: "Безопераційне омолодження обличчя", price: "від 15000 грн"}
    ],
    images: [
      "https://i.imgur.com/bBbQdor.jpeg",
      "https://i.imgur.com/Uxnfrto.jpeg",
      "https://i.imgur.com/RwsO9XW.jpeg"
    ]
  };

  const bodyServices = {
    title: "Контурна пластика тіла",
    description: "Корекція контурів тіла, пересадка жиру, пластика живота чи видалення зайвої шкіри — у нас є рішення, що відповідає саме вашому баченню ідеального тіла.",
    prices: [
      {procedure: "Ліпосакція та скульптурування тіла", price: "від 85000 грн"},
      {procedure: "Абдомінопластика", price: "від 95000 грн"},
      {procedure: "RF-lifting (створення нового колагену)", price: "від 30000 грн"},
      {procedure: "Відновлення живота після пологів", price: "від 110000 грн"},
      {procedure: "Контурна пластика після схуднення", price: "від 80000 грн"}
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
          pretitle="Послуги"
          title="Комплексні естетичні процедури"
          description="Пропоную широкий спектр хірургічних і нехірургічних процедур, спрямованих на підкреслення вашої природної краси та впевненості."
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
                    <TableHead className="text-right font-semibold text-foreground">Вартість</TableHead>
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
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={facialServices.images} 
              alt="корекція верхніх повік, корекція нижніх повік, хірургія повік, вирівнювання носової перетинки"
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
              alt="корекція форми грудей, імпланти грудей, пластична хірургія молочної залози"
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
                    <TableHead className="text-right font-semibold text-foreground">Вартість</TableHead>
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
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
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
                    <TableHead className="text-right font-semibold text-foreground">Вартість</TableHead>
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
              Записатися на безкоштовну консультацію <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          
          <div className="animate-scale-in">
            <ImageSlider 
              images={breastServices.images} 
              alt="збільшення грудей, підтяжка грудей, зменшення грудей"
              aspectRatio="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
