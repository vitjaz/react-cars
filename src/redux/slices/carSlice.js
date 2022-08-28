import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setItems (state, action) {
      state.items = action.payload.items;
    }
  }
});

export const { setItems } = carSlice.actions;

export default carSlice.reducer;
