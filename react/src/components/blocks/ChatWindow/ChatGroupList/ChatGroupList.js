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

// FIXME: This value needs to taken from API
const DUMMY_DATE = 'Nov 24th, 2021';

function ChatGroupList({ organizationId, channelId }) {
  const {
    response: messagesListResponse,
    error: messagesListError,
    loading: messagesListLoading,
  } = useMessagesList(organizationId, channelId)

  if (messagesListLoading) return <BlockLoader loading/>
  if (messagesListError) return messagesListError.message

  return (
    <section className={styles.feeds}>
      {messagesListResponse?.map((group, index) => {
        return (
          <fieldset key={`group-${index}`}>
            <legend>
              {DUMMY_DATE} <FontAwesomeIcon icon={faChevronDown} />
            </legend>
            <ChatGroup messages={group.messages} />
          </fieldset>
        )
      })}
    </section>
  )
}

export default ChatGroupList
