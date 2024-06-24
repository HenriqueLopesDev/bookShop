import { MainModal, Spinner } from '@/components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  createNewBookValidationSchema,
  formSchema,
} from '@/domain/book/validation/BookZODValidationSchema'
import { useEffect, useRef, useState } from 'react'

interface CreateNewBookModalProps {
  show: boolean
  onHide: () => void
}

export default function CreateNewBookModal({
  show,
  onHide,
}: CreateNewBookModalProps) {
  const [authorsInputOnFocus, setAuthorsInputOnFocus] = useState(false)
  const [authors, setAuthors] = useState<string[]>([])
  const authorsInputRef = useRef<HTMLInputElement>(null)
  const authorsMenuRef = useRef<HTMLDivElement>(null)
  const [isDoingRequest, setIsDoingRequest] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<formSchema>({
    resolver: zodResolver(createNewBookValidationSchema),
  })

  const onSubmit = (data: formSchema) => {
    console.log(data)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        authorsInputRef.current &&
        !authorsInputRef.current.contains(event.target as Node) &&
        authorsMenuRef.current &&
        !authorsMenuRef.current.contains(event.target as Node)
      ) {
        setAuthorsInputOnFocus(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleAuthorClick = (author: string) => {
    if (authors.includes(author)) {
      setAuthors((prev) => prev.filter((a) => a !== author))
      setValue('authors', authors.filter((a) => a !== author).join(', '))
    } else {
      setAuthors((prev) => [...prev, author])
      setValue('authors', [...authors, author].join(', '))
    }
  }

  return (
    <MainModal
      title="Adicionar novo livro"
      show={show}
      onHide={onHide}
      size="lg"
      closable="static"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="tw-flex tw-flex-col tw-gap-1.5"
      >
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="title"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Título: *
          </label>
          <input
            id="title"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            placeholder="Insira o título do livro"
            {...register('title')}
          />
          {errors.title && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.title.message}
            </span>
          )}
        </div>
        <div
          className="tw-flex tw-flex-col tw-gap-1 tw-relative"
          ref={authorsInputRef}
        >
          <label
            htmlFor="authors"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Autores: *
          </label>
          <input
            id="authors"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('authors')}
            placeholder="Selecione os autores do livro"
            onFocus={() => setAuthorsInputOnFocus(true)}
            value={authors.join(', ')}
            readOnly
          />
          {authorsInputOnFocus && (
            <div
              ref={authorsMenuRef}
              className="tw-absolute tw-top-16 tw-left-0 tw-w-full tw-bg-white tw-shadow-md tw-rounded-md tw-border tw-border-neutral-300 tw-z-10 tw-p-2 tw-max-h-36 tw-overflow-y-auto"
            >
              <div className="tw-flex tw-flex-col tw-gap-1">
                {[
                  'Autor 1',
                  'Autor 2',
                  'Autor 3',
                  'Autor 4',
                  'Autor 5',
                  'Autor 6',
                  'Autor 7',
                  'Autor 8',
                  'Autor 9',
                ].map((author) => (
                  <div
                    key={author}
                    className={`tw-flex tw-justify-between tw-items-center tw-w-full tw-p-2 tw-rounded-md tw-cursor-pointer tw-duration-500 ${
                      authors.includes(author)
                        ? 'tw-bg-blue-100'
                        : 'tw-bg-neutral-100 hover:tw-bg-blue-100'
                    }`}
                    onClick={() => handleAuthorClick(author)}
                  >
                    <span className="tw-font-mont tw-font-medium tw-text-[#403937]">
                      {author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {errors.authors && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.authors.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="edition"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Edição: *
          </label>
          <input
            id="edition"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('edition')}
            placeholder="Insira a edição do livro"
          />
          {errors.edition && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.edition.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="categories"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Categorias: *
          </label>
          <input
            id="categories"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('categories')}
            placeholder="Selecione as categorias do livro"
          />
          {errors.categories && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.categories.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="year"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Ano: *
          </label>
          <input
            id="year"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('year')}
            placeholder="Insira o ano de publicação do livro"
          />
          {errors.year && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.year.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="publisher"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Editora: *
          </label>
          <input
            id="publisher"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('publisher')}
            placeholder="Insira a editora do livro"
          />
          {errors.publisher && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.publisher.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="acquisitionValue"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Valor de aquisição:
          </label>
          <input
            id="acquisitionValue"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('acquisitionValue')}
            placeholder="Insira o valor de aquisição do livro"
          />
          {errors.acquisitionValue && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.acquisitionValue.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="isbn"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            ISBN: *
          </label>
          <input
            id="isbn"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('isbn')}
            placeholder="Insira o ISBN do livro"
          />
          {errors.isbn && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.isbn.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="pages"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Quantidade de páginas: *
          </label>
          <input
            id="pages"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('pages')}
            placeholder="Insira a quantidade de páginas do livro"
          />
          {errors.pages && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.pages.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="synopsis"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Sinopse: *
          </label>
          <textarea
            id="synopsis"
            rows={5}
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('synopsis')}
            placeholder="Insira a sinopse do livro"
          />
          {errors.synopsis && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.synopsis.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="dimensions"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Dimensões: *
          </label>
          <input
            id="dimensions"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('dimensions')}
            placeholder="Insira as dimensões do livro"
          />
          {errors.dimensions && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.dimensions.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="pricingGroup"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Grupo de precificação: *
          </label>
          <input
            id="pricingGroup"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('pricingGroup')}
            placeholder="Insira o grupo de precificação do livro"
          />
          {errors.pricingGroup && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.pricingGroup.message}
            </span>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <label
            htmlFor="barcode"
            className="tw-font-mont tw-font-medium tw-text-[#403937]"
          >
            Código de barras: *
          </label>
          <input
            id="barcode"
            type="text"
            className="tw-bg-zinc-100 tw-rounded tw-outline-none tw-px-2 tw-py-1 tw-border tw-border-neutral-300 focus:tw-border-blue-600 tw-duration-300 placeholder:tw-text-sm placeholder:tw-text-neutral-400 placeholder:tw-font-poppins"
            {...register('barcode')}
            placeholder="Insira o código de barras do livro"
          />
          {errors.barcode && (
            <span className="tw-font-poppins tw-text-[13px] tw-text-red-400 tw-font-medium">
              {errors.barcode.message}
            </span>
          )}
        </div>
        <span className="tw-font-poppins tw-font-medium tw-text-neutral-500 tw-text-sm">
          Campos marcados com * são obrigatórios
        </span>
        <div className="tw-flex tw-justify-end">
          <button
            disabled={isDoingRequest}
            className="tw-text-white tw-bg-blue-600 tw-py-2 tw-px-4 tw-rounded-lg tw-flex tw-justify-center tw-gap-2 tw-items-center hover:tw-bg-blue-500 hover:tw-text-neutral-100 tw-duration-500 tw-w-[114.55px] disabled:tw-opacity-75"
          >
            {isDoingRequest ? (
              <Spinner />
            ) : (
              <span className="tw-font-medium tw-font-poppins">Cadastrar</span>
            )}
          </button>
        </div>
      </form>
    </MainModal>
  )
}
