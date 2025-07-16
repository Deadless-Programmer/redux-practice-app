// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
// console.log(counterReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
