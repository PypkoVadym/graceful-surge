
export interface ServiceData {
  title: string;
  description: string;
  prices: { procedure: string; price: string }[];
  images: string[];
  redirectUrls?: string[]; // Added optional redirect URLs
}

export const breastServices: ServiceData = {
  title: "Процедуры для груди (маммопластика)",
  description: "Современные методы коррекции формы груди, включая пластический лифтинг, поднятие и омоложение груди, позволяют достичь желаемого результата благодаря индивидуально подобранным подходам.",
  prices: [
    {procedure: "Увеличение груди", price: ""},
    {procedure: "Подтяжка груди (мастопексия)", price: ""},
    {procedure: "Уменьшение груди", price: ""},
    {procedure: "Липофилинг груди", price: ""}
  ],
  images: [
    "/images/mamo1.jpg",
    "/images/mamo2.jpg",
    "/images/mamo3.jpg"
  ],
  redirectUrls: [
    "#contact",
    "#contact",
    "#contact"
  ]
};

export const facialServices: ServiceData = {
  title: "Процедуры для лица",
  description: "Инновационные методики направлены на омоложение взгляда, эффективное устранение «мешков» под глазами, а также включают пластику носа — современную операцию на носу, которая помогает гармонизировать черты лица и подчеркнуть естественную красоту.",
  prices: [
    {procedure: "Ринопластика (эстетическая и функциональная)", price: ""},
    {procedure: "Пластика век (блефаропластика)", price: ""},
    {procedure: "Подтяжка лица и шеи", price: ""},
    {procedure: "Восстановление формы лица (липофилинг)", price: ""},
    {procedure: "Шлифовка лазером (1 зона)", price: ""}
  ],
  images: [
    "https://i.imgur.com/bBbQdor.jpeg",
    "https://i.imgur.com/Uxnfrto.jpeg",
    "https://i.imgur.com/RwsO9XW.jpeg"
  ],
  redirectUrls: [
    "#contact",
    "#contact",
    "#contact"
  ]
};

export const bodyServices: ServiceData = {
  title: "Контурная пластика тела",
  description: "Коррекция контуров тела, пересадка жира, пластика живота или удаление лишней кожи — у нас есть решение, соответствующее именно вашему видению идеального тела.",
  prices: [
    {procedure: "Липосакция и скульптурирование тела (1 зона)", price: ""},
    {procedure: "Абдоминопластика", price: ""},
    {procedure: "RF-лифтинг (создание нового коллагена)", price: ""},
    {procedure: "Бодилифтинг", price: ""}
  ],
  images: [
     // "https://i.imgur.com/AEqzc88.jpeg",
     "/images/lipo2.jpg"
     //"/images/lipo1.jpg"
  ],
  redirectUrls: [
    "#contact"
  ]
};
