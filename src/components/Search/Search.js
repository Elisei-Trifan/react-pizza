import React from 'react'

import search from '../../assets/img/search.svg'
import styles from './Search.module.scss'

const Search = ({ searchValue, setSearchValue }) => {
  function handleChangeInput(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        onChange={handleChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  )
}

export default Search
