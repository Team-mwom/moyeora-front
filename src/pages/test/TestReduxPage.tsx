import React from 'react';
//compo
import TestReduxDataList from 'components/test/TestReduxDataList';
import TestReduxDataNew from 'components/test/TestReduxDataNew';
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
