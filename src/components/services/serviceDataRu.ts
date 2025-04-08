
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

export const facialServices: ServiceData = {
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

export const bodyServices: ServiceData = {
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
