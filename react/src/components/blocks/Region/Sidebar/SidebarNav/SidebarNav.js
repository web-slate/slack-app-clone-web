import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { faChevronDown,  faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CreateChannel } from '@/blocks'
import { Accordion, BlockLoader } from '@/ui'
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";


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

  function MouseOver(event) {
    event.target.style.background = '#350d36';
  }
  
  function MouseOut(event){
    event.target.style.background = ""
  }


  const handleClick = (e, data) => {
    console.log(`Clicked on menu ${data.item}`);
  };
    

  return (
    <article className={styles.sidebarOne}>
      <section className={styles.sidebarUser} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <div className={styles.sidebarUserInfo}>
        <h4>{formatMessage({ id: 'slackcloneapp' })}  </h4>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <span className={styles.sidebarUserEditIcon}><FontAwesomeIcon icon={faEdit} /></span>
      </section>

      <section className="">
      <ContextMenuTrigger id="select_options">
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
      </ContextMenuTrigger>

      <ContextMenu className={styles.menu} id="select_options">
          <MenuItem onClick={handleClick} data={{item: ""}}
          className={`${styles.menuItem} ${styles.menuItemFirst}`}>
              {formatMessage({ id: 'create_sidebar_section' })}
          </MenuItem>
          <MenuItem onClick={handleClick} data={{item: ""}} className={styles.menuItem}>
                {formatMessage({ id: 'browse_channels' })}
          </MenuItem>
          <MenuItem onClick={handleChannelAdd} data={{item: "Create a Channel"}} className={styles.menuItem}>
              {formatMessage({ id: 'create_a_channel' })}
          </MenuItem>
        </ContextMenu>
      </section>

      <BlockLoader loading={channelListLoading}/>
    </article>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav
