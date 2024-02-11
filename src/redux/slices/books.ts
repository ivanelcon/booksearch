import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import fetchBooksThunk, {PayloadType} from '../thunks/fetchBooksThunk'
import type {BookType} from '../../types'

export type BooksStateType = {
  totalItems: number
  books: BookType[]
  pending: boolean
  error: null | string
}

export const {actions, reducer} = createSlice({
  name: 'books',
  initialState: {
    totalItems: 0,
    books: [],
    pending: false,
    error: null
  } as BooksStateType,
  reducers: {
  },
  extraReducers: builder => builder
    .addCase(fetchBooksThunk.pending, state => {
      state.pending = true
    })
    .addCase(fetchBooksThunk.fulfilled, (state, action: PayloadAction<PayloadType>) => {
      const {add, totalItems, books} = action.payload
      state.pending = false
      state.error = null
      state.totalItems = totalItems
      if (add) {
        state.books = [...state.books, ...books]
      }
      else {
        state.books = books
      }
    })
    .addCase(fetchBooksThunk.rejected, (state, action) => {
      state.pending = false
      state.books = []
      state.error = action.error.message || 'error'
    })
})