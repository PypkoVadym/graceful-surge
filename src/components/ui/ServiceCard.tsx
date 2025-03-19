
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className,
  href,
}: ServiceCardProps) => {
  return (
    <div className={cn(
      'bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-sm border border-gray-100 card-hover',
      className
    )}>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {href && (
        <a 
          href={href} 
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default ServiceCard;
