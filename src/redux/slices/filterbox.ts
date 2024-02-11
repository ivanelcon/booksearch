import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import type {SortType, CategoryType} from '../../types'

export type FilterboxStateType = {
  searchInput: string
  search: string
  sort: SortType
  category: CategoryType
}

export const {actions, reducer} = createSlice({
  name: 'filterbox',
  initialState: {
    searchInput: '',
    search: '',
    sort: 'relevance',
    category: 'all'
  } as FilterboxStateType,
  reducers: {
    updateSearchInput: (state, action: PayloadAction<string>) => {state.searchInput = action.payload},
    updateSearch: (state, action: PayloadAction<string>) => {state.search = action.payload},
    updateSort: (state, action: PayloadAction<SortType>) => {state.sort = action.payload},
    updateCategory: (state, action: PayloadAction<CategoryType>) => {state.category = action.payload}
  }
})