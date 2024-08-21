import {configureStore} from "@reduxjs/toolkit";
import RoseIndexSlice from "./roseIndexSlice.ts";

const store = configureStore({
  reducer: {
    roseIndex: RoseIndexSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
