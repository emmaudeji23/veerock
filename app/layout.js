import './globals.css'
import { Poppins } from 'next/font/google'

import { description } from '@/lib/description'
import Layout from '@/components/Layout/Layout'

// const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'Veerock Construction Company',
  description: description,
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
