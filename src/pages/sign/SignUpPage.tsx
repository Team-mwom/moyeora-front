import React, { useCallback, useEffect, useState } from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Post from 'components/sign/Post';
import 'styles/sign/signUp.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { authAxios } from 'utils/auth/authAxios';
import Modal from "react-modal";

interface Data {
	name: String,
	nickName: String,
	email: String,
	kakao: String
	memberInfoEntity: {

		addressNum: String,
		addressLocation: String,
		addressDetail: String,
		phoneFirst: String,
		phoneMiddle: String,
		phoneLast: String,
		gender: String,
		age:number
	}
}

interface CheckData{
	name: boolean,
	nickName: boolean,
	email: boolean,
	authNumber:boolean,
}

const SignUpPage = () => {



	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(); 
	const data: Data =//서버로 보낼 memberEntity
	{
		name: '', nickName: '', email: '', kakao: useLocation().state, memberInfoEntity: {
			addressNum:"",addressLocation:"",addressDetail:"",phoneFirst:"",phoneMiddle:"",phoneLast:"",gender:"남",age:0
		} }
	const checkData: CheckData =//입력값 채크
		{ name: false, nickName: false, email: false ,authNumber:false}
	const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');//메일 정규 표현식
	let authNumber = "";

	//팝업관련
	const [enroll_company, setEnroll_company] = useState({//주소데이터
	  code:'',
    addr: '',
	});
	const [popup, setPopup] = useState(false);//주소찾기 팝업
	const handleComplete = (data:any) => { 
			setPopup(!popup);
	}
	const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
    , content: {
      width: "750px"
      , height: "510px"
      , margin: "auto"
      , borderRadius: "4px"
      , boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
			, padding: "25px"
		
    }
	}
	//

	const sendSMS = useCallback((e: any) => {//인증번호를 만들어서 문자로 보냅니다.
		var phone = "" + data.memberInfoEntity.phoneFirst + data.memberInfoEntity.phoneMiddle + data.memberInfoEntity.phoneLast;
		authNumber =  String(Math.floor(Math.random()*1000000)).padStart(6, "0");
		axios.post("api/all/sendsms", { "phoneNumber": phone, "authNumber": authNumber }).then(() => { alert("인증번호 전송완료") }).catch(() => { alert("전송 실패") });
	}, []);
	//가입함수
	const signup = useCallback(() => { 
		alert("가입완료");
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
              nickName: res.data.nickName,
              profileImg:res.data.profileImg
          }
          localStorage.setItem("userInfo",JSON.stringify(resData));
          if (localStorage.getItem('returnPath') == null) {
              navigate('/');
            } else {
              const returnPath = localStorage.getItem('returnPath') + "";
              localStorage.removeItem('returnPath');
              navigate(returnPath);
            }
          })
			}).catch((err) => { })
		}).catch((err) => { alert('심각한 애러')})

		
	}, []);
	

	//check	정확히 입력했는지 확인합니다.
	const check = useCallback((e:any) => { 
		const form = e.target.form;
		if (!checkData.name) {
			alert("이름을 정확하게 입력해주세요.");
		} else if (data.memberInfoEntity.age == 0) {
			alert("나이를 정확히 입력해주세요")
		}	else if (!checkData.nickName) {
			alert("닉네임 중복확인이 필요합니다.")
		} else if (!checkData.email) {
			alert("이메일을 정확하게 입력해주세요.");
		} else if (!checkData.authNumber) {
			alert("휴대폰 인증을 완료해주세요");
		} else if (form.addressNum.value == '') {
			alert("주소를 입력해주세요");
		}
		else {
			data.memberInfoEntity.addressNum = form.addressNum.value;
			data.memberInfoEntity.addressLocation = form.addressLocation.value;
			signup();
		}
	}, []);

	const checkNickName = useCallback((e: any) => { //닉네임 중복을 확인합니다.
		if (data.nickName == '') {
			checkData.nickName = false;
			alert("사용 불가능 한 닉네임 입니다.");
		} else {
			axios.get('/api/all/signUp/checkNickName?nickName='+data.nickName).then((res)=>{
				if (res.data) {
					checkData.nickName = true;
					alert("사용 가능 한 닉네임 입니다.");
					
				} else {
					checkData.nickName = false;
					alert("사용 불가능 한 닉네임 입니다.");
					
				}
		})
		}
	}, []);
	
	const checkNumber = useCallback((e: any) => {//숫자만 입력했지 확인합니다.
		e.target.value = e.target.value.replace(/[^0-9]/gi, "");
	}, []);

	const checkAuthNumber = useCallback((e: any) => {//인증번호 확인 버튼
		const form = e.target.form;
		const number = form.authNumber.value;
		
		if (number != '' && number == authNumber) {
			alert("휴대폰 인증 성공");
			const phoneInputs: any[] = Array.from(form.querySelectorAll(".phone"));
			for (var i = 0; i < phoneInputs.length; i++){//인증 성공이라면 입력정보 변경 못하도록 다 막는다.
				phoneInputs[i].disabled = true;
			}
			checkData.authNumber = true;
			
		} else {
			alert("정확한 인증번호를 입력하세요")
		}
		
	}, []);

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
	const onChangeAge =  useCallback((e: any) => { 
		data.memberInfoEntity.age = e.target.value;
	}, []);
	const onChangeGender =  useCallback((e: any) => { 
		data.memberInfoEntity.gender = e.target.value;
	}, []);
	const onChangePhone1 =  useCallback((e: any) => { 
		data.memberInfoEntity.phoneFirst = e.target.value;
	}, []);
	const onChangePhone2 =  useCallback((e: any) => { 
		data.memberInfoEntity.phoneMiddle = e.target.value;
	}, []);
	const onChangePhone3 =  useCallback((e: any) => { 
		data.memberInfoEntity.phoneLast = e.target.value;
	}, []);
	const onChangeAddressDetail = useCallback((e: any) => { 
		data.memberInfoEntity.addressDetail = e.target.value;
	}, []);




	return (
		<div className='common_full'>
			<Header/>
			<form className='common_container'>
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
								<InputGroup.Text id="inputGroup-sizing-sm" >나이</InputGroup.Text>
							<Form.Control
								type="number"
								min='7' max='100'
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onKeyUp={checkNumber}
								onChange={onChangeAge}
								/>
							<InputGroup.Text id="inputGroup-sizing-sm" >성별</InputGroup.Text>
				
								<Form.Check
									inline
									label="남"
									name="group1"
									type='radio'
									value={"남"}
								onChange={onChangeGender}
								defaultChecked
								/>
								<Form.Check
									inline
									label="여"
									name="group1"
									type='radio'
									value={"여"}
									onChange={onChangeGender}
								/>
						
						</InputGroup>
			
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">닉네임</InputGroup.Text>	
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeNickName}
							/>
							<Button variant="outline-dark" onClick={checkNickName} style={{zIndex:0}}>중복확인</Button>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">이메일</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeEmail}
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">휴대폰</InputGroup.Text>
							<Form.Control
								className='phone'
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangePhone1}
							/>
							<InputGroup.Text id="inputGroup-sizing-sm">-</InputGroup.Text>
							<Form.Control
								className='phone'
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangePhone2}
							/>
							<InputGroup.Text id="inputGroup-sizing-sm">-</InputGroup.Text>
							<Form.Control
								className='phone'
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangePhone3}
							/>
							<Button className='phone' variant="outline-dark" onClick={sendSMS} style={{zIndex:0}}>인증번호 전송</Button>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">인증번호</InputGroup.Text>	
							<Form.Control
								className='phone'
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								name = "authNumber"
							/>
							<Button className='phone' variant="outline-dark" onClick={checkAuthNumber} style={{zIndex:0}}>인증번호 확인</Button>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">우편번호</InputGroup.Text>
							<Form.Control
								name = "addressNum"
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								value={enroll_company.code}
								disabled
							/>
							<InputGroup.Text id="inputGroup-sizing-sm">주소</InputGroup.Text>
							<Form.Control
								name = "addressLocation"
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								value={enroll_company.addr}
								disabled
							/>
							<Button className='btn' variant="outline-dark" onClick={handleComplete}  style={{zIndex:0}}>주소찾기</Button>
							
						</InputGroup>
							<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">상세주소</InputGroup.Text>
							<Form.Control
								name = "addressDetail"
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeAddressDetail}
							/>
							
						</InputGroup>

						
				<Modal isOpen={popup} style={customStyles}>
							<Post company={enroll_company} setcompany={setEnroll_company} setPopup={setPopup}></Post>
				</Modal>
			
						
					</div>
				</div>
				<div className='signUp_button_container'>
					<Button variant="outline-dark" onClick={check} style={{zIndex:0}}>회원가입</Button>
				
				</div>
			</form>
			<Footer/>
		</div>
	);
};

export default SignUpPage;
