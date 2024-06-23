import React, { useEffect } from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import ProfileMain from 'components/profile/ProfileMain';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileConfig, setProfileConfig } from 'store/slices/profileConfigSlice';
import { RootState } from 'store/store';
import axios from 'axios';



const ProfilePage = () => {
	const param = useParams();
	const dispach = useDispatch();
	const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
	const navigate = useNavigate();
	const profileConfig: ProfileConfig = {
		nickName: param.nickName + '',
		owner:(userInfo!=null&&param.nickName==userInfo.nickName?true:false)

	}
	useEffect(
		() => {
			if (param.nickName != '') {
				axios.get('/api/all/signUp/checkNickName?nickName=' + param.nickName).then((res) => {
					if (res.data) {
						navigate('/NotFoundPage');
					}
				})
			} else {
					navigate('/NotFoundPage');
			}
		


			dispach(setProfileConfig(profileConfig))
		},[profileConfig]
	)
	
	


	return (
		<div className='common_full'>

			<Header/>
			<div className='common_container'>
				<ProfileMain />
			</div>
			<Footer/>
		</div>
	);
};

export default ProfilePage;
