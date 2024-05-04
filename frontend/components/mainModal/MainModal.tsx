'use client'

import { ReactNode, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface ModalProps {
  description: string
  children: ReactNode
}

/**
 *
 * @param children - React element that will act as the trigger for the modal, usually a button.
 * @returns JSX.Element - Modal component
 */
export default function MainModal({ children, description }: ModalProps) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div onClick={handleShow}>{children}</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
