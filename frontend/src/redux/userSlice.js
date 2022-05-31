import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: fasle,
  },
  reducers: {
    loginStart: (state) => {
      //First set isFetching to true
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      //trying to login if user is true then set isFetching to fasle
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = fasle;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
