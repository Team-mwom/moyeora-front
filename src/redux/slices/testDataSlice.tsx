import { createSlice } from '@reduxjs/toolkit';


interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


type InitialState = {
    datas: Data;
}



const initialState: InitialState = {
    datas: {
        idx: 0,
        name: "",
        family: "",
        age: 0,
        weight:0,
    }
}

export const testDataSlice = createSlice({
    name: 'cityDataByCategory',
    initialState,
    reducers: {
    setTestDataSlice: (state, action) => action.payload,
  },
});

export const { setTestDataSlice } = testDataSlice.actions;
export default testDataSlice.reducer;