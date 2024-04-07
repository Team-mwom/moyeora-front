import React from 'react';

import Button from 'react-bootstrap/Button';

import 'styles/myProfile/myProfileEdit.css'

const MyProfileEdit = () => {
	
	return (
		<div className='myProfileEdit_full'>
			<div className='myProfileEdit_container'>
				<div className='profile_pic_container'>
					<div className='profile_pic'>
						사진
					</div>
				</div>
				<div className='follower_info_container'>
					<table className='follow_info_table'>
						<tr className=''>
							<td className='follow_info_td_follower'>팔로워</td>
							<td className='follow_info_td_count_follower'>150</td>
							<td className='follow_info_td_following'>팔로잉</td>
							<td className='follow_info_td_count_following'>150</td>
						</tr>
					</table>
					<div className='follower_info_button'>
						<Button variant="dark" size="lg">팔로잉</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfileEdit;