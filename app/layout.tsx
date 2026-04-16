import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: ['AI', 'agents', 'AI SDK', 'Workflow SDK', 'durable agents', 'Vercel', 'workshop', 'sandbox', 'resumable streams'],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
