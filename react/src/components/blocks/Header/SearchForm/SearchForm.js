import React from 'react'
import styles from './SearchForm.styles.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useI18n } from '@/i18n'

function SearchForm(props) {
  const { formatMessage } = useI18n()
  const { orgName, ...rest } = props
  return (
    <>
      <form action="." className={styles.navSearchBar}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder={`${formatMessage({ id: 'search' })} ${orgName}`}
          className={styles.searchBarInput}
        />
        <FontAwesomeIcon icon={faSearch} />
      </form>
    </>
  )
}

export default SearchForm
