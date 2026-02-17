'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavigationItem } from '@/types';

export interface NavigationProps {
  items: NavigationItem[];
  mobile?: boolean;
  onItemClick?: () => void;
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ items, mobile = false, onItemClick, transparent = false }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (!mobile && dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (!mobile) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
    }
  };

  const handleMobileToggle = (label: string) => {
    setOpenMobileAccordion(openMobileAccordion === label ? null : label);
  };

  const handleLinkClick = () => {
    if (onItemClick) {
      onItemClick();
    }
    setOpenDropdown(null);
    setOpenMobileAccordion(null);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1.5" role="navigation" aria-label="Mobile navigation">
        {items.map((item) => (
          <div key={item.label}>
            {item.children && item.children.length > 0 ? (
              <div>
                <div
                  className={cn(
                    'flex items-stretch overflow-hidden rounded-xl border transition-colors',
                    isActive(item.href)
                      ? 'border-primary/20 bg-primary-50/80'
                      : 'border-border/70 bg-white hover:border-primary/20 hover:bg-primary-50/50'
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'flex-1 px-4 py-3.5 text-left text-sm transition-colors',
                      isActive(item.href)
                        ? 'font-semibold text-primary'
                        : 'text-text'
                    )}
                  >
                    {item.label}
                  </Link>
                  <button
                    onClick={() => handleMobileToggle(item.label)}
                    className={cn(
                      'border-l px-3 py-3 transition-colors',
                      isActive(item.href)
                        ? 'border-primary/20 text-primary'
                        : 'border-border text-text'
                    )}
                    aria-expanded={openMobileAccordion === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <svg
                      className={cn(
                        'w-5 h-5 transition-transform',
                        openMobileAccordion === item.label && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                {openMobileAccordion === item.label && (
                  <div className="ml-3 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className={cn(
                          'block rounded-lg px-3 py-2 text-sm transition-colors',
                          isActive(child.href)
                            ? 'bg-primary-50 text-primary'
                            : 'text-muted-text hover:bg-primary-50/60 hover:text-text'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  'block rounded-xl border px-4 py-3 text-sm transition-colors',
                  isActive(item.href)
                    ? 'border-primary/20 bg-primary-50 text-primary'
                    : 'border-border/70 bg-white text-text hover:border-primary/20 hover:bg-primary-50/50'
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  // Desktop Navigation
  return (
    <nav className="flex items-center gap-1" role="navigation" aria-label="Main navigation">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children && item.children.length > 0 ? (
            <>
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                  isActive(item.href)
                    ? transparent
                      ? 'bg-white/14 text-accent-light'
                      : 'bg-primary-50 text-primary'
                    : transparent
                      ? 'text-white/90 hover:bg-white/12 hover:text-white'
                      : 'text-text hover:bg-primary-50/70 hover:text-primary'
                )}
                aria-expanded={openDropdown === item.label}
                aria-haspopup="true"
              >
                <span className="flex items-center space-x-1">
                  <span>{item.label}</span>
                  <svg
                    className={cn(
                      'w-4 h-4 transition-transform',
                      openDropdown === item.label && 'rotate-180'
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Link>
              {openDropdown === item.label && (
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-white shadow-lg"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className={cn(
                        'block px-4 py-2.5 text-sm transition-colors',
                        isActive(child.href)
                          ? 'bg-primary-50 text-primary font-medium'
                          : 'text-text hover:bg-primary-50/70 hover:text-primary'
                      )}
                      role="menuitem"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                'block rounded-xl px-3.5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
                isActive(item.href)
                  ? transparent
                    ? 'bg-white/14 text-accent-light'
                    : 'bg-primary-50 text-primary'
                  : transparent
                    ? 'text-white/90 hover:bg-white/12 hover:text-white'
                    : 'text-text hover:bg-primary-50/70 hover:text-primary'
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
