import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number; // Desired width for optimization
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '', width, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Helper to optimize Unsplash URLs if applicable
  const getOptimizedSrc = (url: string, targetWidth?: number) => {
    if (url.includes('unsplash.com') && !url.includes('w=')) {
      const separator = url.includes('?') ? '&' : '?';
      // Default to w=1080, q=80 if not specified
      return `${url}${separator}w=${targetWidth || 800}&q=80&auto=format`;
    }
    return url;
  };

  const finalSrc = getOptimizedSrc(src, width);

  return (
    <div className={`relative overflow-hidden ${className.includes('absolute') ? '' : 'inline-block w-full h-full'}`}>
      {/* Placeholder / Blur effect could go here */}
      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;

