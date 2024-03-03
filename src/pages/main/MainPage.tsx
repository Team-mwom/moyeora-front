import React from 'react';

import Hello from 'components/main/Main';
import Search from 'components/common/Search';

const MainPage = () => {
	
	return (

		<div className="main_container">
			<Search/>
			<Hello/>		
		</div>

	);
};

export default MainPage;
