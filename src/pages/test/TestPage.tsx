import React from 'react';
import { Link } from 'react-router-dom';
//compo
import TestDataList from 'components/test/TestDataList';
import TestDataNew from 'components/test/TestDataNew';
//style
import "styles/test/test.css"

const TestPage = () => {
	return (
    <div>
      	<TestDataNew/>
		<TestDataList/>
	</div>
	);
};

export default TestPage;
