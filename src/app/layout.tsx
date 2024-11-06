import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import CookieConsent from '@/components/CookieConsent';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

import { bungee, doppio } from '@/app/fonts';
import { siteConfig } from '@/constant/config';
import CookieConsentProvider from '@/contexts/CookieConsentContext';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '@aj_lodewijks',
  },
  authors: [
    {
      name: 'Joris Lodewijks',
      url: 'https://jorislodewijks.nl',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieConsentProvider>
      <html
        className={`${bungee.variable} ${doppio.variable} font-primary text-white`}
      >
        <body>
          <NavBar />
          <main className='relative flex min-h-screen flex-col items-center text-center'>
            {children}
          </main>

          <CookieConsent />
          <Analytics />

          <Footer />
        </body>
      </html>
    </CookieConsentProvider>
  );
}
