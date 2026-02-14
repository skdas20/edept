import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      image,
      imageAlt = '',
      title,
      description,
      footer,
      href,
      className,
      children,
    },
    ref
  ) => {
    const baseStyles = 'rounded-card overflow-hidden transition-all duration-200';

    const variantStyles = {
      default: 'bg-white border border-[#E2E8F0]',
      elevated: 'bg-white shadow-md hover:shadow-lg',
      outlined: 'bg-white border-2 border-primary',
    };

    const hoverStyles = href ? 'hover:scale-[1.02] cursor-pointer' : '';

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      hoverStyles,
      className
    );

    const cardContent = (
      <div ref={ref} className={combinedClassName}>
        {image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          {title && (
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-[#475569] mb-4">{description}</p>
          )}
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-[#F1F5F9] border-t border-[#E2E8F0]">
            {footer}
          </div>
        )}
      </div>
    );

    if (href) {
      return (
        <Link href={href} className="block">
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  }
);

Card.displayName = 'Card';

export default Card;
