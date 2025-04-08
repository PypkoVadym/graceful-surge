
export interface ServiceData {
  title: string;
  description: string;
  prices: { procedure: string; price: string }[];
  images: string[];
}

export const breastServices: ServiceData = {
  title: "Процедуры для груди (маммопластика)",
  description: "Современные методы коррекции формы груди, включая пластический лифтинг, поднятие и омоложение груди, позволяют достичь желаемого результата благодаря индивидуально подобранным подходам.",
  prices: [
    {procedure: "Увеличение груди", price: "от 5000 €"},
    {procedure: "Подтяжка груди (мастопексия)", price: "от 4500 €"},
    {procedure: "Уменьшение груди", price: "от 5500 €"},
    {procedure: "Липофилинг груди", price: "от 2500 €"}
  ],
  images: [
    "/images/mamo1.jpg",
    "/images/mamo2.jpg",
    "/images/mamo3.jpg"
  ]
};

export const facialServices: ServiceData = {
  title: "Процедуры для лица",
  description: "Инновационные методики направлены на омоложение взгляда, эффективное устранение «мешков» под глазами, а также включают пластику носа — современную операцию на носу, которая помогает гармонизировать черты лица и подчеркнуть естественную красоту.",
  prices: [
    {procedure: "Ринопластика (эстетическая и функциональная)", price: "от 5000 €"},
    {procedure: "Пластика век (блефаропластика)", price: "от 1300 €"},
    {procedure: "Подтяжка лица и шеи", price: "от 8000 €"},
    {procedure: "Восстановление формы лица (липофилинг)", price: "от 800 €"},
    {procedure: "Шлифовка лица (1 зона)", price: "от 200 €"}
  ],
  images: [
    "https://i.imgur.com/bBbQdor.jpeg",
    "https://i.imgur.com/Uxnfrto.jpeg",
    "https://i.imgur.com/RwsO9XW.jpeg"
  ]
};

export const bodyServices: ServiceData = {
  title: "Контурная пластика тела",
  description: "Коррекция контуров тела, пересадка жира, пластика живота или удаление лишней кожи — у нас есть решение, соответствующее именно вашему видению идеального тела.",
  prices: [
    {procedure: "Липосакция и скульптурирование тела (1 зона)", price: "от 800 €"},
    {procedure: "Абдоминопластика", price: "от 6000 €"},
    {procedure: "RF-лифтинг (создание нового коллагена)", price: "от 3000 €"},
    {procedure: "Бодилифтинг", price: "от 11000 €"}
  ],
  images: [
    "https://i.imgur.com/AEqzc88.jpeg",
    "/images/lipo1.jpg"
  ]
};
