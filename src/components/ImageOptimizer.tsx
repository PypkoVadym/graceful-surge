
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
  // Only convert external URLs (like imgur) to WebP if they're not already WebP
  // Local paths like /images/mamo 1.jpg should be left as is
  const optimizedSrc = src.includes('://') && !src.includes('.webp') 
    ? src.replace(/\.(jpe?g|png)($|\?)/, '.webp$2')
    : src;

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
