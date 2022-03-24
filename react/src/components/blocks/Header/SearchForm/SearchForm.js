import React from 'react'
import styles from './SearchForm.styles.css'

function SearchForm() {
  return (
    <>
      <form action="." className={styles.navSearchBar}>
          <i class="fas fa-search"></i>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Slack"
            className={styles.searchBarInput}
          />
        </form>

    </>
  )
}

export default SearchForm
