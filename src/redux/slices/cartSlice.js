import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  cart: [],
  totalSum: 0,
  totalCount: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem (state, action) {
      const idx = state.cart.findIndex(el => el.id === action.payload.id);
      if (idx !== -1) {
        state.cart[idx].countInCart++;
      } else {
        action.payload.countInCart++;
        state.cart.push(action.payload);
      }
      state.totalSum = _.sumBy(state.cart, (el) => el.price * el.countInCart);
      state.totalCount = state.cart.reduce((acc, obj) => acc + obj.countInCart, 0);
    },
    // action.payload = id
    decrementItem (state, action) {
      const idx = state.cart.findIndex(el => el.id === action.payload);
      state.cart[idx].countInCart--;
      state.totalCount = state.cart.reduce((acc, obj) => acc + obj.countInCart, 0);
      state.totalSum = _.sumBy(state.cart, (el) => el.price * el.countInCart);
      if (state.cart[idx].countInCart === 0) {
        _.remove(state.cart, (el) => el.id === action.payload);
      }
    },
    removeItem (state, action) {
      _.remove(state.cart, (el) => el.id === action.payload);
      state.totalCount = state.cart.reduce((acc, obj) => acc + obj.countInCart, 0);
      state.totalSum = _.sumBy(state.cart, (el) => el.price * el.countInCart);
    },
    clearCart () {
      return initialState;
    }
  }
});

export const { addItem, removeItem, decrementItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
