import React from 'react';

import { com_link_test } from 'utils/common/commonLink.ts';

import 'styles/main/banner.css'

const Banner = () => {
  return (
		<div className='banner_full'>
			<div className='banner_container'>
				Banner
				<div className='link_test' onClick={com_link_test}>
					모든 Page URL : http://localhost:3000/test
				</div>
			</div>
		</div>

	);
};

export default Banner;