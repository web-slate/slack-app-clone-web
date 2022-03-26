import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faChevronDown,  faEdit, faMessage, faPlus } from "@fortawesome/free-solid-svg-icons";
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
          <h4>SlackCloneApp </h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={styles.sidebarChannel}>
        <FontAwesomeIcon icon={faChevronDown} /> <span onClick={handleChannelAdd} > Channels <FontAwesomeIcon icon={faPlus} /></span>
          <CreateChannel show={showModal} handleModalClose={handleModalClose}/>
        </div>
        <span className={styles.sidebarUserEditIcon}><FontAwesomeIcon icon={faEdit} /></span>
      </section>
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav
