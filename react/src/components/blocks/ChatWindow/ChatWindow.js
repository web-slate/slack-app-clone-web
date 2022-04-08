import React from 'react'
import styles from './ChatWindow.styles.css'
import ChatHeader from './ChatHeader'
import ChatGroupList from './ChatGroupList'
import MessageForm from './MessageForm'
import useApplicationContext from '@/context/Application/useApplicationContext'

function ChatWindow() {
  const { organizationId, channelId, channelName } = useApplicationContext();
  return (
    <section class={styles.content}>
      <ChatHeader name={channelName} />
      <ChatGroupList organizationId={organizationId} channelId={channelId} />
      <MessageForm channelName={channelName} />
    </section>
  )
}

export default ChatWindow
