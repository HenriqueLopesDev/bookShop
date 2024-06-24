import { MainModal } from '@/components'

interface DeleteBookModalProps {
  show: boolean
  onHide: () => void
  title: string
}

export default function DeleteBookModal({
  show,
  onHide,
  title,
}: DeleteBookModalProps) {
  return (
    <MainModal title="Excluir livro" show={show} onHide={onHide}>
      <div className="tw-flex tw-flex-col tw-gap-3">
        <div className="tw-flex tw-flex-col tw-gap-1 tw-font-mont tw-text-[#574F4D] tw-font-medium">
          <p className="tw-text-center tw-m-0">
            Deseja realmente excluir o livro <b>{title}</b>?
          </p>
          <p className="tw-text-center tw-m-0">
            Atenção, essa ação não poderá ser desfeita!
          </p>
        </div>
        <div className="tw-flex tw-justify-between">
          <button
            onClick={onHide}
            className="tw-px-4 tw-py-2 tw-text-white tw-bg-gray-500 tw-rounded-md hover:tw-bg-gray-600 tw-transition tw-duration-500 tw-font-poppins tw-font-medium"
          >
            Cancelar
          </button>
          <button
            onClick={onHide}
            className="tw-px-4 tw-py-2 tw-ml-2 tw-text-white tw-bg-red-500 tw-rounded-md hover:tw-bg-red-600 tw-transition tw-duration-500 tw-font-poppins tw-font-medium"
          >
            Excluir
          </button>
        </div>
      </div>
    </MainModal>
  )
}
