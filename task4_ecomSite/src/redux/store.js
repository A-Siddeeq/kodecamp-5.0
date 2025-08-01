import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
    product: productSlice,
  },
});

export default store;
