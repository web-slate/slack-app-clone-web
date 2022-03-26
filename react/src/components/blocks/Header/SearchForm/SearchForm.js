import React from 'react'
import styles from './SearchForm.styles.css'
import { useI18n } from '@/i18n'

function SearchForm() {
  const { formatMessage } = useI18n()
  
  return (
    <>
      <form action="." className={styles.navSearchBar}>
          <i class="fas fa-search"></i>
          <input
            type="search"
            name="search"
            id="search"
            placeholder={formatMessage({ id: 'search_slack' })}
            className={styles.searchBarInput}
          />
        </form>

    </>
  )
}

export default SearchForm
