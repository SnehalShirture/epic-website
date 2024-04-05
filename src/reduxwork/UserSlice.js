import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: {},
  IsRegister: false,
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.UserData = action.payload;
      state.IsRegister = true;
    },
  },
});

export const { register } = UserSlice.actions;
export default UserSlice.reducer;

