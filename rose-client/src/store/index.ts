import {configureStore} from "@reduxjs/toolkit";
import pagesSlice from "./pagesSlice";

const store = configureStore({
  reducer: {
    pages: pagesSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
