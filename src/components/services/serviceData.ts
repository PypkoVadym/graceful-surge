
export interface ServiceData {
  title: string;
  description: string;
  prices: { procedure: string; price: string }[];
  images: string[];
}

export const breastServices: ServiceData = {
  title: "Процедури для грудей (мамопластика)",
  description: "Сучасні методи корекції форми грудей, включно з пластичним ліфтингом, підняттям та омолодженням грудей, дозволяють досягти бажаного результату завдяки індивідуально підібраним підходам.",
  prices: [
    {procedure: "Збільшення грудей", price: "від 5000 €"},
    {procedure: "Підтяжка грудей (мастопексія)", price: "від 4500 €"},
    {procedure: "Зменшення грудей", price: "від 5500 €"},
    {procedure: "Ліпофілінг грудей", price: "від 2500 €"},
  ],
  images: [
    "/images/mamo1.jpg",
    "/images/mamo2.jpg",
    "/images/mamo3.jpg"
  ]
};

export const facialServices: ServiceData = {
  title: "Процедури для обличчя",
  description: "Інноваційні методики спрямовані на омолодження погляду, ефективне усунення «мішків» під очима, а також включають пластику носа — сучасну операцію на носі, що допомагає гармонізувати риси обличчя та підкреслити природну красу.",
  prices: [
    {procedure: "Ринопластика (естетична і функціональна)", price: "від 5000 €"},
    {procedure: "Пластика повік (блефаропластика)", price: "від 1300 €"},
    {procedure: "Підтяжка обличчя та шиї", price: "від 8000 €"},
    {procedure: "Відновлення форми обличчя (ліпофілінг)", price: "від 800 €"},
    {procedure: "Безопераційне омолодження обличчя (1 зона)", price: "від 200 €"}
  ],
  images: [
    "https://i.imgur.com/bBbQdor.jpeg",
    "https://i.imgur.com/Uxnfrto.jpeg",
    "https://i.imgur.com/RwsO9XW.jpeg"
  ]
};

export const bodyServices: ServiceData = {
  title: "Контурна пластика тіла",
  description: "Корекція контурів тіла, пересадка жиру, пластика живота чи видалення зайвої шкіри — у нас є рішення, що відповідає саме вашому баченню ідеального тіла.",
  prices: [
    {procedure: "Ліпосакція та скульптурування тіла (1 зона)", price: "від 800 €"},
    {procedure: "Абдомінопластика", price: "від 6000 €"},
    {procedure: "RF-lifting (створення нового колагену)", price: "від 3000 €"},
    {procedure: "Боділіфтинг", price: "від 11000 €"}
  ],
  images: [
    "https://i.imgur.com/AEqzc88.jpeg",
    "/images/lipo1.jpg"
  ]
};
