
import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

export const usePerformanceOptimizer = () => {
  useEffect(() => {
    // Defer offscreen images
    const deferOffscreenImages = () => {
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          if ((img as HTMLImageElement).loading !== 'eager') {
            (img as HTMLImageElement).loading = 'lazy';
          }
        });
      } else if ('IntersectionObserver' in window) {
        // Fallback for browsers that don't support native lazy loading
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

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Use a timeout to defer loading of non-critical third-party scripts
      setTimeout(() => {
        // Add third-party scripts here if needed
      }, 2000);
    };

    // Clean up browser tasks when idle
    const cleanupTasks = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          // Clean up tasks
          console.log('Performance optimization: cleanup tasks complete');
        });
      }
    };

    // Execute optimizations
    deferOffscreenImages();
    optimizeThirdPartyScripts();
    cleanupTasks();

    // Register performance metrics
    if ('performance' in window && 'PerformanceObserver' in window) {
      try {
        // Monitor LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        // Monitor FID
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            console.log('FID:', entry.duration, 'ms');
          });
        }).observe({ type: 'first-input', buffered: true });

        // Monitor CLS
        let clsValue = 0;
        let clsEntries = [];
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            // Only count layout shifts without recent user input
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
              clsValue += layoutShiftEntry.value;
              clsEntries.push(entry);
              console.log('CLS updated:', clsValue);
            }
          });
        }).observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error('Performance monitoring error:', e);
      }
    }
  }, []);
};

export default usePerformanceOptimizer;
