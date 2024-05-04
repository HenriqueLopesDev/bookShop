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
    <div className="tw-font-poppins tw-flex tw-items-center tw-gap-1">
      <Link
        href="/"
        className="tw-text-neutral-500 hover:tw-text-blue-600 tw-duration-700 tw-font-medium tw-text-sm tw-no-underline"
        title="Ir para a página inicial"
      >
        Início
      </Link>
      <CaretRight size={12} weight="bold" color="#525252" />
      {breadcrumbs.map((breadcrumb, index) => {
        return isLastBreadcrumb(index) ? (
          <span
            key={index}
            className="tw-text-neutral-400 tw-font-medium tw-text-sm"
          >
            {breadcrumb.name}
          </span>
        ) : (
          <>
            <Link
              key={breadcrumb.path}
              href={breadcrumb.path ?? ''}
              title={breadcrumb.description ?? ''}
              className="tw-text-neutral-400 hover:tw-text-blue-600 tw-duration-700 tw-font-medium tw-text-sm"
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
