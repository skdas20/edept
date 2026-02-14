import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.department} - ${siteConfig.institution}`,
    template: `%s | ${siteConfig.department}`,
  },
  description: `Official website of the ${siteConfig.department} at ${siteConfig.institution}. Explore our programs, faculty, research, and student achievements.`,
  keywords: [
    "Electronics and Communication Engineering",
    "EEE Department",
    "IEM Kolkata",
    "Engineering Education",
    "ECE",
  ],
  authors: [{ name: siteConfig.institution }],
  creator: siteConfig.institution,
  publisher: siteConfig.institution,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.siteName,
    title: `${siteConfig.department} - ${siteConfig.institution}`,
    description: `Official website of the ${siteConfig.department} at ${siteConfig.institution}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.department} - ${siteConfig.institution}`,
    description: `Official website of the ${siteConfig.department} at ${siteConfig.institution}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B3A78] focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header config={siteConfig} />
        
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        
        <Footer config={siteConfig} />
      </body>
    </html>
  );
}
