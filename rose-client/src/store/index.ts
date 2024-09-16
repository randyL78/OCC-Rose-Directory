import {configureStore} from "@reduxjs/toolkit";
import RoseIndexSlice from "./roseIndexSlice.ts";
import AuthSlice from "./authSlice.ts";

const store = configureStore({
  reducer: {
    roseIndex: RoseIndexSlice,
    auth: AuthSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
