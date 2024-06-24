import { useState } from 'react'

interface bookStateProps {
  currentBook: null | string
  action: null | 'create' | 'edit' | 'delete' | 'view'
}

enum bookActionsEnum {
  CREATE = 'create',
  EDIT = 'edit',
  DELETE = 'delete',
  VIEW = 'view',
}

export default function useBooks() {
  const [bookState, setBookState] = useState<bookStateProps>({
    currentBook: null,
    action: null,
  })

  const setToCreate = () => {
    setBookState({ currentBook: null, action: 'create' })
  }

  const setToEdit = (book: string) => {
    setBookState({ currentBook: book, action: 'edit' })
  }

  const setToDelete = (book: string) => {
    setBookState({ currentBook: book, action: 'delete' })
  }

  const setToView = (book: string) => {
    setBookState({ currentBook: book, action: 'view' })
  }

  const setDefault = () => {
    setBookState({ currentBook: null, action: null })
  }

  return {
    bookState,
    bookActionsEnum,
    setDefault,
    setToCreate,
    setToEdit,
    setToDelete,
    setToView,
  }
}
