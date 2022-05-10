import React, { forwardRef } from 'react'
import styles from './Switch.styles.css'

const Switch = forwardRef((props, ref) => {
  const handleChange = () => {}
  return (
    <>
      <div className={styles.switchConatiner}>
        <input
          onChange={handleChange}
          type="checkbox"
          className={styles.switch}
          {...props}
          ref={ref}
        />
        <div className={styles.switchSlider} />
      </div>
    </>
  )
})

export default Switch
