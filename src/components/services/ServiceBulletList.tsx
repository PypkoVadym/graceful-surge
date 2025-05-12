
import React from 'react';
import { Circle } from 'lucide-react';

export interface ServicePrice {
  procedure: string;
  price: string;
}

interface ServiceBulletListProps {
  prices: ServicePrice[];
}

const ServiceBulletList = ({ prices }: ServiceBulletListProps) => {
  return (
    <div className="mb-6">
      <ul className="space-y-3">
        {prices.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Circle className="h-5 w-5 text-primary fill-primary" />
            <span className="font-medium">
              {item.procedure}
              {item.price && <span className="font-semibold ml-1">({item.price})</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBulletList;
