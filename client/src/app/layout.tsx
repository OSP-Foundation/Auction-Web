import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Footer, NavBar } from '@/components'
import './globals.scss'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: "400", display: "swap", adjustFontFallback: false })

export const metadata: Metadata = {
  title: 'Auction',
  description: 'Bid your dream product',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
