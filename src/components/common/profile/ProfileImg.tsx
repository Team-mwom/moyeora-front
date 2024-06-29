import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ProfileImg = ({ nick }:any) => {
	const [imgBlob, setImgBlob] = useState('');

	useEffect(() => {
		axios.get('/api/all/profileImg?nickName='+nick).then((res) => {
		setImgBlob(res.data);
	 }).catch();
	 },[])
	
  return (
		<div>
			<img src={imgBlob}></img>
		</div>

	);
};

export default ProfileImg;