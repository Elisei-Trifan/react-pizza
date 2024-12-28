/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import pagination from './slices/paginationSlice'
import cart from './slices/cartSlice'
import pizza from './slices/pizzaSlice'

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

const store = configureStore({
  reducer: {
    filter,
    pagination,
    cart,
    pizza,
  },
})

export default store
