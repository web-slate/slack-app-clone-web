import React from 'react'
import styles from './ChannelName.styles.css'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ChannelName(props) {
  const { name } = props 
  return (
    <>
    <div className={styles.contentChannelName}>
      <h4 className={styles.contentHeaderName}>
        <a href='#'> #{name} <FontAwesomeIcon icon={faChevronDown} /> </a>
      </h4>
    </div>
    </>
  )
}

export default ChannelName
