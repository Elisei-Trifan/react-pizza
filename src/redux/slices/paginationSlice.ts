import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPaginationState {
  currentPage: number
}

const initialState: IPaginationState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = paginationSlice.actions
export default paginationSlice.reducer
