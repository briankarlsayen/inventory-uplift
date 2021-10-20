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
    }
  }
})

export const {nameChange, userNameChange} = userSlice.actions;
export default userSlice.reducer