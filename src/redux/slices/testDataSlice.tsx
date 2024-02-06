import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


export const testDataSlice = createSlice({
    name: 'testData',
    initialState:
    [{
        idx: 1,
        name: "",
        family: "",
        age: 0,
        weight:0,
            
        },],
    reducers: {
        setTestDataSlice: (state, data) => {
         
            state = data.payload.data;
            // console.log(state);
         }
    }
  },
);

export const { setTestDataSlice } = testDataSlice.actions;
export default testDataSlice.reducer;