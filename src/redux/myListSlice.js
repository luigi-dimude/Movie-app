import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  titles: [],
}

export const myListSlice = createSlice({
  name: 'myListTitles',
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.titles.push(action.payload)
    },
    removeFromList: (state, action) => {
      state.titles = state.titles.filter(
        (title) => title.imdbID !== action.payload
      )
    },
  },
})

export const { addToList, removeFromList } = myListSlice.actions
export default myListSlice.reducer
