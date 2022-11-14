import { configureStore } from '@reduxjs/toolkit';
import plants from './plantsSlices'
import cart from './cartSlices';

export const store = configureStore({
    reducer: {
      plants,
      cart
    },
  })