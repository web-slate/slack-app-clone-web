import React from 'react'
import styles from './ChannelBookmark.styles.css'
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ChannelBookmark() {
  return (
      <>
      <section className={styles.contentBookmark}>
        <article className={styles.contentBookmarkDetails}>
            <FontAwesomeIcon icon={faAdd} className={styles.bookmarkAdd} /> <span className={styles.contentBookmarkText}> Add a Bookmark </span>
        </article>
      </section>
      </>
  )
}

export default ChannelBookmark
