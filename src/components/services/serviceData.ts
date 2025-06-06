
export interface ServiceData {
  title: string;
  description: string;
  prices: { procedure: string; price: string }[];
  images: string[];
  redirectUrls?: string[]; // Added optional redirect URLs
}

export const breastServices: ServiceData = {
  title: "Процедури для грудей (мамопластика)",
  description: "Сучасні методи корекції форми грудей, включно з пластичним ліфтингом, підняттям та омолодженням грудей, дозволяють досягти бажаного результату завдяки індивідуально підібраним підходам.",
  prices: [
    {procedure: "Збільшення грудей", price: ""},
    {procedure: "Підтяжка грудей (мастопексія)", price: ""},
    {procedure: "Зменшення грудей", price: ""},
    {procedure: "Ліпофілінг грудей", price: ""},
  ],
  images: [
    "/images/mamo1.jpg",
    "/images/mamo2.jpg",
    "/images/.jpg"
  ],
  redirectUrls: [
    "https://www.instagram.com/markovych_work/",
    "https://www.instagram.com/markovych_work/", 
    "https://www.instagram.com/markovych_work/"
  ]
};

export const facialServices: ServiceData = {
  title: "Процедури для обличчя",
  description: "Інноваційні методики спрямовані на омолодження погляду, ефективне усунення «мішків» під очима, а також включають пластику носа — сучасну операцію на носі, що допомагає гармонізувати риси обличчя та підкреслити природну красу.",
  prices: [
    {procedure: "Ринопластика (естетична і функціональна)", price: ""},
    {procedure: "Пластика повік (блефаропластика)", price: ""},
    {procedure: "Підтяжка обличчя та шиї", price: ""},
    {procedure: "Відновлення форми обличчя (ліпофілінг)", price: ""},
    {procedure: "Шліфування лазерем (1 зона)", price: ""}
  ],
  images: [
    "https://i.imgur.com/bBbQdor.jpeg",
    "https://i.imgur.com/Uxnfrto.jpeg",
    "https://i.imgur.com/RwsO9XW.jpeg"
  ],
  redirectUrls: [
    "https://www.instagram.com/markovych_work/",
    "https://www.instagram.com/markovych_work/",
    "https://www.instagram.com/markovych_work/"
  ]
};

export const bodyServices: ServiceData = {
  title: "Контурна пластика тіла",
  description: "Корекція контурів тіла, пересадка жиру, пластика живота чи видалення зайвої шкіри — у нас є рішення, що відповідає саме вашому баченню ідеального тіла.",
  prices: [
    {procedure: "Ліпосакція та скульптурування тіла (1 зона)", price: ""},
    {procedure: "Абдомінопластика", price: ""},
    {procedure: "RF-lifting (створення нового колагену)", price: ""},
    {procedure: "Боділіфтинг", price: ""}
  ],
  images: [
   // "https://i.imgur.com/AEqzc88.jpeg",
    "/images/lipo2.jpg"
    //"/images/lipo1.jpg"
  ],
  redirectUrls: [
    "https://www.instagram.com/markovych_work/"
  ]
};
