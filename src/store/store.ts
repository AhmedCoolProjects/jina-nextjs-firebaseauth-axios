import { configureStore } from "@reduxjs/toolkit";
import { userReducer, modeReducer } from "./reducers";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    mode: modeReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
