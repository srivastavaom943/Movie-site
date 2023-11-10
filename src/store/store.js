import { configureStore } from '@reduxjs/toolkit'
import homesSlice from './homesSlice'
export const store = configureStore({
  reducer: {
    home:homesSlice
  },
});