import ProfileImg from 'components/common/profile/ProfileImg';
import React, { RefObject, useCallback, useRef, useState } from 'react';
import { PiImagesThin } from 'react-icons/pi';
import 'styles/memberSetting/memberProfileSetting.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ProfileImgEdit from 'components/profile/ProfileImgEdit';
import Modal from "react-modal";
import axios from 'axios';
import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const MemberProfileSetting = () => {
	const navigate = useNavigate()
	const [cookies, setCookie, removeCookie] = useCookies();
	const userInfo= JSON.parse(localStorage.getItem("userInfo") as string);
	const [imgEditPopup, setImgEditPopup] = useState<boolean>(false);//이미지 팝업
	const newNick = useRef<HTMLInputElement>(null);
	const [nickChecked, setNickChecked] = useState(false);
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
	const checkNick = useCallback(() => {
		if (newNick.current?.value == "") {
			alert("사용 불가능 한 닉네임 입니다.");
		} else {
			axios.get('/api/all/signUp/checkNickName?nickName='+newNick.current!.value).then((res)=>{
				if (res.data) {
					setNickChecked(true);
					newNick.current!.disabled = true;
					alert("사용 가능 한 닉네임 입니다.");
				} else {
					
					alert("사용 불가능 한 닉네임 입니다.");
					
				}
		})
		}
	}, [])
	
	const changeNickName = useCallback(() => {
		if (nickChecked) {
			authAxios.post('/api/user/changeNickName', {nickName:newNick.current!.value}  ).then((res) => {
				if (authException(res, [cookies, setCookie, removeCookie])) {
					userInfo.nickName = newNick.current!.value;
					localStorage.setItem('userInfo', JSON.stringify(userInfo));
					alert("변경완료");
					navigate("/profile/"+newNick.current!.value);
					
        }   
      }).catch((err) => { alert('로그인 후 이용해주세요') })
		} else {
			alert("중복 확인 후 변경 가능합니다.");
		
		}
	 },[nickChecked])

	return (
		<div className='memberMoyeoraSetting_full'>
      
		
			<span className='memberSetting_subTitle' >이름 변경</span>
			<div className='nickName_setting_contatiner'>
				<Form.Control  placeholder={userInfo.nickName} className='nickName_setting_text' ref={newNick}></Form.Control>
				<Button className='nickName_check_button' onClick={checkNick}>중복 확인</Button>
				<Button className='nickName_setting_button' onClick={changeNickName}>변경</Button>
			</div>

			<span className='memberSetting_subTitle'>프로필 이미지 변경</span>
			<Modal isOpen={imgEditPopup} style={customStyles}>
				<ProfileImgEdit popup={imgEditPopup} setPopup={setImgEditPopup} />
			</Modal>
			<div className='pic_setting_contatiner'>
					<ProfileImg	
						nick={userInfo.nickName}
						size={300}
					/>
						<div className='profile_pic_change_div'>
							<div className='profile_pic_change_btn' onClick={() => { setImgEditPopup(true) }}>
								<PiImagesThin />
							</div>	
						</div>	
			</div>
		





		</div>
	);
};

export default MemberProfileSetting;
