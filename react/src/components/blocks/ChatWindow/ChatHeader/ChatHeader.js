import React from 'react'
import styles from './ChatHeader.styles.css'

function ChatHeader() {
  return (
    <>
      <section className={styles.contentHeader}>
        <article className={styles.contentHeaderDetails}>
            <h4 class="channel-content-header-name">
              #social-media <i class="fas fa-star"></i>
            </h4>
          </article>
      </section>
    </>
  )
}

export default ChatHeader
