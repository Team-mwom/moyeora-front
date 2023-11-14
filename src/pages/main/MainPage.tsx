import React from 'react';
import { Link } from 'react-router-dom';
import "styles/main/main.css"

const MainPage = () => {
	return (
		<div className="main_container">
			<div>안녕하세요. 메인페이지 입니다.</div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
			<div><Link to="/test">go to test page</Link></div>
		</div>
	);
};

export default MainPage;
