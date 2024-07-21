import React, { useCallback, useState } from 'react';

import 'styles/common/components/header.css'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ProfileImgNick from './profile/ProfileImgNick';

const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;



const Header = () => {

	const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
	const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
	const [profileDetailOpen, setProfileDetailOpen] = useState<boolean>(false);

	const linkSignIn = () => {
		if(userInfo == null)
		window.location.href = KAKAO_AUTH_URL
	}

	const linkHome = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			setProfileDetailOpen(false);
			navigate("/");
	}
		, []);
	const linkProfile = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			setProfileDetailOpen(false);
			navigate("/profile/"+userInfo.nickName);
	}
		, [userInfo]);
	
	const signOut = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			setProfileDetailOpen(false);
			axios.get("/api/all/signOut").then(() => { 
				localStorage.clear();
        removeCookie('refreshToken', {path:'/'});
        navigate("/");
			})
      
    }
		, []);
	const profileDetailHandle = (a: any) => () => {
		if (userInfo != null)
			setProfileDetailOpen(a);
	}

	return (
		<div className='header_full'>
			<div className='header_container'>
				<img className="logo_moyeora" alt="logo_moyeora" src="/images/logo_moyeora.png" onClick={linkHome}/>
					<div className='logo_container'>
						<div className='logo_inner'>
							<img className="logo" alt="logo_alarm" src="/images/logo_alarm.png" />
						</div>
						<div className='logo_inner'>
							<img className="logo" alt="logo_message" src="/images/logo_message.png" />
						</div>
					<div className='logo_inner logo_inner_profile' onMouseEnter={profileDetailHandle(true)} onMouseLeave={profileDetailHandle(false)} onClick={linkSignIn}>
						{userInfo == null ?
							//로그인 상태 아닐때
							<div className='signIn' >
								로그인 / 회원가입
							</div>
							:
							//로그인 상태 일때
							<ProfileImgNick
												nick={userInfo.nickName}
												size={40}
												distance={10}
												fontSize={19}
							/>
							//<div className='signIn' onClick={signOut}>이름:{userInfo.name},닉네임:{userInfo.nickName},이메일:{userInfo.email}</div>
						}
						<br></br>
						{profileDetailOpen ?
							<div className='profileDetail_contailer'>
								<div className='profileDetail_inner' onClick={linkProfile}>
									프로필
								</div>
								<div className='profileDetail_inner' onClick={linkProfile}>
									내 모여라
								</div>
								<div className='profileDetail_inner' onClick={linkProfile}>
									캘린더
								</div>
								<div className='profileDetail_inner' onClick={linkProfile}>
									설정
								</div>
								<div className='profileDetail_inner profileDetail_logout' onClick={signOut}>
									로그아웃
								</div>
							</div>
							: ""}



						</div>
					</div>
			</div>
		</div>

	);
};

export default Header;
