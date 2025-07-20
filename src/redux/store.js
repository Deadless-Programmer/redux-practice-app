// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './authSlice'

// console.log(counterReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    
  }
})
