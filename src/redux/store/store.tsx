import { configureStore } from '@reduxjs/toolkit';
import testDataSlice from '../slices/testDataSlice';

export const store = configureStore({
  reducer: {
    testData:testDataSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;