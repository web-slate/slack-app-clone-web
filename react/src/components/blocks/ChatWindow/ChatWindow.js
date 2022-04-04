import React from 'react'
import styles from './ChatWindow.styles.css'
import ChatHeader from './ChatHeader'
import ChatGroupList from './ChatGroupList'
import MessageForm from './MessageForm'


function ChatWindow() {
  return (
    <>
         <section class={styles.content}>
         <ChatHeader name="hello"/>
          <ChatGroupList /> 
          <MessageForm channelName="hello"/>
         </section>
    </>
  )
}

export default ChatWindow
