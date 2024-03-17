import React, { useCallback, useState } from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import 'styles/sign/signUp.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
// import Accordion from 'react-bootstrap/Accordion';
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

interface Data {
	name: String,
	nickName: String,
	email: String,
	kakao:String
}

const SignUpPage = () => {
	
	
	const [data,setData]= useState<Data>({
		name:"",nickName:"",email:"",kakao:""
	}); 


	const signup = useCallback(() => { 
		console.log(data);
	},[]);
		
		
		


	return (
		<div className='common_full'>
			<Header/>
			<div className='common_container'>
				<div className='signUp_title'>
					회원가입
				</div>
				<div className='signUp_info_container'>
					<div className='signUp_info'>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">이름</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">닉네임</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">이메일</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								/>
						</InputGroup>

						{/* <Accordion defaultActiveKey="0" className="mb-3">
						<Accordion.Item eventKey="0">
							<Accordion.Header>서비스 이용약관</Accordion.Header>
							<Accordion.Body>
								내용
							</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
							<Accordion.Header>개인정보처리방침</Accordion.Header>
							<Accordion.Body>
								내용
							</Accordion.Body>
						</Accordion.Item>
						</Accordion>
						
					<FormCheckInput  className="mb-3"/> 가입에 동의합니다. */}
					</div>
				</div>
				<div className='signUp_button_container'>
					<Button variant="dark" onClick={signup}>회원가입</Button>
				
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default SignUpPage;
