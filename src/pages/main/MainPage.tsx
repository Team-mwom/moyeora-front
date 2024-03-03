import React from 'react';

import Hello from 'components/main/Hello';
import Search from 'components/main/search/Search';

import "styles/main/main.css"
import "styles/main/search/search.css"
import 'styles/main/footer.css'
import 'styles/main/header.css'

const MainPage = () => {
	

	return (
		<div className="main_container">
			<Search/>
			<Hello/>		
		</div>
	);
};

export default MainPage;
