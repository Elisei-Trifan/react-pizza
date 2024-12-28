/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICartItem } from './cartSlice'

export type IPizzaState = {
  items: ICartItem[]
  status: string
}

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (params) => {
    // @ts-ignore
    const { categoryId, sortType, currentPage } = params
    const res = await axios.get(
      `https://6756ce9ec0a427baf94a792f.mockapi.io/items?page=${currentPage}&limit=3&category=` +
        categoryId +
        `&sortBy=${sortType.sortProperty}&order=asc`
    )

    return res.data
  }
)

const initialState: IPizzaState = {
  items: [],
  status: '',
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'succes'
    })
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = 'error'
    })
  },
})

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer
