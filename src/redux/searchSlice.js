import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  titles: null,
}

export const searchSlice = createSlice({
  name: 'searchTitles',
  initialState,
  reducers: {
    setTitles: (state, action) => {
      state.titles = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTitles } = searchSlice.actions

export default searchSlice.reducer