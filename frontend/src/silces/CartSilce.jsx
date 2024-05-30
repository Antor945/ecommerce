// Slices/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: localStorage.getItem('cartInfo')
    ? JSON.parse(localStorage.getItem('cartInfo'))
    : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartInfo: (state, action) => {
      const findIndex = state.value.findIndex((item) => item._id === action.payload._id);
      
      if (findIndex) {
        state.value.push(action.payload);
      } else {
       console.log("Antor");
      }

    },
  },
});

export const { cartInfo } = cartSlice.actions;

export default cartSlice.reducer;
