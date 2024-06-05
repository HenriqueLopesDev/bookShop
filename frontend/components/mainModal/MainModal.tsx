'use client'

import { ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

interface ModalProps {
  title: string
  size?: 'sm' | 'lg' | 'xl'
  escapeKey?: boolean
  closable?: boolean | 'static'
  children: ReactNode
  animationOnEnter?: boolean
  show: boolean
  onHide: () => void
}

export default function MainModal({
  children,
  title,
  escapeKey = false,
  closable = true,
  size = undefined,
  animationOnEnter = true,
  show,
  onHide,
}: ModalProps) {
  return (
    <>
      <Modal
        show={show}
        size={size}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={escapeKey}
        onHide={onHide}
        backdrop={closable}
        style={{ scrollBehavior: 'smooth' }}
        animation={animationOnEnter}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}
