import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Data{
  row: number;
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


export const testDataSlice = createSlice({
    name: 'testData',
    initialState: [{row:0,idx:0,name:"",family:"",age:0,weight:0}],
    reducers: {
      setTestDataList: (state, action) => {//배열에 저장
        const datas: Data[] = action.payload.data;
        for (let i = 0; i < datas.length; i++){
          state[i] = datas[i];
        }
      },
      setTestDataInfo: (state, action) => {//배열중 하나 저장
        const data : Data = action.payload;
        state.push(data);
            
      },
      deleteDataInfo: (state, action) => {//row번호로 배열 하나 삭제
        const row : number = action.payload;
        state.splice(row,1);
      },
      updateDataInfo: (state, action) => {//row 번호로 배열 하나 수정
        const data: Data = action.payload; 
        const row: number = data.row;
        state[row] = data;


      }
    }
  },
);

export const { setTestDataList,setTestDataInfo,deleteDataInfo,updateDataInfo } = testDataSlice.actions;
export default testDataSlice.reducer;