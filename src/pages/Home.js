/* eslint-disable no-unused-vars */
import React from 'react'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sceleton from '../components/PizzaBlock/Sceleton'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
import { searchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  // const [categoryId, setCategoryId] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  })
  const { searchValue } = React.useContext(searchContext)

  const categoryId = useSelector((state) => state.filter.categoryId)

  const dispatch = useDispatch()

  function onChangeCategory(id) {
    console.log(id)
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://6756ce9ec0a427baf94a792f.mockapi.io/items?page=${currentPage}&limit=3&category=` +
        categoryId +
        `&sortBy=${sortType.sortProperty}&order=asc`
    )
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setTimeout(() => {
          setItems(arr)
          setIsLoading(false)
        }, 300)
      })
    window.scrollTo(0, 0)
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
        <Sort value={sortType} onClickSortType={(cond) => setSortType(cond)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoading ? sceletons : arrayPizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  )
}

export default Home
