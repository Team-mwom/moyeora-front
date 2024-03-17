import React, { useCallback, useState } from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import 'styles/sign/signUp.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
// import Accordion from 'react-bootstrap/Accordion';
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

interface Data {
	name: String,
	nickName: String,
	email: String,
	kakao:String
}

const SignUpPage = () => {
	 const navigate = useNavigate();
	
	const data: Data = { name: '', nickName: '', email: '', kakao: useLocation().state }


	const signup = useCallback(() => { 
		axios.post('/api/all/signup', data).then((res) => { 
			

			axios({// 카카오 아이디를 통해 디비검색하고 
				method: "GET",
				url: `/api/all/signIn?kakaoId=${data.kakao}`,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					"Access-Control-Allow-Origin": "*",
				},
			}).then((response) => {//있으면 토큰을 발급받아서 저장함
				localStorage.setItem("accessToken", response.data.accessToken);
				localStorage.setItem("refreshToken", response.data.refreshToken);
				navigate('/test/jwt/signInInfo');
			}).catch((err) => { })
				
				
		}).catch((err) => { alert('심각한 애러')})

		
	},[]);
		
	const onChangeName =useCallback((e: any) => { 
		data.name = e.target.value;
	}, []);
	const onChangeNickName =useCallback((e: any) => { 
		data.nickName = e.target.value;
	},[]);
		
	const onChangeEmail =useCallback((e: any) => { 
		data.email = e.target.value;
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
							<InputGroup.Text id="inputGroup-sizing-sm" >이름</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeName}
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">닉네임</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeNickName}
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">이메일</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeEmail}
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
