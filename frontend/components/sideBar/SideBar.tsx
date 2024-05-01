'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { CaretUp, User } from '@phosphor-icons/react'

interface route {
  path: string
  name: string
  description: string
  icon: ReactNode
}

interface routesProps {
  routes: route[]
}

export default function SideBar({ routes }: routesProps) {
  const pathname = usePathname()

  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false)

  return (
    <aside
      className={`tw-flex tw-flex-col tw-justify-between tw-bg-white tw-w-[80px] hover:tw-w-56 tw-duration-300 tw-py-2.5 tw-px-3.5 tw-h-screen tw-absolute tw-border-r-2 tw-border-gray-200`}
    >
      <ul className="tw-flex tw-flex-col tw-font-poppins tw-font-medium tw-gap-2 tw-p-0 tw-m-0">
        {routes.map((route) => (
          <li
            key={route.path}
            className="tw-overflow-hidden tw-rounded-lg"
            title={route.description}
          >
            <Link
              href={route.path}
              className={`tw-no-underline tw-text-[17px] tw-text-[#707070] tw-flex tw-gap-6 tw-items-center tw-p-[8px_14px] tw-justify-start tw-w-full hover:tw-bg-blue-700 hover:tw-text-white tw-duration-500 ${pathname === route.path ? 'tw-bg-blue-700 tw-text-white' : ''}`}
            >
              <div className="tw-min-w-[22px]">{route.icon}</div>
              <span className="tw-overflow-hidden tw-text-nowrap">
                {route.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="tw-bg-blue-700 tw-rounded-lg tw-p-[8px_14px] tw-h-[41.5px] tw-flex tw-items-center tw-w-full tw-gap-6 tw-cursor-pointer tw-relative"
        title="Clique para trocar o Cliente"
        onClick={() => setIsUsersDropdownOpen(!isUsersDropdownOpen)}
      >
        <div className="tw-min-w-[22px]">
          <User size={22} weight="fill" color="#fff" />
        </div>
        <div className="tw-flex tw-items-center tw-gap-3 tw-overflow-hidden">
          <span className="tw-text-nowrap tw-text-white tw-font-poppins tw-font-medium">
            Cliente 1
          </span>
          <CaretUp
            size={20}
            color="#fff"
            weight="bold"
            className={`${isUsersDropdownOpen ? 'tw-rotate-180' : ''} tw-duration-300`}
          />
        </div>
        {isUsersDropdownOpen && (
          <div className="tw-absolute">
            <h1>Usuários</h1>
          </div>
        )}
      </div>
    </aside>
  )
}
