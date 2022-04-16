import React from 'react'
import styles from './ChatGroupList.styles.css'

// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Services
import useMessagesList from '@/hooks/services/useMessagesList'

// Components
import ChatGroup from './ChatGroup/ChatGroup'
import { BlockLoader } from '@/ui'

function ChatGroupList({ organizationId, channelId }) {
  if (!channelId) return <BlockLoader loading />
  const {
    response: messagesListResponse,
    error: messagesListError,
    loading: messagesListLoading,
  } = useMessagesList(organizationId, channelId)

  if (messagesListLoading) return <BlockLoader loading />
  if (messagesListError) return messagesListError.message

  const getLegendDate = (group) => {
    if (group.messages && group.messages[0] && group.messages[0].datetime) {
      const date = new Date(group.messages[0].datetime * 1000)
      return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
        date
      )
    }
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
      new Date()
    )
  }

  return (
    <section className={styles.feeds}>
      {messagesListResponse?.map((group, index) => {
        return (
          <fieldset key={`group-${index}`}>
            <legend>
              {getLegendDate(group)}
              <FontAwesomeIcon icon={faChevronDown} />
            </legend>
            <ChatGroup messages={group.messages} />
          </fieldset>
        )
      })}
    </section>
  )
}

export default ChatGroupList
