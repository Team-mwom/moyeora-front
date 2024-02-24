import React, { useEffect } from 'react';
import axios from 'axios';
import TestDataList from './TestDataList';




export default class TestDataNew extends React.Component<any,any> {
	constructor(props:any) {//이것이 리액트 데이터 바인딩??
		super(props);
		this.state = {
			age: '',
			name: '',
			family: '',
			weight: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event:any) {//form 데이터 변화시 state에 저장됨
		this.setState({
			age: event.target.form.age.value,
			name: event.target.form.name.value,
			family: event.target.form.family.value,
			weight: event.target.form.weight.value,	
		});
	}



	handleSubmit(event:any) {//form onSubmit 추가 버튼 클릭시

		axios.post('/api/insertTestInfo', this.state)
			.then((response) => {
				// let btn = "<input className='change_btn' type='button' onClick={changeClick} value='수정' /><input className='cancel_btn' type='button' onClick={cancelClick} value='취소'/><input className='save_btn' type='button'  value='저장'/><input className='del_btn' type='button'  onClick={delClick} value='삭제'/>"
				// document.querySelector(".data_list")!.insertAdjacentHTML("beforeend",
				// 	'<form class="data_div">idx :<span> ' + response.data.idx +
				// 	'age :</span><span>' + response.data.age + '</span><span>name :' + response.data.name +
				// 	'family :</span><span> ' + response.data.family +
				// 	'weight :</span><span> ' + response.data.weight + '</span>'+btn+'</form>');
				
			}
			)
      	.catch((error) => console.log(error));
		event.preventDefault();
			
	}

	render(){
		return (
			<div className='data_div'>
					<form className='data_add_form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
						age:<input type='text' name = 'age'/>
						name:<input type='text' name = 'name'/>
						family:<input type='text' name = 'family'/>
						weight:<input type='text' name = 'weight'/>
						<input type='submit' value='추가' />
					</form>
				
			</div>
		);
	}
	
	
}

