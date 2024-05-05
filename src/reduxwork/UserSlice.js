import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: {},
  IsRegister: false,
  IsLogin: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.UserData = action.payload;
      state.IsRegister = true;
    },
    logout: (state) => {
      state.UserData = {};
      state.IsLogin = false;
    },
    login: (state, action) => {
      state.UserData = action.payload;
      state.IsLogin = true;
    },
  },
});

export const { register, logout, login } = UserSlice.actions;
export default UserSlice.reducer;
