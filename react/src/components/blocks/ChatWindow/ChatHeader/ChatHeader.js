import React from 'react'
import styles from './ChatHeader.styles.css'
import ChannelName from './ChannelName'
import ChannelMembers from './ChannelMembers'

function ChatHeader(props) {

  return (
    <>
      <section className={styles.contentHeader}>
        <article className={styles.contentHeaderDetails}>
          <ChannelName {...props} />
        </article>
      </section>
    </>
  )
}

export default ChatHeader
