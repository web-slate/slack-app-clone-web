import React from 'react'
import PropTypes from 'prop-types'
import styles from './SidebarNav.styles.css'

import { faChevronDown, faCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props

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
