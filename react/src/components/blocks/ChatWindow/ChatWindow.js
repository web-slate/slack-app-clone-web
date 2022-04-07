import React from 'react'
import styles from './ChatWindow.styles.css'
import ChatHeader from './ChatHeader'
import ChatGroupList from './ChatGroupList'
import MessageForm from './MessageForm'
import useApplicationContext from '@/context/Application/useApplicationContext'

function ChatWindow() {
  const { organizationId, channelId } = useApplicationContext();
  return (
    <section class={styles.content}>
      <ChatHeader name="hello" />
      <ChatGroupList organizationId={organizationId} channelId={channelId} />
      <MessageForm channelName="hello" />
    </section>
  )
}

export default ChatWindow
