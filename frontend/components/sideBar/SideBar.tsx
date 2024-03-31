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
      className={`flex flex-col justify-between bg-white w-[88px] hover:w-56 duration-300 py-2.5 px-3.5 h-screen absolute border-r-2 border-gray-200`}
    >
      <ul className="flex flex-col font-poppins font-medium gap-2">
        {routes.map((route) => (
          <li
            key={route.path}
            className="overflow-hidden rounded-md"
            title={route.description}
          >
            <Link
              href={route.path}
              className={`text-[17px] text-[#707070] flex gap-6 items-center p-[8px_18px] justify-start w-full hover:bg-blue-500 hover:text-white duration-500 ${pathname === route.path ? 'bg-blue-500 text-white' : ''}`}
            >
              <div className="min-w-[22px]">{route.icon}</div>
              <span className="overflow-hidden text-nowrap">{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="bg-blue-500 rounded-md p-[8px_18px] h-[41.5px] flex items-center w-full gap-6 cursor-pointer relative"
        title="Clique para trocar o Cliente"
        onClick={() => setIsUsersDropdownOpen(!isUsersDropdownOpen)}
      >
        <div className="min-w-[22px]">
          <User size={22} weight="fill" color="#fff" />
        </div>
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-nowrap text-white font-poppins font-medium">
            Cliente 1
          </span>
          <CaretUp
            size={20}
            color="#fff"
            weight="bold"
            className={`${isUsersDropdownOpen ? 'rotate-180' : ''} duration-300`}
          />
        </div>
        {isUsersDropdownOpen && (
          <div className="absolute">
            <h1>Usuários</h1>
          </div>
        )}
      </div>
    </aside>
  )
}
