'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface route {
  path: string
  name: string
  description: string
  icon: ReactNode
}

interface routesProps {
  routes: route[]
}

export default function MobileHeader({ routes }: routesProps) {
  const pathname = usePathname()

  return (
    <header className="tw-bg-blue-950 tw-p-1 tw-border-b-2 tw-border-gray-200 tw-p-0 min-[993px]:tw-hidden">
      <nav className="tw-flex tw-justify-between tw-items-center tw-p-2">
        <div className="tw-flex tw-gap-2 tw-items-center">
          <div className="tw-bg-blue-800 tw-p-2 tw-rounded-md tw-text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-6 tw-w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <h1 className="tw-text-white tw-font-poppins tw-font-medium tw-text-lg tw-m-0 tw-tracking-[0.1rem]">
            BookShop
          </h1>
        </div>
        <ul className="tw-flex tw-gap-4 tw-items-center tw-p-0 tw-m-0 tw-tracking-[0.1rem] tw-text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`tw-no-underline tw-text-white tw-font-poppins tw-uppercase tw-font-medium tw-border-b-[3px] ${pathname === route.path ? 'tw-border-white' : 'tw-border-transparent'}`}
              >
                <span className="">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
