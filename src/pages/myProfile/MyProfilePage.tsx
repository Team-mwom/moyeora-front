import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MyProfileMain from 'components/myProfile/MyProfileMain';
import MyProfileTag from 'components/myProfile/MyProfileTag';
import MyProfileMenu from 'components/myProfile/MyProfileMenu';

import 'styles/myProfile/myProfile.css'

const MyProfilePage = () => {
	
	return (
		<div className='common_full'>
			<Header/>
			<div className='common_container'>
				<MyProfileMain />
				<MyProfileTag />
				<MyProfileMenu />
			</div>
			<Footer/>
		</div>
	);
};

export default MyProfilePage;
