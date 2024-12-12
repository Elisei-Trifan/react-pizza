import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => console.log(e)}
        pageRangeDisplayed={6}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
