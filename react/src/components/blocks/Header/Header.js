import React from 'react'
import SearchForm from './SearchForm'

import { faCircleQuestion, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Header.styles.css'

function Header() {
  
  return (
    <>
       <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navIcons}>
            <a href="#"  className={styles.navIconsLink}><FontAwesomeIcon icon={faClock} /></a>
          </div>
          <SearchForm />
          <div class={styles.navMoveLeft}>
            <a href="#" className={styles.navIconsWhite}><FontAwesomeIcon icon={faCircleQuestion} /> </a>
            <div className={styles.navUserImgWrapper} id="user">
              <img src="images/user2.jpg" alt="User 1" />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
