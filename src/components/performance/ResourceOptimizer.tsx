
import React, { useEffect } from 'react';

interface ResourceOptimizerProps {
  children: React.ReactNode;
}

const ResourceOptimizer = ({ children }: ResourceOptimizerProps) => {
  // Load non-critical resources after the page has rendered
  useEffect(() => {
    // Function to load CSS asynchronously
    const loadCSSAsync = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.media = 'print';
      document.head.appendChild(link);
      
      // Use requestIdleCallback to change the media when browser is idle
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          link.media = 'all';
        });
      } else {
        setTimeout(() => {
          link.media = 'all';
        }, 0);
      }
    };

    // Load external scripts asynchronously
    const loadScriptAsync = (url: string) => {
      const script = document.createElement('script');
      script.src = url;
      script.defer = true;
      document.body.appendChild(script);
    };

    // Load Google Fonts optimized way
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontStaticLink = document.createElement('link');
      fontStaticLink.rel = 'preconnect';
      fontStaticLink.href = 'https://fonts.gstatic.com';
      fontStaticLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontStaticLink);
    }

    // Add preload for critical images
    const preloadCriticalImages = () => {
      const criticalImages = [
        'https://i.imgur.com/MPz1ULE.jpeg',  // Hero image
        'https://i.imgur.com/K1WJzoi.jpeg'   // About image
      ];
      
      criticalImages.forEach(imageSrc => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        document.head.appendChild(link);
      });
    };

    preloadCriticalImages();

    // Delay loading of non-critical assets
    setTimeout(() => {
      // Add any non-critical CSS or scripts here
    }, 1000);

    // Setup IntersectionObserver for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  return <>{children}</>;
};

export default ResourceOptimizer;
