import React from 'react';

import Main from 'components/main/Main';
import Header from 'components/common/Header';
import Banner from 'components/common/Banner';
import Footer from 'components/common/Footer';
import Search from 'components/common/Search';

import 'styles/main/main.css'

const MainPage = () => {
	
	return (

		<div className='common_full'>
			<Header/>
			<Banner/>
			<div className='main_full'>
				<Search/>
				<Main/>
			</div>
			<Footer/>
		</div>

	);
};

export default MainPage;
