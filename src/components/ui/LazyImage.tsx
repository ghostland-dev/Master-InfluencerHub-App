import React from 'react';
import { useImageLoad } from '../../hooks/useImageLoad';
import { cn } from '../../lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

export default function LazyImage({ src, alt, className, fallback, ...props }: LazyImageProps) {
  const { loaded, error } = useImageLoad(src);

  if (error || !loaded) {
    return fallback || null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('transition-opacity duration-300', className)}
      loading="lazy"
      {...props}
    />
  );
}