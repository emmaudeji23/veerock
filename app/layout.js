import './globals.css'
import { Poppins } from 'next/font/google'

import { description } from '@/lib/description'
import Layout from '@/components/Layout/Layout'
import { url } from '../data/url'
import ReactWhatsapp from '@/components/ReactWhatsapp'

// const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'Veerock Construction Company',
  description: description,
  // ogImage: `${url?.vercel}/veerock/worker2.jpeg`,
  keyword:`Real Estate, Construction, Building, Waste Management, Rent, Sales, Renewable Energy, Housing, Estate Developement, Property search, Energy, Mining, Manufacturing`
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
