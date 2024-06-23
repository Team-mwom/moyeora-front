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

import ProfileMoyeoraMain from 'components/profile/ProfileMoyeoraMenu';


const ProfileMenu = () => {

  const [menuValue, setMoeyoraRadioValue] = useState('1');

	const memu:any[] = [
    { name: '모여라', value: '1' ,content:<ProfileMoyeoraMain/>},
    { name: '방명록', value: '2' ,content:<VisitorBook/>},
  ];

	return (
		<div className='profileMenu_full'>
		<ButtonGroup className="mb-2">
					{memu.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`memu-${idx}`}
							type="radio"
							variant="outline-dark"
							name="memu"
							value={radio.value}
							checked={menuValue === radio.value}
							onChange={(e) => setMoeyoraRadioValue(e.currentTarget.value) }
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
		
			{ memu[menuValue as unknown as number -1].content}
			
	
		</div>
	);
};

export default ProfileMenu;