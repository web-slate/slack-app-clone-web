import React from 'react'
import { ContextMenu as ReactContextMenu, MenuItem } from 'react-contextmenu'
import styles from './ContextMenu.styles.css'

// i18n
import { useI18n } from '@/i18n'

function ContextMenu(props) {
  const { id, clickChannelAdd, ...rest } = props
  const { formatMessage } = useI18n()

  const handleClick = (e, data) => {}

  return (
    <>
      <ReactContextMenu
        className={id == 'select_options' ? styles.menu : styles.channelMenu}
        id={id}
      >
        {id == 'select_options' && (
          <MenuItem
            onClick={handleClick}
            data={{ item: '' }}
            className={`${styles.menuItem} ${styles.menuItemFirst}`}
          >
            {formatMessage({ id: 'create_sidebar_section' })}
          </MenuItem>
        )}
        <MenuItem
          onClick={handleClick}
          data={{ item: '' }}
          className={styles.menuItem}
        >
          {formatMessage({ id: 'browse_channels' })}
        </MenuItem>
        <MenuItem
          onClick={clickChannelAdd}
          data={{ item: '' }}
          className={styles.menuItem}
        >
          {formatMessage({ id: 'create_a_channel' })}
        </MenuItem>
      </ReactContextMenu>
    </>
  )
}

export default ContextMenu
