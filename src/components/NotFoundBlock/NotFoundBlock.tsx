import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>&#129488;</span>
        <br />
        Ничего не найдено...
      </h1>
      <p className={styles.decsription}>
        Данная страница отсутствует в нашем интренет-магазине.
      </p>
    </div>
  )
}

export default NotFoundBlock
