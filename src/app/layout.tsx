import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Absolute base for OG/Twitter images. Resolves to the Vercel production domain
  // automatically (no custom domain needed); falls back to the canonical prod URL
  // so a production build never ships localhost OG image URLs.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://ansh-web.vercel.app'
  ),
  title: 'Ansh — Smart Finance Tracker',
  description: 'Track expenses, manage income, split group bills, and understand where your money goes. Free forever on Android — get Ansh on Google Play.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ansh — Smart Finance Tracker',
    description: 'Track expenses, manage income, split group bills. Free forever on Android.',
    type: 'website',
    images: [{ url: '/og-logo.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: 'Ansh — Smart Finance Tracker',
    description: 'Track expenses, manage income, split group bills. Free forever on Android.',
    images: ['/og-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
