import React, { useCallback } from 'react';

import 'styles/common/components/header.css'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Header = () => {
	const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
	const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();

	const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
	const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const linkSignIn = () => {
		window.location.href = KAKAO_AUTH_URL
	}

	const linkHome = useCallback(
		(e:React.MouseEvent<HTMLElement>) => {
			navigate("/");
	}
	, []);

	const signOut = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			axios.get("/api/all/signOut").then(() => { 
				localStorage.clear();
        removeCookie('refreshToken', {path:'/'});
        navigate("/");
			})
      
    }
		, []);

	return (
		<div className='header_full'>
			<div className='header_container'>
				<img className="logo_moyeora" alt="logo_moyeora" src="images/logo_moyeora.png" onClick={linkHome}/>
					<div className='logo_container'>
						<div className='logo_inner'>
							<img className="logo" alt="logo_alarm" src="images/logo_alarm.png" />
						</div>
						<div className='logo_inner'>
							<img className="logo" alt="logo_message" src="images/logo_message.png" />
						</div>
					<div className='logo_inner'>
						{userInfo == null ?
							//로그인 상태 아닐때
							<div className='signIn' onClick={linkSignIn}>
								로그인 / 회원가입
							</div>
							:
							//로그인 상태 일때
							// <img className="logo" alt="logo_account_info" src="images/logo_account_info.png" />
							<div className='signIn' onClick={signOut}>이름:{userInfo.name},닉네임:{userInfo.nickName},이메일:{userInfo.email}</div>
						}
						</div>
					</div>
			</div>
		</div>

	);
};

export default Header;
