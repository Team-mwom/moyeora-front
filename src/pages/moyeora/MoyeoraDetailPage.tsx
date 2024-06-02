import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MoyeoraDetail from 'components/moyeora/MoyeoraDetail';

import 'styles/main/main.css'

const MoyeoraDetailPage = () => {
	
	return (

		<div className='common_full'>
			<Header/>
			<div className='main_full'>
				<MoyeoraDetail />
			</div>
			<Footer/>
		</div>

	);
};

export default MoyeoraDetailPage;