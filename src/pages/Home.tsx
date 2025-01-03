/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import Categories from '../components/Categories.tsx'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock.tsx'
import Sceleton from '../components/PizzaBlock/Sceleton.tsx'
import Sort from '../components/Sort.tsx'
import Pagination from '../components/Pagination/Pagination.tsx'
import { useSelector } from 'react-redux'
import { setCategoryId, setSortType } from '../redux/slices/filterSlice.ts'
import { fetchPizza } from '../redux/slices/pizzaSlice.ts'
import { useAppDispatch, TRootState } from '../redux/store.ts'

const Home: React.FC = () => {
  const { items, status } = useSelector((state: TRootState) => state.pizza)

  const { sortType, categoryId, searchValue } = useSelector(
    (state: TRootState) => state.filter
  )
  const currentPage = useSelector(
    (state: TRootState) => state.pagination?.currentPage
  )
  const dispatch = useAppDispatch()

  function onChangeCategory(id: number) {
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
    .filter((pizza: any) =>
      pizza.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((pizza: any) => <PizzaBlock key={pizza.id} {...pizza} />)

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
