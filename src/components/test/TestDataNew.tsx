import React, { useEffect } from 'react';
import axios from 'axios';




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
		// alert(
		// 	this.state.age+
		// 	this.state.name+
		// 	this.state.family+
		// 	this.state.weight
		// ); 
		axios.post('/insertInfo',this.state)
    	.then((response) => console.log(123))
      	.catch((error) => console.log(error));
		event.preventDefault();
			
	}

	render(){
		return (
			<div className='sibal'>
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

