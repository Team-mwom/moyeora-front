import React, { useEffect } from 'react';
import { useState } from 'react';



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
import 'styles/profile/profileMenu.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ProfileMenu = (props:any) => {

	const menu:any[] = [
    { name: '모여라', value: '1' ,content:<ProfileMoyeoraMain/>},
    { name: '방명록', value: '2' ,content:<VisitorBook/>},
  ];
	
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const menu1Param =
		queryParams.get('menu1') == null||0>(queryParams.get('menu1') as unknown as number)||menu.length<(queryParams.get('menu1') as unknown as number)
			? '1' : queryParams.get('menu1');

	const [menuValue, setMoeyoraRadioValue] = useState( menu1Param);
	const navi = useNavigate();


	const menuValueHandler = (e:any) =>  {
		setMoeyoraRadioValue(e.currentTarget.value);
		queryParams.set('menu1', e.currentTarget.value);
			navi(location.pathname+"?"+queryParams);
	}


	return (
		<div className='profileMenu_full'>
		<ButtonGroup className="mb-2">
					{menu.map((radio, idx) => (
						<ToggleButton
							className='ToggleButton'
							key={idx}
							id={`menu-${idx}`}
							type="radio"
							variant={menuValue === radio.value?"dark":"outline-dark"}
							name="menu"
							value={radio.value}
							onChange={ menuValueHandler}
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			{ menu[menuValue as unknown as number -1].content}
			
	
		</div>
	);
};

export default ProfileMenu;