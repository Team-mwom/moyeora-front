import React from 'react';

import 'styles/main/banner.css'

const testPage = () => {
	window.location.href = '/test';
}

const Banner = () => {
  return (
		<div className='banner_full'>
			<div className='banner_container'>
				Banner
				<div className='link_test' onClick={testPage}>
					모든 Page URL : http://localhost:3000/test
				</div>
			</div>
		</div>

	);
};

export default Banner;