import React from 'react'
import { Modal, InputTextField, Switch, SubmitButton } from '@/ui'
import { useI18n } from '@/i18n'
import { useForm } from 'react-hook-form'
import useCreateChannel from '@/hooks/services/useCreateChannel'
import { PageLoader } from '@/blocks'
import styles from './CreateChannel.styles.css'
import useApplicationContext from '@/context/Application/useApplicationContext'

function CreateChannel({ show, handleModalClose }) {
  const { formatMessage } = useI18n()
  const { register, handleSubmit, formState, reset } = useForm()
  const { organizationId } = useApplicationContext()

  const {
    response: createChannelResponse,
    error: createChannelError,
    loading: createChannelLoading,
    sendPostData: createChannelPostedData,
  } = useCreateChannel('sendPostData')

  const handleCreateChannelFormSubmit = async (data) => {
    data.organization_id = organizationId
    data.members = []
    const result = await createChannelPostedData(data)
    if (result.response) {
      alert(result.response?.message)
      handleModalClose(false, true)
    } else if (result.error) {
      alert(result.error?.response?.data?.message)
    }
    reset()
  }

  return (
    <>
      <Modal
        show={show}
        handleModalClose={handleModalClose}
        title={formatMessage({ id: 'create_a_channel' })}
      >
        <p className={styles.heading}>
          {formatMessage({ id: 'channel_description' })}
        </p>
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit(handleCreateChannelFormSubmit)}>
            <div className={styles.formContainer}>
              <label className={styles.label}>
                {formatMessage({ id: 'name' })}
              </label>
              <InputTextField
                {...register('channel_name', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder={formatMessage({ id: 'plan_budget' })}
              />
              {formState.errors?.channel_name && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  {formatMessage({ id: 'channel_name_error' })}
                </span>
              )}
            </div>
            <div className={styles.formContainer}>
              <label className={styles.label}>
                {formatMessage({ id: 'description' })}
                <span className={styles.subLabel}>
                  ({formatMessage({ id: 'optional' })})
                </span>
              </label>
              <InputTextField
                {...register('description', { maxLength: 80 })}
                className={styles.textField}
                placeholder={formatMessage({ id: 'description' })}
              />
              <span className={styles.subLabel}>
                {formatMessage({ id: 'channel_description_sub_label' })}
              </span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.createModalPrivateLeft}>
                <label className={styles.label}>
                  {formatMessage({ id: 'make_private' })}
                </label>
                <br />
                <label className={`${styles.label} ${styles.subLabel}`}>
                  {formatMessage({ id: 'make_private_description' })}
                </label>
              </div>
              <span className={styles.createModalRight}>
                <Switch {...register('is_private')} />
              </span>
            </div>
            <div
              className={`${styles.formContainer} ${styles.createModalRight}`}
            >
              <SubmitButton>Create</SubmitButton>
            </div>
          </form>
        </div>
      </Modal>
      <PageLoader loading={createChannelLoading} />
    </>
  )
}

export default CreateChannel
