import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.cartQuantity += 1;
      state.total += action.payload.price * action.payload.productQuantity;
    },
    removeProduct: (state, action) => {
      state.products = [];
      state.cartQuantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
