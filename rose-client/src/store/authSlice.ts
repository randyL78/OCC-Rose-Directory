import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: null,
  username: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.username = null
      state.token = null
    },
    login: (state, action) => {
      state.username = action.payload.username
      state.token = action.payload.token
    }
  }
})

export const { logout, login } = authSlice.actions;

export default authSlice.reducer
