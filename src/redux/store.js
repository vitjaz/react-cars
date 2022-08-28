import { configureStore } from '@reduxjs/toolkit';
import categorySortReducer from './slices/categorySortSlice';
import cartReducer from './slices/cartSlice';
import carSlice from './slices/carSlice';

export const store = configureStore({
  reducer: {
    filter: categorySortReducer,
    cart: cartReducer,
    car: carSlice
  }
});
