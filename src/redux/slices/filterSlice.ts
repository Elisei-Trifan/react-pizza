import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Sort = {
  name: string
  sortProperty: string
}
export interface IFilterState {
  searchValue: string
  categoryId: number
  sortType: Sort
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload
    },
  },
})

export const { setCategoryId, setSortType, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
