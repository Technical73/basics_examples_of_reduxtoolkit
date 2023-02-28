import { createSlice } from "@reduxjs/toolkit";

const initialTheme = "";

export const useTheme = createSlice({
  name: "theme",
  initialState: { value: initialTheme },
  reducers: {
    ChangerTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ChangerTheme } = useTheme.actions;
export default useTheme.reducer;
