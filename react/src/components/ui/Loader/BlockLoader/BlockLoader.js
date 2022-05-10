import React from 'react'
import { Spinner } from '@/ui'

import styles from './BlockLoader.styles.css'

const BlockLoader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className={styles.blockLoader}>
          <Spinner />
        </div>
      )}
    </>
  )
}

export default BlockLoader
