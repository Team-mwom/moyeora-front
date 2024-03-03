import React from 'react';

import Main from 'components/main/Main';
import Search from 'components/common/Search';

import "styles/main/mainPage.css";

const MainPage = () => {
	
	return (

		<div className='mainPage_full'>
			<div className='mainPage_container'>
				<Search/>
				<Main/>		
			</div>
		</div>

	);
};

export default MainPage;
