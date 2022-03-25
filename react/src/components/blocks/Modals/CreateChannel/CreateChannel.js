import React from 'react'
import styles from './CreateChannel.styles.css'
import { Modal, InputTextField } from '@/ui'

function CreateChannel({ show, handleModalClose }) {
  return (
    <>
      <Modal show={show} handleModalClose={handleModalClose} title={'Create a channel'}>
        <p className={styles.heading}>Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.</p>
        <div>
          <label className={styles.label}>Name</label>
          <InputTextField className={styles.textField} placeholder="e.g. plan-budget" />
        </div>
      </Modal>
    </>
  )
}

export default CreateChannel
