import React, { useState } from 'react';
import axios from 'axios';
//redux
import {   useDispatch   } from "react-redux";
import { setTestDataInfo } from "../../redux/slices/testDataSlice";



const TestReduxDataNew = () => {
	const [data, setData] = useState({idx:1,name:'',family:'',age:0,weight:0});//수정을 위한 정보를 data에 저장한다.
	const dispach = useDispatch();
	 function changeData(event: any) {//form 데이터 변화시 state에 저장됨

		const form = event.target.form; 
		setData({
			idx:0,
			age:form.age.value,
			name:form.name.value,
			family:form.family.value,
			weight:form.weight.value,	
		 });
		 		
	}


	function insertData(event:any) {//form onSubmit 추가 버튼 클릭시
		axios.post('/api/insertTestInfo', data)
			.then((response) => {
				dispach(setTestDataInfo(response.data));
			}
			)
			.catch((error) => {
				alert("정확한 값을 입력해라 죽고싶지 않으면ㅎㅎ")
				console.log(error);
			 }
		);
		event.target.reset.click();
		event.preventDefault();//서브밋안함
			
	}



	return (
			<div className='data_div'>
					<form className='data_add_form' onSubmit={insertData} onChange={changeData}>
						age:<input type='text' name='age'/>
						name:<input type='text' name = 'name'/>
						family:<input type='text' name = 'family'/>
						weight:<input type='text' name = 'weight'/>
						<input type='submit' value='추가' />
						<input type='reset' name='reset' hidden/>
					</form>
				
			</div>
		);
};

export default TestReduxDataNew;


