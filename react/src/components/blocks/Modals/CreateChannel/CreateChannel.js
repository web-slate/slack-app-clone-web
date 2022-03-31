import React  from 'react'
import { Modal, InputTextField, Switch, SubmitButton } from '@/ui'
import { useI18n } from '@/i18n'
import { useForm } from 'react-hook-form';
import useCreateChannel from '@/hooks/services/useCreateChannel'

import styles from './CreateChannel.styles.css'

function CreateChannel({ show, handleModalClose }) {
  const { formatMessage } = useI18n()
  const {
    register,
    handleSubmit,
    formState,
    reset
  } = useForm()

  const {
    response: createChannelResponse,
    error: createChannelError,
    loading: createChannelLoading,
    sendPostData: createChannelPostedData
  } = useCreateChannel(
    'sendPostData'
  )

  const handleCreateChannelFormSubmit = (data) => {
    createChannelPostedData(data)
    reset()
    alert('Submitted Successfully')
    handleModalClose(false)
  }

  return (
    <>
      <Modal show={show} handleModalClose={handleModalClose} title={formatMessage({ id: 'create_a_channel' })}>
        <p className={styles.heading}>{formatMessage({ id: 'channel_description' })}</p>
        <div>
          <form onSubmit={handleSubmit(handleCreateChannelFormSubmit)}>
            <input type='hidden'{...register('members', { value: [] }) } ></input>
            <input type='hidden'{...register('organization_id', { value: '1ae5241e-a51b-11ec-b909-0242ac120002' }) } ></input>
            <div className={styles.formContainer}>
              <label className={styles.label}>{formatMessage({ id: 'name' })}</label>
              <InputTextField {...register('channel_name', { required: true, maxLength: 80, value: '' }) }  className={styles.textField} placeholder={formatMessage({ id: 'plan_budget' })} />
              {formState.errors?.channel_name && <span>{formatMessage({ id: 'channel_name_error' })}</span>}
            </div>
            <div className={styles.formContainer}>
              <label className={styles.label}>{formatMessage({ id: 'description' })} ({formatMessage({ id: 'optional' })})</label>
              <InputTextField {...register('description', { maxLength: 80 }) }   className={styles.textField} placeholder={formatMessage({ id: 'description' })} />
            </div>
            <div className={styles.formContainer}>
              <label className={styles.label}>{formatMessage({ id: 'make_private' })}</label>
              <br/>
              <label className={styles.label}>{formatMessage({ id: 'make_private_description' })}</label>
              <Switch {...register('is_private') } />
            </div>
            <div className={styles.formContainer}>
              <SubmitButton>Create</SubmitButton>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default CreateChannel
