import React, { useCallback, useState } from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import 'styles/sign/signUp.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { authAxios } from 'utils/auth/authAxios';
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
	   const [cookies, setCookie, removeCookie] = useCookies(); 
	const data: Data = { name: '', nickName: '', email: '', kakao: useLocation().state }


	const signup = useCallback(() => { 
		axios.post('/api/all/signup', data).then((res) => { //회원가입 정보를 서버로 보내서 디비에 저장한다.
			

			axios({// 디비 저장에 성공했다면 카카오 아이디로 로그인을 실시 한다.
				method: "GET",
				url: `/api/all/signIn?kakaoId=${data.kakao}`,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
					"Access-Control-Allow-Origin": "*",
				},
			}).then((response) => {//로그인이 완료되면 토큰을 발급받아서 클라이언트단에 저장함
				
				localStorage.setItem("accessToken", response.data.accessToken);
				  const expires = new Date();
          expires.setMonth(expires.getMonth() + 1);
          setCookie('refreshToken', response.data.refreshToken, { path: '/', expires });
          
				authAxios.post('/api/user/getMyInfo').then((res) => {//사용자 정보를 로컬스토리지에 저장
            const resData = {
              name: res.data.name,
              nickName: res.data.nickName,
              email:res.data.email
          }
          
         
          localStorage.setItem("userInfo",JSON.stringify(resData));
          alert("로그인 성공")
          navigate('/');
          
          })
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
