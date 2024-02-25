import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import axios from 'axios';

interface Data{
  idx: number;
  name: string;
  family: string;
  age: number;
  weight: number;
}


const TestDataList = () => {
  const [data, setData] = useState<Data[] | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  let mybatis = 'false';
  if (searchParams.get('mybatis')!=null)
    mybatis = (String)(searchParams.get('mybatis'));

  	useEffect(() => {
    axios.get('/api/selectTestAllList')
    .then((response) => setData(response.data as Data[]))
      .catch((error) => console.log(error));
   
    }, []);
    
  function changeClick(e:any) {
    e.target.form.querySelector('.data_origin_age').style.display = 'none';    e.target.form.querySelector('.data_origin_name').style.display = 'none';
    e.target.form.querySelector('.data_origin_family').style.display = 'none';    e.target.form.querySelector('.data_origin_weight').style.display = 'none';
    e.target.form.querySelector('.change_btn').style.display = 'none';    e.target.form.querySelector('.cancel_btn').style.display = 'inline-block';    e.target.form.querySelector('.save_btn').style.display = 'inline-block';
    e.target.form.new_age.style.display = "inline-block";    e.target.form.new_name.style.display = "inline-block";    e.target.form.new_family.style.display = "inline-block";    e.target.form.new_weight.style.display = "inline-block";
  }
  function cancelClick(e:any) {
    e.target.form.querySelector('.data_origin_age').style.display = 'inline-block';    e.target.form.querySelector('.data_origin_name').style.display = 'inline-block';
    e.target.form.querySelector('.data_origin_family').style.display = 'inline-block';    e.target.form.querySelector('.data_origin_weight').style.display = 'inline-block';
    e.target.form.querySelector('.change_btn').style.display = 'inline-block';    e.target.form.querySelector('.cancel_btn').style.display = 'none';    e.target.form.querySelector('.save_btn').style.display = 'none';
    e.target.form.new_age.style.display = "none";    e.target.form.new_name.style.display = "none";    e.target.form.new_family.style.display = "none";    e.target.form.new_weight.style.display = "none";
  }
  function delClick(e:any) {
    axios.get('/api/deleteTestInfo?idx='+e.target.form.data_idx.value)
    .then((response) => e.target.form.style.display='none')
      .catch((error) => console.log(error));
  }

	return (
	
    <div className='data_list'>
      <div className="data_div">{mybatis=='true'?'MyBatis':'JPA'}</div>  
      {
        data && data.map(rowData => (
          <form className="data_div data_form">
          idx : <span className='data data_origin_idx'> {rowData.idx}</span> <input name = 'data_idx' className='data_change_input' type='hidden' value={rowData.idx}/>
          age : <span className='data data_origin_age'> {rowData.age}</span> <input name = 'new_age' className='data_change_input' type='text' value={rowData.age}/>
          name : <span className='data data_origin_name'> {rowData.name}</span> <input name='new_name' className='data_change_input' type='text' value={rowData.name}/>
          family :<span className='data data_origin_family'> {rowData.family}</span> <input name='new_family' className='data_change_input' type='text' value={rowData.family}/>
          weight :<span className='data data_origin_weight'> {rowData.weight}</span> <input name='new_weight' className='data_change_input' type='text' value={rowData.weight}/>
          <input className='change_btn' type='button' onClick={changeClick} value='수정' />
          <input className='cancel_btn' type='button' onClick={cancelClick} value='취소'/>
          <input className='save_btn' type='button'  value='저장'/>
          <input className='del_btn' type='button'  onClick={delClick} value='삭제'/>
          
          </form>
          )
          )
      }
      </div>
		
		
	);
};

export default TestDataList;