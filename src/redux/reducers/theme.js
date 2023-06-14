import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("isDark"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    currentTheme: (state) => {
      state.value = !state.value;
      //   localStorage.setItem("isdark", state.value);
      //   console.log(state.value);
    },
  },
});
export const { currentTheme } = themeSlice.actions;
export default themeSlice.reducer;
