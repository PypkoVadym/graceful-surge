
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

export const facialServices: ServiceData = {
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

export const bodyServices: ServiceData = {
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
