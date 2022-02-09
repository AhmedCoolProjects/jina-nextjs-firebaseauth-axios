import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  appMode: "dark" | "light";
}

const initialState: ModeState = {
  appMode: "dark",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeModeAction: (state) => {
      state.appMode = state.appMode === "dark" ? "light" : "dark";
    },
  },
});

export const { changeModeAction } = modeSlice.actions;
// selector
export const modeReducer = modeSlice.reducer;
