import React from 'react';
//compo
import TestDataList from 'components/test/testComponents/TestDataList';
import TestDataNew from 'components/test/testComponents/TestDataNew';
//style
import "styles/test/testDataList.css"
import "styles/test/testDataNew.css"

const TestPage = () => {
	return (
    <div>
      <TestDataNew/>
		  <TestDataList/>
	</div>
	);
};

export default TestPage;
