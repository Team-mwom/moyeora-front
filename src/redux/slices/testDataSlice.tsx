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
        idx: 0,
        name: "",
        family: "",
        age: 0,
        weight:0.0,
            
        },],
    reducers: {
        setTestDataSlice: (state, data) => {
         
            
    
            //state = data.payload.data;
            //state[0]=data.payload.data[0];
            //state[1]=data.payload.data[1];

            const datas: Data[] = data.payload.data;
            for (let i = 0; i < datas.length; i++){
                state[i] = data.payload.data[i];
            }




         }
    }
  },
);

export const { setTestDataSlice } = testDataSlice.actions;
export default testDataSlice.reducer;