import { MainModal } from '@/components'

interface CreateNewBookModalProps {
  show: boolean
  onHide: () => void
}

export default function CreateNewBookModal({
  show,
  onHide,
}: CreateNewBookModalProps) {
  return (
    <MainModal title="Adicionar novo livro" show={show} onHide={onHide}>
      <h1>Novo modal</h1>
      <button onClick={onHide}>Fechar modal</button>
    </MainModal>
  )
}
