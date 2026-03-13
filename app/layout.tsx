import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '../components/JsonLd'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const BASE_URL = 'https://physio-raise.vercel.app'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Physio-Raise | Expert Physical Therapy & Sports Rehabilitation',
    template: '%s | Physio-Raise',
  },
  description:
    'Dr. Mostafa Ezzat offers expert physical therapy, sports rehabilitation, post-surgical recovery and nutrition counseling. Book your session today.',
  keywords: [
    'physical therapy',
    'physiotherapy',
    'sports rehabilitation',
    'post surgical recovery',
    'nutrition counseling',
    'Dr Mostafa Ezzat',
    'physio raise',
    'علاج طبيعي',
    'إعادة تأهيل',
  ],
  authors: [{ name: 'Dr. Mostafa Ezzat', url: `${BASE_URL}/about` }],
  creator: 'Physio-Raise',
  publisher: 'Physio-Raise',
  category: 'health',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    url: BASE_URL,
    siteName: 'Physio-Raise',
    title: 'Physio-Raise | Expert Physical Therapy & Sports Rehabilitation',
    description:
      'Recover faster with expert care from Dr. Mostafa Ezzat. Sports rehab, post-surgical recovery & nutrition.',
    images: [
      {
        url: '/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Physio-Raise Clinic',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physio-Raise | Expert Physical Therapy',
    description: 'Sports rehab and recovery with Dr. Mostafa Ezzat.',
    images: ['/hero-background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'wJD4AVtdYUOeF0IAiMO3PgM5onNk8ZDJRcIdAW2zG6I',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}