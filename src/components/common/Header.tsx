import React from 'react';

import 'styles/common/header.css'

function home() {
	window.location.href = '/';
}

const Header = () => {
	return (
		<div className='header_full'>
			<div className='header_container' onClick={home}>
				header
			</div>
			
			<div className='header_banner'>
				Banner
			</div>
		</div>

	);
};

export default Header;
