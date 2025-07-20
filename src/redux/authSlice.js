import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },

    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
