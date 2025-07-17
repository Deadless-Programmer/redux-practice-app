// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'
import cardReducer from "./cardSlice"
// console.log(counterReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
     cards: cardReducer
  }
})
