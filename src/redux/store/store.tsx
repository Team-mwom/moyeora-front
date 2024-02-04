import { configureStore } from '@reduxjs/toolkit';
import cityDataByCategoryReducer from '../slices/cityDataByCategorySlice';

export const store = configureStore({
  reducer: {
    cityDataByCategory: cityDataByCategoryReducer,
  },
});