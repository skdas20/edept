import React from 'react';
import Link from 'next/link';
import type { SiteConfig, NavigationItem } from '@/types';

export interface FooterProps {
  config: SiteConfig;
  quickLinks?: NavigationItem[];
}

const Footer: React.FC<FooterProps> = ({ config, quickLinks = [] }) => {
  const currentYear = new Date().getFullYear();
  const footerLinks =
    quickLinks.length > 0
      ? quickLinks
      : config.navigation.filter((item) => item.href !== '#').slice(0, 8);

  return (
    <footer className="relative mt-16 overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(200,154,43,0.26),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.11),transparent_26%)]" />
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-[0.05]" />

      <div className="container relative mx-auto px-4 py-14">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-semibold">{config.department}</h3>
            <p className="mt-3 text-sm text-white/80">{config.institution}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Building engineers with strong fundamentals, practical depth, and leadership in emerging communication technologies.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{config.contact.address}</span>
              </div>
              {config.contact.phone.map((phone, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 shrink-0 text-accent-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-accent-light">
                    {phone}
                  </a>
                </div>
              ))}
              {config.contact.email.map((email, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 shrink-0 text-accent-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href={`mailto:${email}`} className="hover:text-accent-light">
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Connect</h3>
            <p className="mt-4 text-sm text-white/75">
              Follow departmental updates, achievements, and announcements across social platforms.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {config.social.facebook && (
                <a
                  href={config.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:border-accent-light hover:bg-white/20"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:border-accent-light hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {config.social.twitter && (
                <a
                  href={config.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:border-accent-light hover:bg-white/20"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
              {config.social.youtube && (
                <a
                  href={config.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors hover:border-accent-light hover:bg-white/20"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/75">
              © {currentYear} {config.department}, {config.institution}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/75">
              <Link href="/privacy" className="hover:text-accent-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
