import { createSlice } from "@reduxjs/toolkit";

const initialState = {} as any;

export const counter = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetStudentDetails: () => initialState,
    updateStudentInformation: (
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

export const { updateStudentInformation, resetStudentDetails } =
  counter.actions;
export default counter.reducer;
