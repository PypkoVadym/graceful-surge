
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  style,
}: ImageOptimizerProps) => {
  // Convert image URLs to WebP if they're not already
  const optimizedSrc = src.includes('.webp') 
    ? src 
    : src.replace(/\.(jpe?g|png)($|\?)/, '.webp$2');

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn('', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={onLoad}
      style={style}
    />
  );
};

export default ImageOptimizer;
