import axios from 'axios';
import MoyeoraCard from 'components/moyeora/MoyeoraCard';
import { Moyeora } from 'interface/MoyeoraInterface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import { RootState } from 'store/store';

import 'styles/profile/profileMoyeora/profileMoyeoraCommon.css'

const ActiveMoyeora = () => {
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});
	const [moyeoraList, setMoyeoraList] = useState<Moyeora[]>([]);
	
	

	useEffect(() => {
    axios.get("http://localhost:8080/api/all/moyeora/active-moyeora?nickName="+profileConfig.nickName).then((res) => {
			setMoyeoraList(res.data);
	}).catch(() => {})
  },[profileConfig] );
	return (
		<div className='profileMoyeora_full'>
			<div className='profileMoyeora_container'>
				<div className='profileMoyeora_title'>
					참여한 모여라
				</div>
				<div className='profileMoyeora_inner'>
					{
						moyeoraList.length!=0?
					
					
						moyeoraList.map((moyeora, index) => (
            	<MoyeoraCard key={index} moyeora={moyeora} />
						))
					
						:<h6>참여한 모여라가 없습니다.</h6>
					
					} 
				</div>
			</div>
		</div>
	);
};

export default ActiveMoyeora;