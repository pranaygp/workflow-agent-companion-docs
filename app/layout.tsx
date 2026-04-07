import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Geist } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Ship 2025 Agents Workshop - Companion Site',
    template: '%s | Ship 2025 Agents Workshop'
  },
  description: 'Learn to build an AI coding agent with AI SDK 5, Vercel AI Gateway, and Vercel Sandbox. Step-by-step workshop documentation for creating agents that can read and modify GitHub repositories.',
  keywords: ['AI', 'agents', 'AI SDK', 'Vercel', 'workshop', 'coding agent', 'GitHub', 'sandbox'],
  metadataBase: new URL('https://ship-25-agents-workshop.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ship-25-agents-workshop.vercel.app',
    title: 'Ship 2025 Agents Workshop - Companion Site',
    description: 'Learn to build an AI coding agent with AI SDK 5, Vercel AI Gateway, and Vercel Sandbox. Step-by-step workshop documentation for creating agents that can read and modify GitHub repositories.',
    siteName: 'Ship 2025 Agents Workshop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ship 2025 Agents Workshop - Companion Site',
    description: 'Learn to build an AI coding agent with AI SDK 5, Vercel AI Gateway, and Vercel Sandbox.',
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
