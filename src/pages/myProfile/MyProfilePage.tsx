import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MyProfileMain from 'components/myProfile/MyProfileMain';

const MyProfilePage = () => {
	
	return (
		<div className='common_full'>
			<Header/>
			<div className='common_container'>
				<MyProfileMain />
			</div>
			<Footer/>
		</div>
	);
};

export default MyProfilePage;
