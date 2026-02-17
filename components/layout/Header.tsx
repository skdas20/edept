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

  const showSolid = !transparent || isScrolled || mobileMenuOpen;
  const departmentInitials = config.department
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1380px] px-3 pt-3 md:px-5">
        <div
          className={cn(
            'overflow-visible rounded-2xl border transition-all duration-300',
            showSolid
              ? 'border-border bg-white/95 shadow-[0_16px_42px_rgba(15,23,42,0.14)] backdrop-blur-xl'
              : 'border-white/25 bg-white/10 backdrop-blur-md'
          )}
        >
          <div className="flex h-[74px] items-center justify-between px-4 md:px-6">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <div
                className={cn(
                  "logo-shine relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br from-primary to-primary-600 shadow-md",
                  showSolid ? "border-primary/20" : "border-white/40"
                )}
              >
                {config.logo ? (
                  <Image
                    src={config.logo}
                    alt={`${config.department} Logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain p-1"
                  />
                ) : (
                  <span className="font-heading text-sm font-bold text-primary">
                    {departmentInitials}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <span
                  className={cn(
                    'block truncate font-heading text-base font-semibold leading-tight transition-colors md:text-lg',
                    showSolid ? 'text-primary' : 'text-white'
                  )}
                >
                  {config.department}
                </span>
                <span
                  className={cn(
                    'block truncate text-xs leading-tight transition-colors md:text-sm',
                    showSolid ? 'text-muted-text' : 'text-white/85'
                  )}
                >
                  {config.institution}
                </span>
              </div>
            </Link>

            <div className="hidden lg:block">
              <Navigation items={config.navigation} transparent={!showSolid} />
            </div>

            <button
              className={cn(
                'rounded-xl p-2.5 transition-colors lg:hidden',
                showSolid
                  ? 'text-primary hover:bg-primary-50'
                  : 'text-white hover:bg-white/15'
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
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
          {mobileMenuOpen && (
            <div className="border-t border-border/80 bg-white/95 px-4 py-4 lg:hidden">
              <Navigation
                items={config.navigation}
                mobile
                onItemClick={() => setMobileMenuOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close</span>
        </button>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-full mx-auto h-5 max-w-[1300px] bg-gradient-to-b from-black/10 to-transparent opacity-30 blur-lg" />
    </header>
  );
};

export default Header;
