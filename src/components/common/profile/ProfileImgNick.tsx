import React from 'react';
import ProfileImg from './ProfileImg';
import 'styles/common/components/profile/profileImgNick.css'

const ProfileImgNick = ({ nick,size,distance,fontSize,img }: any) => {
	const componentHeight = {
		height:size
	}
	const nickStyle = {
		marginLeft:distance,
		fontSize:fontSize
	}
  return (
		<div className='profileImgNick_container'
			style={componentHeight}
			>
			<ProfileImg
				img={img}
				nick={nick}
				size={size}
			/>
			
			<div className='profileImgNick_nick_container'
				style={nickStyle}
				>
				{nick}
			</div>
		</div>

	);
};

export default ProfileImgNick;