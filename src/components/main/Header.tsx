import React from 'react';

import 'styles/main/header.css'

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
