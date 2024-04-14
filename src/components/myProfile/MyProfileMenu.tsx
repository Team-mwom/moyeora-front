import React from 'react';
import { useState } from 'react';

import 'styles/myProfile/myProfileMenu.css'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// 모여라 Component
import ActiveMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/ActiveMoyeora';
import LikeMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/LikeMoyeora';
import MyMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/MyMoyeora';
import StandByMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/StandByMoyeora';
import Calendar from 'components/myProfile/myProfileMenu/myProfileMoyeora/Calendar';

// 뿌셔라 Component
import ActiveBbusyeora from 'components/myProfile/myProfileMenu/myProfileBbusyeora/ActiveBbusyeora';
import EndBbusyeora from 'components/myProfile/myProfileMenu/myProfileBbusyeora/EndBbusyeora';
import LikeBbusyeora from 'components/myProfile/myProfileMenu/myProfileBbusyeora/LikeBbusyeora';
import MyBbusyeora from 'components/myProfile/myProfileMenu/myProfileBbusyeora/MyBbusyeora';

// 방명록 Component
import VisitorBook from 'components/myProfile/myProfileMenu/myProfileInfo/VisitorBook';



const MyProfileMenu = () => {
	const [moeyoraChecked, setMoeyoraChecked] = useState(false);
  const [moeyoraRadioValue, setMoeyoraRadioValue] = useState('1');
	const [bbusyeoraChecked, setBbusyeoraChecked] = useState(false);
  // const [bbusyeoraRadioValue, setBbusyeoraRadioValue] = useState('1');
	const [profileChecked, setProfileChecked] = useState(false);
  // const [profileRadioValue, setProfileRadioValue] = useState('1');

	const moyeoraMenu = [
    { name: '모여라1', value: '1' },
    { name: '모여라2', value: '2' },
    { name: '모여라3', value: '3' },
  ];
	// const bbusyeoraMenu = [
  //   { name: '뿌셔라1', value: '1' },
  //   { name: '뿌셔라2', value: '2' },
  //   { name: '뿌셔라3', value: '3' },
  // ];
	// const profileMenu = [
  //   { name: '방명록1', value: '1' },
  //   { name: '방명록2', value: '2' },
  //   { name: '방명록3', value: '3' },
  // ];

	const [visible, setVisible] = useState(false);
	
	return (
		<div className='myProfileMenu_full'>
			<div className='myProfileMenu_top_menu_container'>
			<Button 
				variant="outline-dark" 
				onClick={(e) => {
					setMoeyoraChecked(true)
					setVisible(true)
				}}
			>
				{visible ? "숨기기" : "보이기"}
				모여라
			</Button>
			<Button 
				variant="outline-dark" 
				onClick={(e) => setBbusyeoraChecked(true)}
			>
				뿌셔라
			</Button>
			<Button 
				variant="outline-dark" 
				onClick={(e) => setProfileChecked(true)}
			>
				방명록
			</Button>
			</div>
			<div className='myProfileMenu_second_menu_container'>
				<ButtonGroup className="mb-2">
					{moyeoraMenu.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`radio-${idx}`}
							type="radio"
							variant="outline-dark"
							name="radio"
							value={radio.value}
							checked={moeyoraRadioValue === radio.value}
							onChange={(e) => setMoeyoraRadioValue(e.currentTarget.value)}
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			</div>

			<h1>MyProfileMenu 하위컴포넌트들</h1>
			<h2>모여라 메뉴</h2>
			<ActiveMoyeora />
			<LikeMoyeora />
			<MyMoyeora />
			<StandByMoyeora />
			<Calendar />

			<h2>뿌셔라 메뉴</h2>
			<ActiveBbusyeora />
			<LikeBbusyeora />
			<MyBbusyeora />
			<EndBbusyeora />

			<h2>방명록 메뉴</h2>
			<VisitorBook />
		</div>
	);
};

export default MyProfileMenu;