import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'styles/common/components/profile/profileImg.css'

const ProfileImg = ({ nick, size }:any) => {
	const [imgBlob, setImgBlob] = useState('');

	useEffect(() => {
		axios.get('/api/all/profileImg?nickName='+nick).then((res) => {
		setImgBlob(res.data);
	 }).catch();
	 },[nick])
	
  return (

		<img className='profileImg'
			width={size}
			height={size}
			src={imgBlob} />


	);
};

export default ProfileImg;