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
          quantity: 1,
          checked: false,
        }
        state.push(newItem)
      },
      deleteCart: (state, action) => {
          return state.filter((cart) => cart.id !== action.payload)
      },
      increaseQuantity: (state, action) => {
        const update = state.filter((cart) => cart.id === action.payload)
        update[0].quantity ++
        return state
      },
      decreaseQuantity: (state, action) => {
        const update = state.filter((cart) => cart.id === action.payload)
        update[0].quantity --
        return state
      },
      updateChecked: (state, action) => {
        const updateChecked = state.filter((cart) => cart.id === action.payload)
        updateChecked[0].checked = !updateChecked[0].checked
        return state
      },
    }
});

export const {addCart, deleteCart, increaseQuantity, decreaseQuantity, updateChecked} = cartSlice.actions;

export default cartSlice.reducer;