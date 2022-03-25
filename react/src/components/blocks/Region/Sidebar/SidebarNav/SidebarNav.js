import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faChevronDown, faCircle, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreateChannel } from '@/blocks'

import styles from './SidebarNav.styles.css'

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props

  const [showModal, setShowModal] = useState(false)

  const handleModalClose = (bool) => setShowModal(bool)
  const handleChannelAdd = () => setShowModal(true)

  return (
    <article className={styles.sidebarOne}>
      <section className={styles.sidebarUser}>
        <div className={styles.sidebarUserInfo}>
          <h4>Sriraman Vellingiri</h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <p className={styles.sidebarUserInfoAdditional}>
          <FontAwesomeIcon icon={faCircle} />Slack App
        </p>
        <div className={styles.sidebarChannel}>
          <p onClick={handleChannelAdd} >Channels <FontAwesomeIcon icon={faPlus} /></p>
          <CreateChannel show={showModal} handleModalClose={handleModalClose}/>
        </div>
        <span className={styles.sidebarUserEditIcon}><FontAwesomeIcon icon={faEdit} /></span>
      </section>
      <section>
      
      </section>
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav
