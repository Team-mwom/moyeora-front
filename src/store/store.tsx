

import { configureStore } from '@reduxjs/toolkit';
import testDataSlice from './slices/testDataSlice';
import loggerMiddleware from 'services/loggerMiddleware';
import profileConfigSlice from './slices/profileConfigSlice';

export const store = configureStore({
  reducer: {
    testData: testDataSlice,
    profileConfig:profileConfigSlice,
  },
  
  
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleware)



});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;