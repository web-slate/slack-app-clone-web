import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faChevronDown,  faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreateChannel } from '@/blocks'
import { Accordion } from '@/ui'

import styles from './SidebarNav.styles.css'
// i18n
import { useI18n } from '@/i18n'

import useChannelList from '@/hooks/services/useChannelList'

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props
  const { formatMessage } = useI18n()

  const [showModal, setShowModal] = useState(false)

  const handleModalClose = (bool) => setShowModal(bool)
  const handleChannelAdd = () => setShowModal(true)

  const {
    response: channelListResponse,
    error: channelListError,
    loading: channelListLoading
  } = useChannelList()

  return (
    <article className={styles.sidebarOne}>
      <section className={styles.sidebarUser}>
        <div className={styles.sidebarUserInfo}>
        <h4>{formatMessage({ id: 'slackcloneapp' })}  </h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={`${styles.sidebarChannel} ${styles.sidebarNoselect}`}>
          <Accordion
            title={<span>{formatMessage({ id: 'channels' })} </span>}
            titleButtons={<FontAwesomeIcon icon={faPlus} onClick={handleChannelAdd} />}>
            <ul className={styles.sidebarChannelList}>
              {!channelListLoading && !channelListError && channelListResponse && channelListResponse.map((channel, index) => {
                return <li key={ index }>{channel.channel_name}</li>;}
              )}
            </ul>
          </Accordion>
          <CreateChannel show={showModal} handleModalClose={handleModalClose}/>
        </div>
        <span className={styles.sidebarUserEditIcon}><FontAwesomeIcon icon={faEdit} /></span>
      </section>
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav
