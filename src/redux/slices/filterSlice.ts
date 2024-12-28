import { createSlice } from '@reduxjs/toolkit'

export type IFilterState = {
  searchValue: string
  categoryId: number
  sortType: {
    name: string
    sortProperty: string
  }
}

const initialState: IFilterState = {
  searchValue: '',
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortType(state, action) {
      state.sortType = action.payload
    },
  },
})

export const { setCategoryId, setSortType, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
