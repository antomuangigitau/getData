import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './feature/apiSlice';
export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
