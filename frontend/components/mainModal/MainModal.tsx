'use client'

import { X } from '@phosphor-icons/react'
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
        <Modal.Header className="!tw-py-2">
          <Modal.Title className="tw-text-center tw-w-full !tw-font-semibold tw-font-mont !tw-text-[#403937]">
            {title}
          </Modal.Title>
          <button onClick={onHide} title="Clique para fechar">
            <X size={24} weight="bold" color="#574F4D" />
          </button>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}
