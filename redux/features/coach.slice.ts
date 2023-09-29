import { createSlice } from "@reduxjs/toolkit";

const initialState = {} as any;

export const counter = createSlice({
  name: "coach",
  initialState,
  reducers: {
    resetCoachDetails: () => initialState,
    updateCoachInformation: (
      state,
      action: {
        type: string;
        payload: { [key: string]: string | null | boolean }; // Using an index signature to allow any string key.
      }
    ) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
});

export const { updateCoachInformation, resetCoachDetails } = counter.actions;
export default counter.reducer;
