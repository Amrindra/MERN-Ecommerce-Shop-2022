import { configureStore } from "@reduxjs/toolkit";
import { addProduct } from "./cartRedux";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
