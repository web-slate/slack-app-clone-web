import React from 'react'
import styles from './ChatHeader.styles.css'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatHeader(props) {

  const { name } = props
  return (
    <>
      <section className={styles.contentHeader}>
        <article className={styles.contentHeaderDetails}>
            <h4 className={styles.contentHeaderName}>
              <a href='#'> #{name} <FontAwesomeIcon icon={faChevronDown} /> </a>
            </h4>
        </article>
      </section>
    </>
  )
}

export default ChatHeader
