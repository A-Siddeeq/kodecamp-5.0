import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      const index = action.payload.index;
      state.wishlist = state.wishlist.filter((item, i) => i !== index);
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
