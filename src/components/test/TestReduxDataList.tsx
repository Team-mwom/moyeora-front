import React, { useEffect } from 'react';
import axios from 'axios';

//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setTestDataList,deleteDataInfo,updateDataInfo } from "../../redux/slices/testDataSlice";

//style
import "styles/test/testDataList.css"
import "styles/test/testDataNew.css"


const TestReduxDataList = () => {
  const dispach = useDispatch();

    

  const data= useSelector((state: RootState) => {
    return state.testData
  });

  useEffect(
    () => {
      axios.get('/api/selectTestAllList')
      .then((response) => {
        dispach(setTestDataList(response));
      }).catch((error) => console.log(error));
    },[]
  );
    //useEffect(함수,[]) 두번째 매개변수로 []를 넣어준다 이러면 한번실행된다.
    //db data 가져와서 dispach하면 랜더링이 다시 되면서 또 이 함수 실행되고
    //이 함수 수 실행 되면 또 dispach하고 또 랜더링하고 또또또 무한 루프길래 찾아봤음
  

  function changeClick(e: any) {//수정버튼
    const form =  e.target.form;
    form.querySelector('.data_origin_age').style.display = 'none';   form.querySelector('.data_origin_name').style.display = 'none';
    form.querySelector('.data_origin_family').style.display = 'none';   form.querySelector('.data_origin_weight').style.display = 'none';
    form.querySelector('.change_btn').style.display = 'none';   form.querySelector('.cancel_btn').style.display = 'inline-block';   form.querySelector('.save_btn').style.display = 'inline-block';
    form.new_age.style.display = "inline-block";   form.new_name.style.display = "inline-block";   form.new_family.style.display = "inline-block";   form.new_weight.style.display = "inline-block";
    form.new_age.value = form.data_age.value; form.new_name.value = form.data_name.value; form.new_family.value = form.data_family.value; form.new_weight.value = form.data_weight.value;
  
 
 }
  function cancelClick(e: any) {//취소버튼
    const form =  e.target.form;
    form.querySelector('.data_origin_age').style.display = 'inline-block';   form.querySelector('.data_origin_name').style.display = 'inline-block';
    form.querySelector('.data_origin_family').style.display = 'inline-block';   form.querySelector('.data_origin_weight').style.display = 'inline-block';
    form.querySelector('.change_btn').style.display = 'inline-block';   form.querySelector('.cancel_btn').style.display = 'none';   form.querySelector('.save_btn').style.display = 'none';
    form.new_age.style.display = "none";   form.new_name.style.display = "none";   form.new_family.style.display = "none";   form.new_weight.style.display = "none";
  
  }
  function delClick(e:any) {//삭제버튼
    axios.get('/api/deleteTestInfo?idx='+e.target.form.data_idx.value)
      .then((response) => { dispach(deleteDataInfo(e.target.form.data_row.value)); console.log(data) })
    .catch((error) => console.log(error));
  }
  function saveClick(e: any) {//저장버튼
    const form = e.target.form;
    const saveData= {
      idx: form.data_idx.value,
      age: form.new_age.value,
      name: form.new_name.value,
      family: form.new_family.value,
      weight: form.new_weight.value,
      row:form.data_row.value,
    } 

    axios.post('/api/updateTestInfo',saveData)
      .then((response) => {
        dispach(updateDataInfo(saveData))
        cancelClick(e);
     })
    .catch((error) => console.log(error));
  }

	return (
    <div className='data_list'>
      {
        data && data.map((rowData:any,row:number) => (
          <form className="data_div data_form">
            <input name='data_row' type='hidden' value={row} /><input name ='data_idx' type='hidden' defaultValue={rowData.idx}/><input name='data_age' type='hidden' value={rowData.age} />
            <input name='data_name' type='hidden' value={rowData.name} /><input name='data_family' type='hidden' value={rowData.family} /><input name='data_weight' type='hidden' value={rowData.weight}/>
            age : <span className='data data_origin_age'> {rowData.age}</span> <input name = 'new_age' className='data_change_input' type='text' defaultValue={rowData.age}/>
            name : <span className='data data_origin_name'> {rowData.name}</span> <input name='new_name' className='data_change_input' type='text' defaultValue={rowData.name}/>
            family :<span className='data data_origin_family'> {rowData.family}</span> <input name='new_family' className='data_change_input' type='text' defaultValue={rowData.family}/>
            weight :<span className='data data_origin_weight'> {rowData.weight}</span> <input name='new_weight' className='data_change_input' type='text' defaultValue={rowData.weight}/>
            <input className='change_btn' type='button' onClick={changeClick} value='수정' />
            <input className='cancel_btn' type='button' onClick={cancelClick} value='취소'/>
            <input className='save_btn' type='button'  onClick={saveClick} value='저장'/>
            <input className='del_btn' type='button'  onClick={delClick} value='삭제'/>
        </form>
          )
          )
      }
      </div>
		
	);
};

export default TestReduxDataList;
