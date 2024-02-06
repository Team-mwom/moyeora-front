import * as ReactDOMClient from "react-dom/client";
import React from 'react';
import { useSelector, useDispatch ,Provider  } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setTestDataSlice } from "../../redux/slices/testDataSlice";
import axios from 'axios';


//compo
import TestDataList from 'components/test/TestDataList';
import TestDataNew from 'components/test/TestDataNew';
//style
import "styles/test/testDataList.css"
import "styles/test/testDataNew.css"
interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}

const TestPage = () => {
  const dispach = useDispatch();

    

  // console.log(useSelector((state: RootState) => {
  //    return state
  // }));
  const data= useSelector((state: RootState) => {
    return state.testData
  });

  function a() {
          axios.get('/api/selectTestAllList')
      .then((response) => {
     
       dispach(setTestDataSlice(response));
        
      }).catch((error) => console.log(error));
        //  dispach(setTestDataSlice(1));
        
   }
   
        


	return (
    <div>
      <input type="button" onClick={a} value="abc"></input>
      {
     data && data.map((rowData : any) => (
      <form className="data_div data_form">
          idx : <span className='data data_origin_idx'> {rowData.idx}</span> <input name = 'data_idx' className='data_change_input' type='hidden' value={rowData.idx}/>
          age : <span className='data data_origin_age'> {rowData.age}</span> <input name = 'new_age' className='data_change_input' type='text' value={rowData.age}/>
          name : <span className='data data_origin_name'> {rowData.name}</span> <input name='new_name' className='data_change_input' type='text' value={rowData.name}/>
          family :<span className='data data_origin_family'> {rowData.family}</span> <input name='new_family' className='data_change_input' type='text' value={rowData.family}/>
          weight :<span className='data data_origin_weight'> {rowData.weight}</span> <input name='new_weight' className='data_change_input' type='text' value={rowData.weight}/>
    
          
          </form>
      ))
    }
     
    </div>
	);
};

export default TestPage;
