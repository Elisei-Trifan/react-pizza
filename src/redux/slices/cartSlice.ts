import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

export type TCartItem = {
  id: string
  count: number
  price: number
  size: number
  type: string
  imageUrl: string
  title: string
}

type TMinusItem = {
  id: string
  price: number
}

// type TAddItem = {
//   id: string
//   price: number
//   count?: number
// }

interface ICartSliceState {
  items: TCartItem[]
  totalPrice: number
}

const { items, totalPrice } = getCartFromLocalStorage()

const initialState: ICartSliceState = {
  totalPrice,
  items,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      // state.totalPrice += action.payload.price
      state.totalPrice = calcTotalPrice(state.items)
    },

    minusItem(state, action: PayloadAction<TMinusItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count--
      }
      state.totalPrice -= action.payload.price
    },

    removeItem(state, action: PayloadAction<string>) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      )

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.count
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions
export default cartSlice.reducer
