import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      user:[{
        id: '',
        username: '',
        name: '',
        email: '',
        isAdmin: false
      }]
  },
  reducers: {
    //delete <---
    nameChange: (state, action) => {
      state.name = action.payload
    },
    userNameChange: (state, action) => {
      state.username = action.payload
    },
    // --->
    userState: (state, action) => {
      // state.user = action.payload
      const newUser = [{
        id: action.payload._id,
        username: action.payload.username,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      }]
      state.user = newUser
    }
  }
})

export const {nameChange, userNameChange, userState} = userSlice.actions;
export default userSlice.reducer