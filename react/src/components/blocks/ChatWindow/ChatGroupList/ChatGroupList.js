import React from 'react'
import styles from './ChatGroupList.styles.css'
import userImg from '../../../../static/images/user.png'

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ChatGroupList() {
  return (
    <>
      <section className={styles.feeds}>
      <fieldset>
        <legend> Nov 24th, 2021  <FontAwesomeIcon icon={faChevronDown} />  </legend>
        <article className={styles.feedArticle}>
          <section class={styles.feedUserAvatar}>
              <img src={userImg} alt="user1" width="100%" height="100%" />
          </section>
          <section class={styles.feedContent}>
            <section class={styles.feedUserInfo}>
              <h4> Jacob  <span class={styles.feedUserInfoTS}>9:56am</span></h4>
            </section>
            
              <p class={styles.feedText}>
               Hi! How are you ?
              </p>
            
          </section>
        </article>
       </fieldset>
      </section>
    </>
  )
}

export default ChatGroupList
