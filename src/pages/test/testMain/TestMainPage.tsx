import React from 'react';

import LinkTest from 'components/test/testMain/LinkTest';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import "styles/main/main.css"

const TestMainPage = () => {

	return (
		<div className="common_full">
			<Header/>
			<LinkTest />
			<Footer/>
		</div>
	);
};

export default TestMainPage;
