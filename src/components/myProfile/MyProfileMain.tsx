import React from 'react';

import MyProfileEdit from 'components/myProfile/MyProfileEdit';
import MyProfileTag from 'components/myProfile/MyProfileTag';
import MyProfileMenu from 'components/myProfile/MyProfileMenu';

import 'styles/myProfile/myProfile.css'

const MyProfileMain = () => {
	
	return (
		<div className='myProfile_full'>
			<MyProfileEdit />
			<br />
			<MyProfileTag />
			<MyProfileMenu />
		</div>
	);
};

export default MyProfileMain;