import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAutennticated: false,
  user: null,
  date: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setUser: (state, action) => {
      state.isLoading = false;  
      state.user = action.payload;
      state.isAutennticated = true;
      state.date = new Date();
    },
    logout: (state) => {
        state.user = null;
        state.isAutennticated = false;
        state.date = null;
    }
  },
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer