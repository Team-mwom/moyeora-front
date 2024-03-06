import React from 'react';

import 'styles/common/header.css'

function home() {
	window.location.href = '/';
}

const Header = () => {
	return (
		<div className='header_full'>
			<div className='header_container'>
					<img className="logo_moyeora" alt="logo_moyeora" src="images/logo_moyeora.png" />
					
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
