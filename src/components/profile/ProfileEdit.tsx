import ProfileImg from 'components/common/profile/ProfileImg';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import { RootState } from 'store/store';
import Form from 'react-bootstrap/Form';
import 'styles/profile/profileEdit.css'
import ReactDOM from 'react-dom';
import ProfileImgEdit from './ProfileImgEdit';
import { useCookies } from 'react-cookie';

const ProfileEdit = () => {
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});

	const [imgEditPopup, setImgEditPopup] = useState<Boolean>(false);

	return (
		<div className='profileEdit_full'>
			{imgEditPopup ? <ProfileImgEdit popup={imgEditPopup} setPopup={setImgEditPopup } />:'' }
			
			<div className='profileEdit_container'>
				<div className='profile_pic_container'>
						<ProfileImg
							nick={profileConfig.nickName}
							size={320}
						/>
				</div>
				<div className='follower_info_container'>
					<table className='follow_info_table'>
						<tbody>
							<tr className=''>
								<td className='follow_info_td_follower'>팔로워</td>
								<td className='follow_info_td_count_follower'>150</td>
								<td className='follow_info_td_following'>팔로잉</td>
								<td className='follow_info_td_count_following'>150</td>
							</tr>
						</tbody>
					</table>
					<div className='follower_info_button'>
						{profileConfig.owner ?
					
							<Button variant="dark" size="lg" onClick={() => { setImgEditPopup(true) }}>이미지 변경</Button> 		
							:
							<Button variant="dark" size="lg">팔로잉</Button> 
							
						}
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;