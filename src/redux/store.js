import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/user-reducer'
import cartReducer from './reducers/cart-reducer'
import {combineReducers} from "redux"; 

const rootReducer = combineReducers({
  users: userReducer,
  cart: cartReducer
})

export default configureStore({
  reducer: rootReducer
})