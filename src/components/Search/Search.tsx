/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import debounce from 'lodash.debounce'
import search from '../../assets/img/search.svg'
import close from '../../assets/img/close.svg'
import { setSearchValue } from '../../redux/slices/filterSlice'
import styles from './Search.module.scss'
import { useDispatch } from 'react-redux'

const Search: React.FC = () => {
  const dispatch = useDispatch()

  const [value, setValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onClickClear() {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str: any) => {
      dispatch(setSearchValue(str))
    }, 500),
    []
  )

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          className={styles.closeIcon}
          src={close}
          alt="close"
          onClick={onClickClear}
        />
      )}
    </div>
  )
}

export default Search
