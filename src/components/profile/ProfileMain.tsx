import React from 'react';

import ProfileEdit from 'components/profile/ProfileEdit';
import ProfileTag from 'components/profile/ProfileTag';
import ProfileMenu from 'components/profile/ProfileMenu';

import 'styles/profile/profile.css'

const ProfileMain = () => {
	
	return (
		
		<div className='profile_full'>
			<ProfileEdit />
			<ProfileTag />
			<ProfileMenu />
		</div>
	);
};

export default ProfileMain;