import {createSlice} from '@reduxjs/toolkit';

//before adding to cart check if existed then add count

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addCart: (state, action) => {
        const newItem = {
          id: Date.now(),
          cart: action.payload,
          quantity: 1
        }
        state.push(newItem)
      },
      deleteCart: (state, action) => {
          return state.filter((cart) => cart.id !== action.payload)
      },
      updateCart: (state, action) => {
        const update = state.filter((cart) => cart.id === action.payload)
        update[0].quantity ++
        return state
      }
    }
});

export const {addCart, deleteCart, updateCart} = cartSlice.actions;

export default cartSlice.reducer;