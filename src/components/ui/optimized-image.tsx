import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/utils/analytics';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  lazy?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  placeholder,
  sizes = '100vw',
  priority = false,
  quality = 75,
  blurDataURL,
  onLoad,
  onError,
  fallbackSrc,
  lazy = true,
  aspectRatio,
  objectFit = 'cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder || '');
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const analytics = useAnalytics();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView]);

  // Load the actual image when in view
  useEffect(() => {
    if (!isInView || isLoaded) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      onLoad?.();
      
      // Track image load performance
      analytics.track('image_loaded', {
        src,
        alt,
        loadTime: performance.now(),
        lazy,
        priority
      });
    };

    img.onerror = () => {
      setIsError(true);
      if (fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
      onError?.();
      
      analytics.track('image_error', {
        src,
        alt,
        fallbackUsed: !!fallbackSrc
      });
    };
  }, [isInView, src, alt, onLoad, onError, fallbackSrc, analytics, lazy, priority, isLoaded]);

  // Generate responsive sizes
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc || baseSrc === placeholder) return '';
    
    const widths = [640, 768, 1024, 1280, 1536];
    return widths
      .map(width => `${baseSrc}?w=${width}&q=${quality} ${width}w`)
      .join(', ');
  };

  const containerStyle = aspectRatio ? {
    aspectRatio,
    position: 'relative' as const,
    overflow: 'hidden' as const
  } : {};

  const imageStyle = aspectRatio ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit
  } : { objectFit };

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      style={containerStyle}
    >
      {/* Blur placeholder */}
      {!isLoaded && blurDataURL && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={blurDataURL}
            alt=""
            className="w-full h-full object-cover filter blur-sm scale-110"
            aria-hidden="true"
          />
        </motion.div>
      )}

      {/* Color placeholder */}
      {!isLoaded && !blurDataURL && placeholder && (
        <motion.div
          className="absolute inset-0 z-10 bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-gray-400 text-sm font-medium">
            {placeholder}
          </div>
        </motion.div>
      )}

      {/* Loading skeleton */}
      {!isLoaded && !placeholder && !blurDataURL && (
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      {/* Main image */}
      <motion.img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        sizes={sizes}
        srcSet={generateSrcSet(currentSrc)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? 'opacity-100' : 'opacity-0',
          aspectRatio ? 'absolute inset-0 w-full h-full' : 'w-full h-auto'
        )}
        style={imageStyle}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.1
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
        onError={() => {
          setIsError(true);
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
          onError?.();
        }}
      />

      {/* Error state */}
      {isError && !fallbackSrc && (
        <motion.div
          className="absolute inset-0 z-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm">Image failed to load</p>
          </div>
        </motion.div>
      )}

      {/* Performance indicator for development */}
      {process.env.NODE_ENV === 'development' && isLoaded && (
        <div className="absolute top-2 right-2 z-30 px-2 py-1 bg-black/70 text-white text-xs rounded">
          {priority ? 'Priority' : lazy ? 'Lazy' : 'Eager'}
        </div>
      )}
    </div>
  );
};

// CSS for shimmer animation (add to your global CSS)
const shimmerCSS = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

// Inject CSS if not already present
if (typeof document !== 'undefined' && !document.getElementById('optimized-image-styles')) {
  const style = document.createElement('style');
  style.id = 'optimized-image-styles';
  style.textContent = shimmerCSS;
  document.head.appendChild(style);
}