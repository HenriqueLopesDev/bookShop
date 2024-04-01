import { BreadCrumb } from '@/components'
import {
  MagnifyingGlass,
  Funnel,
  PlusCircle,
} from '@phosphor-icons/react/dist/ssr'

export default function Livros() {
  return (
    <div className="py-5 px-10 flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <BreadCrumb
          breadcrumbs={[
            {
              name: 'Livros',
            },
          ]}
        />
        <div className="w-full bg-blue-100 p-4 rounded-md h-24 flex items-center justify-between">
          <h1 className="font-semibold font-mont text-3xl text-blue-800">
            Livros
          </h1>
          <button className="text-white bg-blue-600 py-2 px-4 rounded-lg flex gap-2 items-center hover:bg-blue-500 hover:text-neutral-100 duration-500">
            <span className="font-medium font-poppins">Novo livro</span>
            <PlusCircle size={20} weight="bold" />
          </button>
        </div>
      </header>
      <div className="bg-neutral-200 bg-[#e9e9e9] py-3 px-4 rounded-md h-[calc(100vh-196px)]">
        <div className="flex gap-3">
          <form className="flex w-full">
            <input
              type="text"
              placeholder="Buscar por livros"
              className="w-full rounded-l-lg py-1 px-3 outline-none border-y border-l border-neutral-300 focus:border-blue-600 duration-300 font-poppins text-base text-neutral-500 placeholder:font-poppins placeholder:text-sm placeholder:font-medium"
            />
            <button className="text-white bg-blue-600 rounded-r-lg py-1 px-3 hover:bg-blue-500 hover:text-neutral-100 duration-500">
              <MagnifyingGlass size={16} weight="bold" />
            </button>
          </form>
          <button className="text-white bg-blue-600 py-1 px-3 rounded-md flex gap-2 items-center hover:bg-blue-500 hover:text-neutral-100 duration-500">
            <span className=" font-medium font-poppins">Filtros</span>
            <Funnel size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
