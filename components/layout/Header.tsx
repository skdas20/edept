'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';
import type { SiteConfig } from '@/types';

export interface HeaderProps {
  config: SiteConfig;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ config, transparent: propTransparent }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const transparent = propTransparent !== undefined ? propTransparent : isHomePage;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBackground = !transparent || isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        showBackground
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            {config.logo && (
              <div className="relative w-12 h-12">
                <Image
                  src={config.logo}
                  alt={`${config.department} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span
                className={cn(
                  'font-bold text-lg leading-tight transition-colors',
                  showBackground ? 'text-primary' : 'text-white'
                )}
              >
                {config.department}
              </span>
              <span
                className={cn(
                  'text-sm leading-tight transition-colors',
                  showBackground ? 'text-muted-text' : 'text-white/90'
                )}
              >
                {config.institution}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation items={config.navigation} transparent={!showBackground} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              showBackground
                ? 'text-primary hover:bg-primary-50'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Navigation items={config.navigation} mobile onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
