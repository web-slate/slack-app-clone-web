import React from 'react'
import styles from './SubmitButton.styles.css'

function SubmitButton( { children, handleOnclick }) {

  return (
    <>
      <button
        type='submit'
        onClick={handleOnclick}
        className={styles.submitButton}
      >
      {children}
      </button>
    </>
  )
}

export default SubmitButton
