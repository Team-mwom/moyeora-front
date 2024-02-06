import React from 'react';
import { Link } from 'react-router-dom';

const LinkTest = () => {
	return (
		<div className='LinkTest'>
			<div><Link to="/test?mybatis=false">go to JPA  test page</Link></div>
			<div><Link to="/test?mybatis=true">go to MyBatis test page</Link></div>
			<div><Link to="/test/redux">go to MyBatis Test Redux page</Link></div>
		
		</div>
	);
};

export default LinkTest;
