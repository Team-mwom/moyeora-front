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


interface Data {
	name: String,
	nickName: String,
	email: String,
	kakao:String
}

interface CheckData{
	name: boolean,
	nickName: boolean,
	email:boolean
}

const SignUpPage = () => {
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(); 
	const data: Data = { name: '', nickName: '', email: '', kakao: useLocation().state }
	const checkData: CheckData = {name:false,nickName:false,email:false}
	const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

	const check = useCallback(() => { 
		if (!checkData.name) {
			alert("이름을 정확하게 입력해주세요.");
		} else if (!checkData.nickName) {
			alert("닉네임 중복확인이 필요합니다.")
		} else if (!checkData.email) {
			alert("이메일을 정확하게 입력해주세요.");
		} else {
			signup();
		}
	}, []);

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
		
	const onChangeName = useCallback((e: any) => {
		data.name = e.target.value;
		if (e.target.value!='') {
			checkData.name = true;
		} else {
			checkData.name = false;
		}
	}, []);
	const onChangeNickName =useCallback((e: any) => { 
		data.nickName = e.target.value;
		checkData.nickName = false;
	},[]);
		
	const onChangeEmail =useCallback((e: any) => { 
		data.email = e.target.value;
		checkData.email = regex.test(e.target.value); 
	},[]);
		
	const checkNickName = useCallback((e: any) => { 
		axios.get('/api/all/signUp/checkNickName?nickName='+data.nickName).then((res)=>{
			if (res.data) {
				checkData.nickName = true;
				alert("사용 가능 한 닉네임 입니다.");
				
			} else {
				checkData.nickName = false;
				alert("사용 불가능 한 닉네임 입니다.");
				
			}
		})


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
							<Button variant="dark" onClick={checkNickName}>중복확인</Button>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">이메일</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeEmail}
								/>
						</InputGroup>

						
					</div>
				</div>
				<div className='signUp_button_container'>
					<Button variant="dark" onClick={check}>회원가입</Button>
				
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default SignUpPage;
