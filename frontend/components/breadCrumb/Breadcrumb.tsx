import Link from 'next/link'

interface breadCrumbRoute {
  path?: string
  name: string
}

interface breadCrumbProps {
  breadcrumbs: breadCrumbRoute[]
}

export default function BreadCrumb({ breadcrumbs }: breadCrumbProps) {
  return (
    <div className="font-poppins flex items-center gap-1">
      <Link href="/" className="text-neutral-500">
        Início
      </Link>
      {breadcrumbs.map((breadcrumb) => (
        <Link
          key={breadcrumb.path}
          href={breadcrumb.path ?? ''}
          className="text-neutral-400"
        >
          {breadcrumb.name}
        </Link>
      ))}
    </div>
  )
}
