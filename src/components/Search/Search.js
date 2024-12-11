import React from 'react'

import search from '../../assets/img/search.svg'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input className={styles.input} placeholder="Поиск пиццы..." />
    </div>
  )
}

export default Search
