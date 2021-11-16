import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addCart: (state, action) => {
          const newItem = {
              id: Date.now(),
              cart: action.payload
          };
          state.push(newItem)
      },
      deleteCart: (state, action) => {
          return state.filter((cart) => cart.id !== action.payload)
      }
    }
});

export const {addCart, deleteCart} = cartSlice.actions;

export default cartSlice.reducer;