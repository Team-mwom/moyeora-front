import React from 'react';

import 'styles/common/header.css'

function home() {
	window.location.href = '/';
}

const Header = () => {
	return (
		<div className='header' onClick={home}>
			header
		</div>
	);
};

export default Header;
