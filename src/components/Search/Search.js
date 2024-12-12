import React from 'react'

import search from '../../assets/img/search.svg'
import close from '../../assets/img/close.svg'
import styles from './Search.module.scss'

const Search = ({ searchValue, setSearchValue }) => {
  function handleChangeInput(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        value={searchValue}
        onChange={handleChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          className={styles.closeIcon}
          src={close}
          alt="close"
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  )
}

export default Search
