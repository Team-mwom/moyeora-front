import React from 'react';

import Hello from 'components/main/Hello';
import Search from 'components/main/search/Search';



const MainPage = () => {
	

	return (
		<div className="main_container">
			<Search/>
			<Hello/>		
		</div>
	);
};

export default MainPage;
