import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book shop - Livros',
}

export default function LivrosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
