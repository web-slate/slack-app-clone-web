import React from 'react'
import ChatItem from './ChatItem/ChatItem'

function ChatGroup({ messages }) {
  return (
    <>
      {messages.map((message) => {
        return <ChatItem key={message.datetime} {...message} />
      })}
    </>
  )
}

export default ChatGroup
