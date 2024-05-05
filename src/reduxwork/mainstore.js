import { configureStore } from "@reduxjs/toolkit";

import userreducer from "./UserSlice";

// const rootReducer = combineReducers({
//   user: userReducer,
// });

export const MainStore = configureStore({
  reducer: {
    user: userreducer,
  },
});
