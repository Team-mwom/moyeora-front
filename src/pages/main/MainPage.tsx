import React from 'react';

//compo
import Hello from 'components/main/Hello';
import Search from 'components/search/Search';

//style
import "styles/main/main.css"





const MainPage = () => {
	

	return (
		<div className="main_container">
			<Search/>
			<Hello/>		
		</div>
	);
};

export default MainPage;
