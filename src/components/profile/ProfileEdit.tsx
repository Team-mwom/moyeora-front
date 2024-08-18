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
import { useParams } from 'react-router-dom';

const ProfileEdit = () => {
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});
	const param = useParams();
	const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
	const [imgEditPopup, setImgEditPopup] = useState<boolean>(false);
	const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
    , content: {
      width: "700px"
      , height: "450px"
      , margin: "auto"
      , borderRadius: "4px"
      , boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
			, padding: "20px"
		
    }
  }
	return (
		<div className='profileEdit_full'>
		

			<Modal isOpen={imgEditPopup} style={customStyles}>
				<ProfileImgEdit popup={imgEditPopup} setPopup={setImgEditPopup} />
			</Modal>
				
			

			<div className='profileEdit_container'>
				<div className='profile_pic_container'>
					<ProfileImg
				
						nick={param.nickName}
						size={400}
					/>
						{profileConfig.owner ?
						<div className='profile_pic_change_div'>
							<div className='profile_pic_change_btn' onClick={() => { setImgEditPopup(true) }}>
								<PiImagesThin />
							</div>	
						</div>	
							:
							""
							
						}
				
				</div>
				<div className='follower_info_container'>
					<div className='profileEdit_nickName'>{param.nickName}</div>
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
					
							<Button variant="outline-dark" size="lg" onClick={() => { alert('설정 페이지로 이동')}}>프로필 설정</Button> 		
							:
							<Button variant="outline-dark" size="lg">팔로잉</Button> 
							
						}
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;