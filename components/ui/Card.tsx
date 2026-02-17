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
    const baseStyles = 'group overflow-hidden rounded-card border transition-all duration-300';

    const variantStyles = {
      default: 'border-border bg-white/95 shadow-sm',
      elevated: 'border-border bg-white/95 shadow-md hover:shadow-lg',
      outlined: 'border-primary/30 bg-white',
    };

    const hoverStyles = href ? 'cursor-pointer hover:-translate-y-1 hover:border-primary/25' : '';

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      hoverStyles,
      className
    );

    const cardContent = (
      <div ref={ref} className={combinedClassName}>
        {image && (
          <div className="image-frame relative h-52 w-full overflow-hidden rounded-none border-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          {title && (
            <h3 className="mb-2 text-xl font-semibold text-text">{title}</h3>
          )}
          {description && (
            <p className="mb-4 text-muted-text">{description}</p>
          )}
          {children}
        </div>
        {footer && (
          <div className="border-t border-border bg-surface-2 px-6 py-4">
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
