
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  rating?: number;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  rating = 5,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      'bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-sm border border-gray-100 card-hover',
      className
    )}>
      {/* Rating Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              'mr-1',
              i < rating ? 'text-primary fill-primary' : 'text-muted'
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-foreground mb-4 italic relative">
        <span className="text-5xl text-primary/20 absolute -top-6 -left-2">"</span>
        <p className="relative z-10">{quote}</p>
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center mt-6">
        {image && (
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-medium text-foreground">{name}</h4>
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
