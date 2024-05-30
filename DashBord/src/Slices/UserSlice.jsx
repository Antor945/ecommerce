// Slices/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem('userInfo')
            ?
            JSON.parse(localStorage.getItem('userInfo'))
            :
            null,
  },
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload
    },
  }
});

export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
