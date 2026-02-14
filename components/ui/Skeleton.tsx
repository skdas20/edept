import React from 'react';
import { cn } from '../../lib/utils';

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className,
}) => {
  const baseStyles = 'animate-shimmer bg-gradient-to-r from-[#F1F5F9] via-[#E2E8F0] to-[#F1F5F9] bg-[length:200%_100%]';

  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'text':
        return { width: '100%', height: '1rem' };
      case 'circular':
        return { width: '3rem', height: '3rem' };
      case 'rectangular':
        return { width: '100%', height: '12rem' };
      default:
        return { width: '100%', height: '1rem' };
    }
  };

  const defaults = getDefaultDimensions();
  const finalWidth = width ?? defaults.width;
  const finalHeight = height ?? defaults.height;

  const style: React.CSSProperties = {
    width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
    height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight,
  };

  const skeletonElement = (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      style={style}
      aria-busy="true"
      aria-live="polite"
    />
  );

  if (count === 1) {
    return skeletonElement;
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{skeletonElement}</div>
      ))}
    </div>
  );
};

export default Skeleton;
