import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  tabIndex: 0,
  searchExpanded: false,
  searchText: '',
  pageIndex: 1,
}

const roseIndexSlice = createSlice({
  name: "roseIndex",
  reducers: {
    updateTabIndex: (state, action) => {
      state.tabIndex = action.payload
    },
    toggleSearchExpanded: (state) => {
      state.searchExpanded = !state.searchExpanded
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload
    },
    updatePageIndex: (state, action) => {
      state.pageIndex = action.payload
    }
  },
  initialState
})

export const { updatePageIndex, updateTabIndex, toggleSearchExpanded, updateSearchText } = roseIndexSlice.actions;

export default roseIndexSlice.reducer
