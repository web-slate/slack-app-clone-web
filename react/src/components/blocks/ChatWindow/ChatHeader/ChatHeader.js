import React from 'react'
import styles from './ChatHeader.styles.css'
import ChannelName from './ChannelName'
import ChannelMembers from './ChannelMembers'
import ChannelBookmark from './ChannelBookmark'

function ChatHeader(props) {

  return (
    <>
      <section className={styles.contentHeader}>
        <article className={styles.contentHeaderDetails}>
          <ChannelName {...props} />
          <ChannelMembers />
        </article>
      </section>
      <ChannelBookmark />
    </>
  )
}

export default ChatHeader
