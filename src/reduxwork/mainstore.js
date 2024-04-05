import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userreducer from "./UserSlice";

const rootReducer = combineReducers({
  user: userreducer,
});

export const MainStore = configureStore({
  reducer: rootReducer,
});
