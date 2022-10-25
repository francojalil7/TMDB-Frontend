import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import user from "./user";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    user: user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
