import React from 'react'
import styles from './ChatItem.styles.css'
import userImg from '../../../../../../static/images/user.png'
import { getLocalTime } from '@/utils/date'

function ChatItem({ from, message, datetime }) {
  return (
    <article className={styles.feedArticle}>
      <section class={styles.feedUserAvatar}>
        <img src={userImg} alt={from.username} />
      </section>
      <section class={styles.feedContent}>
        <section class={styles.feedUserInfo}>
          <h4>
            {from.username}
            <span class={styles.feedUserInfoTS}>{getLocalTime(datetime)}</span>
          </h4>
        </section>
        <p class={styles.feedText}>{message}</p>
      </section>
    </article>
  )
}

export default ChatItem
