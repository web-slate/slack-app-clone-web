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

import { formatDate } from '@/utils/date'

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
    let date = new Date()
    if (group.messages && group.messages[0] && group.messages[0].datetime) {
      date = new Date(group.messages[0].datetime * 1000)
    }
    return formatDate(date)
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
