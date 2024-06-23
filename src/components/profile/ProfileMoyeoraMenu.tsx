import React from 'react';
import { useState } from 'react';

import 'styles/profile/profileMenu.css'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// 모여라 Component
import  ActiveMoyeora  from 'components/profile/profileMenu/profileMoyeora/ActiveMoyeora';
import LikeMoyeora from 'components/profile/profileMenu/profileMoyeora/LikeMoyeora';
import MyMoyeora from 'components/profile/profileMenu/profileMoyeora/MyMoyeora';
import StandByMoyeora from 'components/profile/profileMenu/profileMoyeora/StandByMoyeora';
import Calendar from 'components/profile/profileMenu/profileMoyeora/Calendar';

// 뿌셔라 Component
import ActiveBbusyeora from 'components/profile/profileMenu/profileBbusyeora/ActiveBbusyeora';
import EndBbusyeora from 'components/profile/profileMenu/profileBbusyeora/EndBbusyeora';
import LikeBbusyeora from 'components/profile/profileMenu/profileBbusyeora/LikeBbusyeora';
import MyBbusyeora from 'components/profile/profileMenu/profileBbusyeora/MyBbusyeora';

// 방명록 Component
import VisitorBook from 'components/profile/profileMenu/profileInfo/VisitorBook';
import { constants } from 'buffer';



const ProfileMoyeoraMenu = () => {

  const [moeyoraMenuValue, setMoeyoraRadioValue2] = useState('1');

	const moyeoraMenu:any[] = [
    { name: '참여중인 모여라', value: '1' ,content:<ActiveMoyeora/>},
    { name: '좋아요 모여라', value: '2' ,content:<LikeMoyeora/>},
    { name: '내 모여라', value: '3', content: <MyMoyeora /> },
    { name: '캘린더', value: '4', content: <Calendar /> },
    
  ];

	return (
		<div className='profileMenu_full'>
	
			<div className='profileMenu_second_menu_container'>
				<ButtonGroup className="mb-2">
					{moyeoraMenu.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`moyeoraMenu-${idx}`}
							type="radio"
							variant="outline-dark"
							name="moyeoraMenu"
							value={radio.value}
							checked={moeyoraMenuValue === radio.value}
							onChange={(e) => setMoeyoraRadioValue2(e.currentTarget.value) }
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			</div>
			{ moyeoraMenu[moeyoraMenuValue as unknown as number -1].content}
			
			

	
		</div>
	);
};

export default ProfileMoyeoraMenu;