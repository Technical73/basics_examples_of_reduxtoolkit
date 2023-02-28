import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  age: 0,
  email: "",
};
export const useDetails = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    Sketch: (state, action) => {
      state.value = action.payload;
    },
    Logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { Sketch, Logout } = useDetails.actions;
export default useDetails.reducer;
