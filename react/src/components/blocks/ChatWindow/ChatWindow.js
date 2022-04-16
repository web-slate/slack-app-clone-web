import React from 'react'
import styles from './ChatWindow.styles.css'
import ChatHeader from './ChatHeader'
import ChatGroupList from './ChatGroupList'
import MessageForm from './MessageForm'
import useApplicationContext from '@/context/Application/useApplicationContext'

function ChatWindow() {
  const { organizationId, channelId, channelName, channelData } =
    useApplicationContext()
  return (
    <section className={styles.content}>
      <ChatHeader name={channelName} data={channelData} />
      <ChatGroupList organizationId={organizationId} channelId={channelId} />
      <MessageForm channelName={channelName} />
    </section>
  )
}

export default ChatWindow
