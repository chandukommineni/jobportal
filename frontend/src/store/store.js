// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "./dataSlice"
import jobReducer from './jobSlice';
export const store = configureStore({
  reducer: {
    data:dataReducer,
    job:jobReducer
  },
});
