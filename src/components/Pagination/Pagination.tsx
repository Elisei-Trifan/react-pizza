import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/paginationSlice'

import styles from './Pagination.module.scss'

const Pagination: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={3}
        pageCount={5}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
