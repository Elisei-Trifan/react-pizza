import { createSlice } from '@reduxjs/toolkit'

export type IPaginationState = {
  currentPage: number
}

const initialState: IPaginationState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = paginationSlice.actions
export default paginationSlice.reducer
