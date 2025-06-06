import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageOptimizer from '../ImageOptimizer';

interface ImageSliderProps {
  images: string[];
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
  autoplay?: boolean;
  interval?: number;
  width?: string;
  height?: string;
  alt?: string;
  onImageClick?: (imageIndex: number) => void;
}

const ImageSlider = ({
  images,
  className,
  aspectRatio = 'square',
  autoplay = true,
  interval = 5000,
  width,
  height,
  alt = 'Image slide',
  onImageClick,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
    
    if (index === currentIndex) {
      setIsLoaded(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
  };

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex);
    }
  };

  useEffect(() => {
    setIsLoaded(imagesLoaded[currentIndex]);
  }, [currentIndex, imagesLoaded]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (autoplay) {
      timer = setInterval(goToNextSlide, interval);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay, interval]);

  const aspectRatioClass = 
    aspectRatio === 'square' 
      ? 'aspect-square' 
      : aspectRatio === 'video' 
        ? 'aspect-video' 
        : aspectRatio === 'portrait'
          ? 'aspect-[9/16]'
          : 'aspect-[16/9]';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl group',
        !width && !height ? aspectRatioClass : '',
        onImageClick ? 'cursor-pointer' : '',
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: width || '',
        height: height || '',
      }}
      onClick={handleImageClick}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-500 ease-in-out',
            currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <div className={cn(
            'absolute inset-0 bg-primary/20 backdrop-blur-md',
            isLoaded && currentIndex === index ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-300'
          )} />
          <ImageOptimizer
            src={image}
            alt={`${alt} ${index + 1}`}
            className="w-full h-full object-contain transition-transform duration-500 ease-out"
            priority={index === 0}
            onLoad={() => handleImageLoad(index)}
            style={{ 
              transform: currentIndex === index ? 'scale(1)' : 'scale(1.1)',
            }}
          />
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          goToPrevSlide();
        }}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          goToNextSlide();
        }}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 text-primary p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentIndex === index ? 'bg-primary w-4' : 'bg-white/60'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
