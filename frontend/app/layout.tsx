import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { NavigationBar } from '@/components'
import 'bootstrap/dist/css/bootstrap.min.css'

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
  variable: '--tw-font-mont',
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
  variable: '--tw-font-poppins',
})

export const metadata: Metadata = {
  title: 'Book shop',
  description:
    'Explore a wide selection of books and immerse yourself in captivating stories, all in one place.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={montserrat.className}>
        <NavigationBar />
        <div className="tw-pl-[88px] max-[992px]:tw-px-4">{children}</div>
      </body>
    </html>
  )
}
