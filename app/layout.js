import { Inter } from 'next/font/google'
import './globals.css'

import { Nav } from '@/src/components/Nav'
import ContextProvider from '@/src/context/store-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Find the ideal products',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} rootLayout`}>
        <ContextProvider>
          <Nav />
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
