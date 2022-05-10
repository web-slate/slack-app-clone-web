import React from 'react'
import styles from './ChannelBookmark.styles.css'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// i18n
import { useI18n } from '@/i18n'

function ChannelBookmark() {
  const { formatMessage } = useI18n()
  return (
    <>
      <section className={styles.contentBookmark}>
        <article className={styles.contentBookmarkDetails}>
          <FontAwesomeIcon icon={faAdd} className={styles.bookmarkAdd} />
          <span className={styles.contentBookmarkText}>
            {formatMessage({ id: 'add_a_bookmark' })}
          </span>
        </article>
      </section>
    </>
  )
}

export default ChannelBookmark
