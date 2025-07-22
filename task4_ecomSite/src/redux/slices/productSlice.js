// redux/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearProductDetails: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setProductDetails, clearProductDetails } = productSlice.actions;
export default productSlice.reducer;
