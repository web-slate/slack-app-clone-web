import React from 'react'
import styles from './ChatItem.styles.css'
import userImg from '../../../../../../static/images/user.png'
import { getLocalTime } from '@/utils/date'

function ChatItem({ from, message, datetime }) {
  return (
    <article className={styles.feedArticle}>
      <section className={styles.feedUserAvatar}>
        <img src={userImg} alt={from.username} />
      </section>
      <section className={styles.feedContent}>
        <section className={styles.feedUserInfo}>
          <h4>
            {from.username}
            <span className={styles.feedUserInfoTS}>
              {getLocalTime(datetime)}
            </span>
          </h4>
        </section>
        <p className={styles.feedText}>{message}</p>
      </section>
    </article>
  )
}

export default ChatItem
