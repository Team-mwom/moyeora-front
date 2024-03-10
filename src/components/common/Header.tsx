import React, { useCallback } from 'react';

import 'styles/common/components/header.css'
import { Link } from 'react-router-dom';
function home() {
	window.location.href = '/';
}

const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const signIn = useCallback(() => {
	window.location.href=KAKAO_AUTH_URL
},[])

const Header = () => {
	return (
		<div className='header_full'>
			<div className='header_container'>
					<img className="logo_moyeora" alt="logo_moyeora" src="images/logo_moyeora.png" onClick={home}/>
					
					<div className='logo_container'>
						<div className='logo_inner'>
							<img className="logo" alt="logo_alarm" src="images/logo_alarm.png" />
						</div>
						<div className='logo_inner'>
							<img className="logo" alt="logo_message" src="images/logo_message.png" />
						</div>
						<div className='logo_inner'>
							<img className="logo" alt="logo_account_info" src="images/logo_account_info.png" />
						</div>
					</div>
			</div>
			
			<div className='header_banner'>
				Banner
			</div>
		</div>

	);
};

export default Header;
