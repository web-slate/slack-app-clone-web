import React from 'react'
import styles from './ChatGroupList.styles.css'

import userImg from '../../../../static/images/user.png'

function ChatGroupList() {
  return (
    <>
      <section className={styles.feeds}>
        <article className={styles.feedArticle}>
          <section class={styles.feedUserAvatar}>
              <img src={userImg} alt="user1" width="100%" height="100%" />
          </section>
          <section class={styles.feedContent}>
            <section class={styles.feedUserInfo}>
              <h4>Sriraman Vellingiri <span class={styles.feedUserInfoTS}>9:56am</span></h4>
            </section>
            
              <p class={styles.feedText}>
               Hi! How are you ?
              </p>
            
          </section>
        </article>
      </section>
    </>
  )
}

export default ChatGroupList
