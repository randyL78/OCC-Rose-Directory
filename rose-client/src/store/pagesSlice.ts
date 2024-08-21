import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  roseIndexTab: 0
}

const pagesSlice = createSlice({
  name: "pages",
  reducers: {
    updateTabIndex: (state, action) => {
      state.roseIndexTab = action.payload
    },
  },
  initialState
})

export const { updateTabIndex } = pagesSlice.actions;

export default pagesSlice.reducer
