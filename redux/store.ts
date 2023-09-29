import { configureStore } from "@reduxjs/toolkit";
import coachReducer from "./features/coach.slice";
import studentReducer from "./features/student.slice";

export const store = configureStore({
  reducer: {
    coachReducer,
    studentReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
