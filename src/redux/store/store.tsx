

import { configureStore } from '@reduxjs/toolkit';
import testDataSlice from '../slices/testDataSlice';
import loggerMiddleware from 'lib/loggerMiddleware';
export const store = configureStore({
  reducer: {
    testData: testDataSlice,
    
  },
  
  
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleware)



});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;