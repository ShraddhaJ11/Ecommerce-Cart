import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addItem: function (state, action) {
      state.cart = [...state.cart, action.payload];
    },
    removeItem: function (state, action) {
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = [...filteredItems];
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
