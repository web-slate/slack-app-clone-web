import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  faChevronDown,
  faEdit,
  faPlus,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreateChannel } from '@/blocks'
import { Accordion, BlockLoader, ContextMenu } from '@/ui'
import { ContextMenuTrigger } from 'react-contextmenu'

import styles from './SidebarNav.styles.css'
// i18n
import { useI18n } from '@/i18n'

import useChannelList from '@/hooks/services/useChannelList'
import useApplicationContext from '@/context/Application/useApplicationContext'

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props
  const { formatMessage } = useI18n()
  const { organizationName, setChannel, channelId } = useApplicationContext()

  const [showModal, setShowModal] = useState(false)
  const [channelListShow, setchannelListShow] = useState(true)
  const [channelList, setchannelList] = useState([])

  const {
    response: channelListResponse,
    error: channelListError,
    loading: channelListLoading,
    refresh: channelListRefresh,
  } = useChannelList()

  const refreshChannels = async () => {
    const { response } = await channelListRefresh()
    if (response && response.length) {
      setchannelList(response)
    }
  }

  const handleModalClose = async (bool, channelAdded) => {
    setShowModal(bool)
    if (channelAdded) await refreshChannels()
  }

  const handleChannelAdd = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleChannelClick = (e, channel) => {
    setChannel(channel)
  }

  if (!channelId && channelListResponse && channelListResponse[0]) {
    setChannel(channelListResponse[0])
  }
  if (
    channelList.length === 0 &&
    channelListResponse &&
    channelListResponse[0]
  ) {
    setchannelList(channelListResponse)
  }

  return (
    <article className={styles.sidebarOne}>
      <section className={styles.sidebarUser}>
        <div className={styles.sidebarUserInfo}>
          <h4>{organizationName} </h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <span className={styles.sidebarUserEditIcon}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
      </section>

      <section className="">
        <ContextMenuTrigger id="select_options">
          <div className={`${styles.sidebarChannel} ${styles.sidebarNoselect}`}>
            <Accordion
              title={<span>{formatMessage({ id: 'channels' })} </span>}
              titleButtons={
                <>
                  <ContextMenuTrigger id="select_options" holdToDisplay={0}>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className={styles.ellipsisVertical}
                    />
                  </ContextMenuTrigger>
                  <FontAwesomeIcon icon={faPlus} onClick={handleChannelAdd} />
                </>
              }
              active={channelListShow}
              setchannelListShow={setchannelListShow}
            >
              <ul className={styles.sidebarChannelList}>
                {!channelListLoading &&
                  !channelListError &&
                  channelList &&
                  channelList.map((channel, index) => {
                    return (
                      <li
                        onClick={(e) => handleChannelClick(e, channel)}
                        key={index}
                        className={
                          channelId === channel.channel_id
                            ? styles.sidebarChannelListActive
                            : channelListShow
                            ? ''
                            : styles.sidebarChannelListHide
                        }
                      >
                        {channel.channel_name}
                      </li>
                    )
                  })}
              </ul>
            </Accordion>
            <CreateChannel
              show={showModal}
              handleModalClose={handleModalClose}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenu id="select_options" clickChannelAdd={handleChannelAdd} />
      </section>

      <BlockLoader loading={channelListLoading} />
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
}

export default SidebarNav
