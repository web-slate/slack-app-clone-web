import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.styles.css'

function Modal({ children, title, show, handleModalClose }) {
  const handleWindowKeyDown = useCallback((e) => {
    if (e.key === 'Escape' || e.code === 27) {
      handleModalClose(false);
    }
  }, [])

  useEffect(() => {
    if (show) {
      const controller = new AbortController();
      window.addEventListener('keydown', handleWindowKeyDown, { signal: controller.signal })

      return () => {
        controller.abort()
      }
    }
  }, [show])
  

  return show ? createPortal (
    <>
      <div id='modal' className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <h2>{title}</h2>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalContent}>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.body
  ) : null
}

export default Modal
