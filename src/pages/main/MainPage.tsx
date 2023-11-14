import React from 'react';
//compo
import Hello from 'components/main/Hello';
import LinkTest from 'components/main/LinkTest';
//style
import "styles/main/main.css"

const MainPage = () => {
	return (
		<div className="main_container">
			<Hello/>
			<LinkTest/>
		</div>
	);
};

export default MainPage;
