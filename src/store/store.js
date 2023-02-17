import { configureStore } from '@reduxjs/toolkit'
import tripsSlice from './tripsSlice'
export const store = configureStore({
  reducer: {
    tripsSlice:tripsSlice
},
})