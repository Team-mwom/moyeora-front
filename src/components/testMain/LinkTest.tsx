import React from 'react';
import { Link } from 'react-router-dom';

const LinkTest = () => {
	return (
		<div className='LinkTest'>
			<div><Link to="/test/redux">나의 야심찬 Redux JPA CRUD</Link></div>
			<div><Link to="/test/jwt/signIn">jwt 로그인 테스트</Link></div>
			<div><Link to="/test/List?mybatis=false">go to JPA  test page</Link></div>
			<div><Link to="/test/List?mybatis=true">go to MyBatis test page</Link></div>
			
		
		</div>
	);
};

export default LinkTest;
