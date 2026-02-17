import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      onClick,
      disabled = false,
      loading = false,
      children,
      className,
      type = 'button',
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60';

    const variantStyles = {
      primary: 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg',
      secondary: 'bg-gradient-to-r from-accent to-accent-600 text-primary-dark hover:-translate-y-0.5 hover:shadow-md',
      outline: 'border border-primary/30 bg-white text-primary hover:bg-primary-50',
      ghost: 'text-primary hover:bg-primary-50/70',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm md:text-base',
      lg: 'px-6 py-3 text-base md:text-lg',
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </>
    );

    if (href && !disabled) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={combinedClassName}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
