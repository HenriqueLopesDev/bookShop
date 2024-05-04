import { BreadCrumb, MainModal } from '@/components'
import {
  MagnifyingGlass,
  Funnel,
  PlusCircle,
  DotsThreeOutlineVertical,
} from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book shop - Livros',
}

export default function Livros() {
  const books = [
    {
      title: 'Clean Code',
      authors: ['Robert C. Martin'],
      publisher: 'Prentice Hall',
      quantity: 10,
    },
    {
      title: 'Refactoring',
      authors: ['Martin Fowler', 'Kent Beck', 'John Doe'],
      publisher: 'Livros tec',
      quantity: 10,
    },
    {
      title: 'Design Patterns',
      authors: [
        'Erich Gamma',
        'Richard Helm',
        'Ralph Johnson',
        'John Vlissides',
      ],
      publisher: 'Addison-Wesley',
      quantity: 10,
    },
    {
      title: 'Domain-Driven Design',
      authors: ['Eric Evans'],
      publisher: 'Addison-Wesley',
      quantity: 10,
    },
    {
      title: 'The Pragmatic Programmer',
      authors: ['Andrew Hunt', 'David Thomas'],
      publisher: 'Addison-Wesley',
      quantity: 10,
    },
    {
      title: 'Test-Driven Development',
      authors: ['Kent Beck'],
      publisher: 'Addison-Wesley',
      quantity: 10,
    },
    {
      title: 'Este é um livro com um nome extremamente grande',
      authors: ['Este é um livro com um nome extremamente grande'],
      publisher: 'Este é um livro com um nome extremamente grande',
      quantity: 10,
    },
  ]

  return (
    <div className="tw-py-5 tw-px-8 tw-flex tw-flex-col tw-gap-8 max-[992px]:tw-px-0">
      <header className="tw-flex tw-flex-col tw-gap-2">
        <BreadCrumb
          breadcrumbs={[
            {
              name: 'Livros',
            },
          ]}
        />
        <div className="tw-w-full tw-bg-blue-100 tw-p-4 tw-rounded-md tw-h-24 tw-flex tw-items-center tw-justify-between">
          <h1 className="tw-font-semibold tw-font-mont tw-text-3xl tw-text-blue-800 tw-m-0">
            Livros
          </h1>
          <MainModal description="Modal 1">
            <button className="tw-text-white tw-bg-blue-600 tw-py-2 tw-px-4 tw-rounded-lg tw-flex tw-gap-2 tw-items-center hover:tw-bg-blue-500 hover:tw-text-neutral-100 tw-duration-500">
              <span className="tw-font-medium tw-font-poppins">Novo livro</span>
              <PlusCircle size={20} weight="bold" />
            </button>
          </MainModal>
        </div>
      </header>
      <div className="tw-bg-neutral-200 tw-bg-[#e9e9e9] tw-py-3 tw-px-4 tw-rounded-md tw-h-[calc(100vh-196px)] tw-flex tw-flex-col tw-gap-3">
        <div className="tw-flex tw-gap-3">
          <form className="tw-flex tw-w-full">
            <input
              type="text"
              placeholder="Buscar por livros"
              className="tw-w-full tw-rounded-l-lg tw-py-1 tw-px-3 tw-outline-none tw-border-y tw-border-l tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 tw-font-poppins tw-text-base tw-text-neutral-500 placeholder:tw-font-poppins placeholder:tw-text-sm placeholder:tw-font-medium"
            />
            <button className="tw-text-white tw-bg-blue-600 tw-rounded-r-lg tw-py-1 tw-px-3 hover:tw-bg-blue-500 hover:tw-text-neutral-100 tw-duration-500">
              <MagnifyingGlass size={16} weight="bold" />
            </button>
          </form>
          <button className="tw-text-white tw-bg-blue-600 tw-py-1 tw-px-3 tw-rounded-md tw-flex tw-gap-2 tw-items-center hover:tw-bg-blue-500 hover:tw-text-neutral-100 tw-duration-500">
            <span className="tw-font-medium tw-font-poppins">Filtros</span>
            <Funnel size={20} weight="bold" />
          </button>
        </div>
        <table className="tw-w-full tw-flex tw-flex-col tw-gap-2 overflow-y-auto">
          <thead className="tw-bg-blue-500 tw-p-2 tw-block tw-rounded-tl-lg tw-rounded-tr-lg">
            <tr className="row g-0 tw-text-white text-center tw-font-poppins">
              <th className="col-xl-4 col-lg-3 col-md-3 tw-font-medium !tw-px-1">
                Título
              </th>
              <th className="col-xl-3 col-lg-3 col-md-3 tw-font-medium !tw-px-1">
                Autores
              </th>
              <th className="col-xl-2 col-lg-3 col-md-2 tw-font-medium !tw-px-1">
                Editora
              </th>
              <th className="col-xl-2 col-lg-2 col-md-2 tw-font-medium !tw-px-1">
                Quantidade
              </th>
              <th className="col-xl-1 col-lg-1 col-md-2 tw-font-medium !tw-px-1">
                Opções
              </th>
            </tr>
          </thead>
          <tbody className="text-center tw-flex tw-flex-col tw-gap-1 tw-font-mont tw-font-medium tw-text-[#574F4D]">
            {books.map((book, index) => (
              <tr
                key={index}
                className="row g-0 tw-bg-neutral-100 tw-py-2 hover:tw-bg-blue-100 tw-duration-500"
              >
                <td
                  title={book.title}
                  className="col-xl-4 col-lg-3 col-md-3 tw-flex tw-items-center tw-justify-center tw-whitespace-nowrap !tw-px-1"
                >
                  <span className="tw-text-ellipsis tw-overflow-hidden">
                    {book.title}
                  </span>
                </td>
                <td
                  title={book.authors.join(', ')}
                  className="col-xl-3 col-lg-3 col-md-3 tw-flex tw-items-center tw-justify-center tw-whitespace-nowrap !tw-px-1"
                >
                  <span className="tw-text-ellipsis tw-overflow-hidden">
                    {book.authors.join(', ')}
                  </span>
                </td>
                <td
                  title={book.publisher}
                  className="col-xl-2 col-lg-3 col-md-2 tw-flex tw-items-center tw-justify-center tw-whitespace-nowrap !tw-px-1"
                >
                  <span className="tw-text-ellipsis tw-overflow-hidden">
                    {book.publisher}
                  </span>
                </td>
                <td
                  title={book.quantity.toString()}
                  className="col-xl-2 col-lg-2 col-md-2 tw-flex tw-items-center tw-justify-center"
                >
                  <span>{book.quantity}</span>
                </td>
                <td
                  title="Gerir livro"
                  className="col-xl-1 col-lg-1 col-md-2 tw-flex tw-items-center"
                >
                  <div className="tw-flex tw-justify-center tw-items-center tw-w-full">
                    <button className="tw-border-2 tw-border-blue-400 tw-p-1 tw-rounded-md tw-text-[#574F4D] hover:tw-bg-blue-300 hover:tw-text-white tw-duration-300">
                      <DotsThreeOutlineVertical size={16} weight="fill" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
