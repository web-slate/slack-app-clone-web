import React from 'react'
import { createPortal } from 'react-dom'

import styles from './PageLoader.styles.css'
import { Spinner } from '@/ui'

export default function PageLoader({ loading }) {
  return loading
    ? createPortal(
        <>
          <div className={styles.pageLoader}>
            <Spinner />
          </div>
        </>,
        document.body
      )
    : null
}
