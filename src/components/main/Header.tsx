import React from 'react';

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
