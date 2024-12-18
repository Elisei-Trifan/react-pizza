import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  count: 5,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = filterSlice.actions

export default filterSlice.reducer
