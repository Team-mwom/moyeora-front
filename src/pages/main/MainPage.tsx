import React from 'react';

import Main from 'components/main/Main';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Search from 'components/common/Search';

import "styles/common/common.css";

const MainPage = () => {
	
	return (

		<div className='common_full'>
			<Header/>
			<div className='common_container'>
				<Search/>
				<Main/>
			</div>
			<Footer/>
		</div>

	);
};

export default MainPage;
