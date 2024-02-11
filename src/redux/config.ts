import {configureStore} from '@reduxjs/toolkit'
import {reducer as booksReducer} from './slices/books'
import {reducer as filterboxReducer} from './slices/filterbox'
import {TypedUseSelectorHook, useSelector as selector, useDispatch as dispatch} from 'react-redux'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filterbox: filterboxReducer
  }
})

export type Dispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>

export const useSelector = selector as TypedUseSelectorHook<State>
export const useDispatch = () => dispatch<Dispatch>()

export default store