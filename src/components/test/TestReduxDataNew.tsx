import React, { useCallback, useState,useRef} from 'react';
import axios from 'axios';
//redux
import {   useDispatch   } from "react-redux";
import { setTestDataInfo } from "../../redux/slices/testDataSlice";



const TestReduxDataNew = () => {
	const [data, setData] = useState({});//수정을 위한 정보를 data에 저장한다.
	const dispach = useDispatch();
	const resetBtn = useRef<HTMLInputElement>(null);
	
	const changeData = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
			const form = e.target.form!;
			setData({
				idx: 0,
				name: form.name.value,
				age: form.age.value,
				family: form.family.value,
				weight: form.weight.value,
			})
		}, []);
		
	


	const insertData = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
		resetBtn.current!.click();

	}

	return (
		<div className='data_div'>
			<form className='data_add_form' onSubmit={insertData} onChange={changeData}>
				age:<input type='text' name='age'/>
				name:<input type='text' name = 'name'/>
				family:<input type='text' name = 'family'/>
				weight:<input type='text' name = 'weight'/>
				<input type='submit' value='추가' />
				<input type='reset'  ref={resetBtn} hidden/>
			</form>
		
		</div>
		);
};

export default TestReduxDataNew;


