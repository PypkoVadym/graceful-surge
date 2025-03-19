
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  pretitle,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      {pretitle && (
        <span className="inline-block py-1 px-3 mb-3 text-xs font-medium tracking-wider text-primary bg-accent rounded-full animate-fade-in">
          {pretitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-slide-in">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
