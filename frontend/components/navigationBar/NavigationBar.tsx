import {
  MobileHeader,
  DesktopSidebar,
} from '@/components/navigationBar/components'
import { BookBookmark, House } from '@phosphor-icons/react/dist/ssr'

export default function NavigationBar() {
  const routes = [
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
  ]

  return (
    <>
      <DesktopSidebar routes={routes} />
      <MobileHeader routes={routes} />
    </>
  )
}
