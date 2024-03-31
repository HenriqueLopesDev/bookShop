import { BreadCrumb } from '@/components'

export default function Livros() {
  return (
    <div className="py-5 px-10">
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
          <button>Novo livro</button>
        </div>
      </header>
    </div>
  )
}
