import React from 'react';
//compo
import TestReduxDataList from 'components/test/testComponents/TestReduxDataList';
import TestReduxDataNew from 'components/test/testComponents/TestReduxDataNew';
//style
import "styles/test/testDataList.css"
import "styles/test/testDataNew.css"

const TestPage = () => {
	return (
    <div>

      	<TestReduxDataNew/>
		<TestReduxDataList/>

	</div>
	);
};

export default TestPage;
