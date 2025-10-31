import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import myListReducer from './myListSlice'

export const store = configureStore({
  reducer: {
    titles: searchReducer,
    myList: myListReducer
  },
})