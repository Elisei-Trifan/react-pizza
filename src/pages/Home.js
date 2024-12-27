/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sceleton from '../components/PizzaBlock/Sceleton'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCategoryId,
  setSortType,
  setSearchValue,
} from '../redux/slices/filterSlice'
import { fetchPizza } from '../redux/slices/pizzaSlice'
import { Link } from 'react-router-dom'

const Home = () => {
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
