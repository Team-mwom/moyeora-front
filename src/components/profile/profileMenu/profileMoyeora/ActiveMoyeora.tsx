import axios from 'axios';
import MoyeoraCard from 'components/moyeora/MoyeoraCard';
import { Moyeora } from 'interface/MoyeoraInterface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import { RootState } from 'store/store';

import 'styles/profile/profileMoyeora/profileMoyeoraCommon.css'

const ActiveMoyeora = () => {
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});
	  const [moyeoraList, setMoyeoraList] = useState<Moyeora[]>([]);
	  const fetchMoyeoraList = async () => {
    try {
      const response = await axios.get<Moyeora[]>(`http://localhost:8080/api/all/moyeora/active-moyeora?nickName=`+profileConfig.nickName);
      //const newMoyeoraList = response.data;
			//setMoyeoraList(newMoyeoraList);
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchMoyeoraList();
  },[] );
	return (
		<div className='profileMoyeora_full'>
			<div className='profileMoyeora_container'>
				<div className='profileMoyeora_title'>
					참여한 모여라
				</div>
				<div className='profileMoyeora_inner'>
					 {/* {moyeoraList.map((moyeora, index) => (
            <MoyeoraCard key={index} moyeora={moyeora} />
          ))} */}
				</div>
			</div>
		</div>
	);
};

export default ActiveMoyeora;