import React, { useEffect, useState } from 'react';

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
	const [confirmedProfile, setConfirmedProfile] = useState(false);//프로필 페이지 진입시 가입된 사람의 프로필인지 요효여부 확인함. 근데 같은페이지내의 기능을 수행할때마다 계속확인하여 db검색을 함. 그래서 첨 접속시에만 확인하도록하는 변수임  
	const profileConfig: ProfileConfig = {
		nickName: param.nickName + '',
		owner:(userInfo!=null&&param.nickName==userInfo.nickName?true:false)

	}
	useEffect(
		() => {

			if (!confirmedProfile) {//프로필 유효여부가 이미 확인되었는지
				if (param.nickName != '') {
					axios.get('/api/all/signUp/checkNickName?nickName=' + param.nickName).then((res) => {//프로필 페이지 유효여부 확인
						if (res.data) {
							navigate('/NotFoundPage');
						} else {
							setConfirmedProfile(true);
						}
					})
				} else {
						navigate('/NotFoundPage');
				}
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
