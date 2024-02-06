import { configureStore } from '@reduxjs/toolkit';
import cityDataByCategoryReducer from '../slices/cityDataByCategorySlice';
import testDataSlice from 'redux/slices/testDataSlice';

export const store = configureStore({
  reducer: {
    cityDataByCategory: cityDataByCategoryReducer,
    testData:testDataSlice
  },
});