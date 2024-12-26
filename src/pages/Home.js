/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sceleton from '../components/PizzaBlock/Sceleton'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
import { searchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setSearchValue,
} from '../redux/slices/filterSlice'
import { setItems, fetchPizza } from '../redux/slices/pizzaSlice'

const Home = () => {
  // const [isLoading, setIsLoading] = React.useState(true)
  // const { searchValue } = React.useContext(searchContext)

  const { items, status } = useSelector((state) => state.pizza)

  const { sortType, categoryId, searchValue } = useSelector(
    (state) => state.filter
  )
  const currentPage = useSelector((state) => state.pagination.currentPage)
  const dispatch = useDispatch()

  function onChangeCategory(id) {
    dispatch(setCategoryId(id))
  }

  const getPizzas = async () => {
    // setIsLoading(true)

    dispatch(
      fetchPizza({
        categoryId,
        sortType,
        currentPage,
      })
    )

    window.scrollTo(0, 0)
  }

  React.useEffect(() => {
    getPizzas()
  }, [categoryId, sortType, currentPage])

  const sceletons = [...new Array(6)].map((_, i) => <Sceleton key={i} />)
  const arrayPizzas = items
    .filter((pizza) =>
      pizza.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort
          value={sortType}
          onClickSortType={(cond) => dispatch(setSortType(cond))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {status === 'loading' ? sceletons : arrayPizzas}
      </div>
      <Pagination />
    </>
  )
}

export default Home

// await axios
//   .get(
//     `https://6756ce9ec0a427baf94a792f.mockapi.io/items?page=${currentPage}&limit=3&category=` +
//       categoryId +
//       `&sortBy=${sortType.sortProperty}&order=asc`
//   )
//   .then((res) => {
//     setTimeout(() => {
//       setItems(res.data)
//       setIsLoading(false)
//     }, 300)
//   })
