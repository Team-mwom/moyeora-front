import React, { useEffect } from 'react';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'styles/memberSetting/memberSettingMenu.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MemberMoyeoraSetting from './MemberMoyeoraSetting';
import MemberProfileSetting from './MemberProfileSetting';


const MemberSettingMenu = (props:any) => {

	const menu:any[] = [
    { name: '모여라', value: '1' ,content:<MemberMoyeoraSetting/>},
    { name: '프로필', value: '2' ,content:<MemberProfileSetting/>},
    { name: '알림', value: '3' ,content:null},
    { name: '기타', value: '4' ,content:null},
    { name: '계정', value: '5' ,content:null},
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
		<div className='memberSettingMenu_full'>
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
			<div className='memberSettingMenu_content'>
					{ menu[menuValue as unknown as number -1].content}
			</div>
			
		</div>
	);
};

export default MemberSettingMenu;