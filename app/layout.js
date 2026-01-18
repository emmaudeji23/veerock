import './globals.css'
import { Poppins } from 'next/font/google'

import { description } from '@/lib/description'
import Layout from '@/components/Layout/Layout'
import { url } from '../data/url'
import ReactWhatsapp from '@/components/ReactWhatsapp'

// const poppins = Poppins({ subsets: ['latin'] })


export const metadata = {
  metadataBase: 'https://veerockconcept.com', // e.g. https://veerockconcept.com

  title: {
    default: 'Veerock Construction Company',
    template: '%s | Veerock Construction Company',
  },

  description,

  keywords: [
    'Construction Company',
    'Building Construction',
    'Real Estate Development',
    'Property Development',
    'Estate Development',
    'Residential Construction',
    'Commercial Construction',
    'Waste Management',
    'Renewable Energy',
    'Housing Projects',
    'Mining',
    'Manufacturing',
    'Nigeria Construction Company',
  ],

  authors: [{ name: 'Veerock Construction Company' }],
  creator: 'Veerock Construction Company',
  publisher: 'Veerock Construction Company',

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: url.website,
    siteName: 'Veerock Construction Company',
    title: 'Veerock Construction Company',
    description,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Veerock Construction Company – Building the Future',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Veerock Construction Company',
    description,
    images: ['/opengraph-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
