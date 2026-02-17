import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StartupLoader from "@/components/layout/StartupLoader";
import { siteConfig } from "@/lib/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ece.iem.edu.in"),
  title: {
    default: `${siteConfig.department} - ${siteConfig.institution}`,
    template: `%s | ${siteConfig.department}`,
  },
  description: `Official website of the ${siteConfig.department} at ${siteConfig.institution}. Explore our programs, faculty, research, and student achievements.`,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="site-shell antialiased font-sans bg-background text-text min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header config={siteConfig} />

        <main id="main-content" className="relative flex-1 pt-24">
          {children}
        </main>

        <Footer config={siteConfig} />
        <StartupLoader minDuration={2700} />
      </body>
    </html>
  );
}
