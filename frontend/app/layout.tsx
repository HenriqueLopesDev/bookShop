import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { SideBar } from '@/components'
import { House, BookBookmark } from '@phosphor-icons/react/dist/ssr'

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
  variable: '--font-mont',
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  fallback: ['sans-serif'],
  variable: '--font-poppins',
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
        <SideBar
          routes={[
            {
              name: 'Início',
              path: '/',
              description: 'Página inicial',
              icon: <House size={22} weight="bold" />,
            },
            {
              name: 'Livros',
              path: '/livros',
              description: 'Ir para a página de Livros',
              icon: <BookBookmark size={22} weight="bold" />,
            },
          ]}
        />
        <div className="pl-[88px]">{children}</div>
      </body>
    </html>
  )
}
