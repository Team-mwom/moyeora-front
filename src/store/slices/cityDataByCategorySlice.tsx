import { createSlice } from '@reduxjs/toolkit';

export const cityDataByCategorySlice = createSlice({
  name: 'cityDataByCategory',
  initialState: null,
  reducers: {
    setCityDataByCategory: (state, action) => action.payload,
  },
});

export const { setCityDataByCategory } = cityDataByCategorySlice.actions;
export default cityDataByCategorySlice.reducer;