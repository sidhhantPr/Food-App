import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartMenu: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartMenu.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartMenu = state.cartMenu.filter(
        (data) => data.name != action.payload.name
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
