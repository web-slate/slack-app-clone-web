import React from 'react'
import styles from './CreateChannel.styles.css'
import { Modal, InputTextField } from '@/ui'
import { useI18n } from '@/i18n'

function CreateChannel({ show, handleModalClose }) {
  const { formatMessage } = useI18n()
  return (
    <>
      <Modal show={show} handleModalClose={handleModalClose} title={formatMessage({ id: 'create_a_channel' })}>
        <p className={styles.heading}>{formatMessage({ id: 'channel_description' })}</p>
        <div>
          <label className={styles.label}>{formatMessage({ id: 'name' })}</label>
          <InputTextField className={styles.textField} placeholder={formatMessage({ id: 'plan_budget' })} />
        </div>
      </Modal>
    </>
  )
}

export default CreateChannel
