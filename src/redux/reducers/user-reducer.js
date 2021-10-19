import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      id: 0,
      name: '',
      username: '',
      cart: []
  },
  reducers: {
    nameChange: (state, action) => {
      state.name = action.payload
    },
    userNameChange: (state, action) => {
      state.username = action.payload
    },
    cartChange: (state, action) => {
      const cardItem = {
        id: Date.now(),
        cart: action.payload
      }
      state.cart.push(cardItem)
    }
    //remove cart
  }
})

export const {nameChange, userNameChange, cartChange} = userSlice.actions;
export default userSlice.reducer