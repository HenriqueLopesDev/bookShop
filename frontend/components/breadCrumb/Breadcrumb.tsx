import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

interface breadCrumbRoute {
  path?: string
  name: string
  description?: string
}

interface breadCrumbProps {
  breadcrumbs: breadCrumbRoute[]
}

export default function BreadCrumb({ breadcrumbs }: breadCrumbProps) {
  const isLastBreadcrumb = (currentIndex: number): boolean =>
    currentIndex === breadcrumbs.length - 1

  return (
    <div className="font-poppins flex items-center gap-1">
      <Link
        href="/"
        className="text-neutral-500 hover:text-blue-600 duration-700 font-medium text-sm"
        title="Ir para a página inicial"
      >
        Início
      </Link>
      <CaretRight size={12} weight="bold" color="#525252" />
      {breadcrumbs.map((breadcrumb, index) => {
        return isLastBreadcrumb(index) ? (
          <span
            key={breadcrumb.path}
            className="text-neutral-400 font-medium text-sm"
          >
            {breadcrumb.name}
          </span>
        ) : (
          <>
            <Link
              key={breadcrumb.path}
              href={breadcrumb.path ?? ''}
              title={breadcrumb.description ?? ''}
              className="text-neutral-400 hover:text-blue-600 duration-700 font-medium text-sm"
            >
              {breadcrumb.name}
            </Link>
            <CaretRight size={12} weight="bold" color="#525252" />
          </>
        )
      })}
    </div>
  )
}
