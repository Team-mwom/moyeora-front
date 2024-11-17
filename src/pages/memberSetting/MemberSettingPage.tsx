import React, { useEffect, useState } from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import axios from 'axios';
import MemberSettingMenu from 'components/memberSetting/MemberSettingMenu';



const MemberSettingPage = () => {
	const param = useParams();
	const dispach = useDispatch();
	const userInfo= JSON.parse(localStorage.getItem("userInfo") as string);
	const navigate = useNavigate();
	const [confirmedProfile, setConfirmedProfile] = useState(false);//프로필 페이지 진입시 가입된 사람의 프로필인지 요효여부 확인함. 근데 같은페이지내의 기능을 수행할때마다 계속확인하여 db검색을 함. 그래서 첨 접속시에만 확인하도록하는 변수임  

	
useEffect(
	() => {
	
		if (userInfo == null) {
			alert('로그인 후 이용가능')
			navigate('/NotFoundPage');
		} else {
				if (!confirmedProfile) {//세팅 유효여부가 이미 확인되었는지
				if (userInfo.nickName != '') {
					axios.get('/api/all/signUp/checkNickName?nickName=' + userInfo.nickName).then((res) => {//프로필 페이지 유효여부 확인
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
		}
		},[]
	)

	return (
		<div className='common_full'>
			<Header/>
			<div className='main_full'>
				<div>
					<h2>설정</h2>
				</div>
				<MemberSettingMenu/>
			
			</div>
			<Footer/>
		</div>
	);
};

export default MemberSettingPage;
