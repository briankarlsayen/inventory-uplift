import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      id: 0,
      name: '',
      username: '',
      cart: [],
      logged: false
  },
  reducers: {
    nameChange: (state, action) => {
      state.name = action.payload
    },
    userNameChange: (state, action) => {
      state.username = action.payload
    },
    userState: (state, action) => {
      state.logged = action.payload
    }
  }
})

export const {nameChange, userNameChange, userState} = userSlice.actions;
export default userSlice.reducer