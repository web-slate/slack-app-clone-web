import React from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.styles.css'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useEscape from '@/hooks/useEscape'

function Modal({ children, title, show, handleModalClose }) {
  useEscape(() => handleModalClose(false))

  return show
    ? createPortal(
        <>
          <div id="modal" className={styles.modal}>
            <div className={styles.modalContainer}>
              <div className={styles.modalHeader}>
                <h2>{title}</h2>
                <span onClick={() => handleModalClose(false)}>
                  <FontAwesomeIcon size="lg" icon={faXmark} />
                </span>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalContent}>{children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null
}

export default Modal
