// Slices/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const VariantSlice = createSlice({
  name: 'variant',
  initialState: {
    value: localStorage.getItem('variantInfo')
      ?
      JSON.parse(localStorage.getItem('variantInfo'))
      :
      null,
  },
  reducers: {
    variantInfo: (state, action) => {
      state.value = action.payload
    },
  }
});

export const { variantInfo } = VariantSlice.actions;

export default VariantSlice.reducer;
