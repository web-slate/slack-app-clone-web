import React, { useState } from 'react'
import styles from './Accordion.styles.css'

import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Accordion({
  children,
  title,
  titleButtons,
  active,
  setchannelListShow,
}) {
  const [setActive, setActiveState] = useState(active)

  const handleAccordionClick = () => {
    setActiveState(!setActive)
    setchannelListShow(!setActive)
  }

  return (
    <>
      <div className={styles.accordion}>
        <div onClick={handleAccordionClick} className={styles.accordionTitle}>
          <FontAwesomeIcon
            className={styles.accordionIcon}
            icon={setActive ? faCaretDown : faCaretRight}
          />
          {title}
        </div>
        <div className={styles.accordionTitleButtons}>{titleButtons}</div>
        <div
        // className={
        //   setActive
        //     ? styles.accordionContentActive
        //     : styles.accordionContentHide
        // }
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Accordion
