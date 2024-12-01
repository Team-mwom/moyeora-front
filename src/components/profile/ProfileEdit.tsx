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
import Modal from "react-modal";
import { PiImagesThin } from "react-icons/pi";
import { useNavigate, useParams } from 'react-router-dom';
import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
import axios from 'axios';

interface FollowState{
	follower: number;
	following: number;
}

const ProfileEdit = () => {
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});
	const navi = useNavigate();
	const param = useParams();
	const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
	const [cookies, setCookie, removeCookie] = useCookies();//쿠키
	const [followState, setFollowState] = useState<FollowState>({follower:0,following:0});
	const [followed, setFollowed] = useState(false);


	useEffect(() => {
		countfollower();
		isFollow();
	 },[followed,param.nickName])

	const isFollow = () => {
		if (userInfo != null) {
			authAxios.post('/api/user/isFollow', [param.nickName]).then((res) => {
				if (authException(res, [cookies, setCookie, removeCookie])) {
					setFollowed(res.data as boolean);
				}
			}).catch(() => { })
		}
	}
	const countfollower = () => {
		axios.post('/api/all/followState', [param.nickName]).then((res) => {
			if (authException(res, [cookies, setCookie, removeCookie])) {
				setFollowState({ follower: res.data.followers, following: res.data.followings });
			}
		}).catch(() => { })
		
	}
	
	
	const follow = useCallback(() => {
		authAxios.post('/api/user/follow', [param.nickName]).then((res) => { 
			if (authException(res, [cookies, setCookie, removeCookie])) {
				setFollowed(true);
			}
		}).catch(() => { alert('로그인 후 이용가능합니다.'); })
	}, []);
		const unfollow = useCallback(() => {
			authAxios.post('/api/user/unfollow', [param.nickName]).then((res) => { 
				if (authException(res, [cookies, setCookie, removeCookie])) {
					setFollowed(false);
				}
		}).catch(() => { alert('로그인 후 이용가능합니다.'); })
	}, []);
	
	const profiletSetting = () => {
		navi("/setting?menu1=2");
	 }

	return (
		<div className='profileEdit_full'>
			<div className='profileEdit_container'>
				<div className='profile_pic_container'>
					<ProfileImg
						nick={param.nickName}
						size={400}
					/>
				</div>
				<div className='follower_info_container'>
					<div className='profileEdit_nickName'>{param.nickName}</div>
					<table className='follow_info_table'>
						<tbody>
							<tr className=''>
								<td className='follow_info_td_follower'>팔로워</td>
								<td className='follow_info_td_count_follower'>{followState.follower}</td>
								<td className='follow_info_td_following'>팔로잉</td>
								<td className='follow_info_td_count_following'>{followState.following}</td>
							</tr>
						</tbody>
					</table>
					<div className='follower_info_button'>
						{profileConfig.owner ?
					
							<Button variant="outline-dark" size="lg" onClick={profiletSetting}>프로필 설정</Button> 		
							:
							followed?
								<Button variant="outline-dark" size="lg" onClick={unfollow}>팔로우 취소</Button>
								:
								<Button variant="outline-dark" size="lg" onClick={follow}>팔로우</Button>
							
						}
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;