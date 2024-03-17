import React from 'react';

import { com_link_home, com_link_signIn } from 'utils/common/commonLink.ts';

import 'styles/common/components/header.css'

const Header = () => {
	return (
		<div className='header_full'>
			<div className='header_container'>
				<img className="logo_moyeora" alt="logo_moyeora" src="images/logo_moyeora.png" onClick={com_link_home}/>
					
					<div className='logo_container'>
						<div className='logo_inner'>
							<img className="logo" alt="logo_alarm" src="images/logo_alarm.png" />
						</div>
						<div className='logo_inner'>
							<img className="logo" alt="logo_message" src="images/logo_message.png" />
						</div>
						<div className='logo_inner'>
							<div className='signIn' onClick={com_link_signIn}>
								로그인 / 회원가입
							</div>
							{/* <img className="logo" alt="logo_account_info" src="images/logo_account_info.png" onClick={signIn}/> */}
						</div>
					</div>
			</div>
		</div>

	);
};

export default Header;
