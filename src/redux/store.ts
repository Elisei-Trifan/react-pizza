/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import pagination from './slices/paginationSlice'
import cart from './slices/cartSlice'
import pizza from './slices/pizzaSlice'
import { useDispatch } from 'react-redux'

/* // Вручную создание корневого типа для общего состояния, для store
// export type IRootState = {
//   cart: ICartSliceState
//   pizza: IPizzaState
//   filter: IFilterState
//   pagination: IPaginationState
// }
*/

// // Автоматическое создание типа для общего состояния, для store
export type TRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types

const store = configureStore({
  reducer: {
    filter,
    pagination,
    cart,
    pizza,
  },
})

export default store
