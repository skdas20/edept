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
      <nav className="flex flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
        {items.map((item) => (
          <div key={item.label}>
            {item.children && item.children.length > 0 ? (
              <div>
                <button
                  onClick={() => handleMobileToggle(item.label)}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors',
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary font-medium'
                      : 'text-text hover:bg-gray-50'
                  )}
                  aria-expanded={openMobileAccordion === item.label}
                >
                  <span>{item.label}</span>
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
                {openMobileAccordion === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className={cn(
                          'block px-4 py-2 text-sm rounded-lg transition-colors',
                          isActive(child.href)
                            ? 'bg-primary-50 text-primary font-medium'
                            : 'text-muted-text hover:bg-gray-50 hover:text-text'
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
                  'block px-4 py-3 rounded-lg transition-colors',
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary font-medium'
                    : 'text-text hover:bg-gray-50'
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
    <nav className="flex items-center space-x-1" role="navigation" aria-label="Main navigation">
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children && item.children.length > 0 ? (
            <>
              <button
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                  isActive(item.href)
                    ? transparent ? 'text-accent bg-white/10' : 'text-primary bg-primary-50'
                    : transparent ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-text hover:text-primary hover:bg-primary-50'
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
              </button>
              {openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className={cn(
                        'block px-4 py-2 text-sm transition-colors',
                        isActive(child.href)
                          ? 'bg-primary-50 text-primary font-medium'
                          : 'text-text hover:bg-gray-50 hover:text-primary'
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
                'block px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                'block px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                isActive(item.href)
                  ? transparent ? 'text-accent bg-white/10' : 'text-primary bg-primary-50'
                  : transparent ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-text hover:text-primary hover:bg-primary-50'
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
