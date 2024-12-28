import { configureStore } from '@reduxjs/toolkit'
import filter, { IFilterState } from './slices/filterSlice'
import pagination, { IPaginationState } from './slices/paginationSlice'
import cart, { ICartState } from './slices/cartSlice'
import pizza, { IPizzaState } from './slices/pizzaSlice'

export type IRootState = {
  cart: ICartState
  pizza: IPizzaState
  filter: IFilterState
  pagination: IPaginationState
}

const store = configureStore({
  reducer: {
    filter,
    pagination,
    cart,
    pizza,
  },
})

export default store
