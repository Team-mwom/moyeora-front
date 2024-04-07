import React from 'react';

import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import 'styles/myProfile/myProfileTag.css'

const MyProfileTag = () => {
	const [moeyoraChecked, setMoeyoraChecked] = useState(false);
  const [moeyoraRadioValue, setMoeyoraRadioValue] = useState('1');
	// const [bbusyeoraChecked, setBbusyeoraChecked] = useState(false);
  // const [bbusyeoraRadioValue, setBbusyeoraRadioValue] = useState('1');
	// const [profileChecked, setProfileChecked] = useState(false);
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
	
	return (
		<div className='myProfileTag_full'>
			<div className='myProfileTag_first_menu_container'>
				<ButtonGroup className="mb-2">
					<ToggleButton
						id="toggle-check"
						type="checkbox"
						variant="outline-dark"
						checked={moeyoraChecked}
						value="1"
						onChange={(e) => setMoeyoraChecked(e.currentTarget.checked)}
					>
						모여라
					</ToggleButton>
					{/* <ToggleButton
						id="toggle-check"
						type="checkbox"
						variant="secondary"
						checked={bbusyeoraChecked}
						value="1"
						onChange={(e) => setBbusyeoraChecked(e.currentTarget.checked)}
					>
						뿌셔라
					</ToggleButton>
					<ToggleButton
						id="toggle-check"
						type="checkbox"
						variant="secondary"
						checked={profileChecked}
						value="1"
						onChange={(e) => setProfileChecked(e.currentTarget.checked)}
					>
						방명록
					</ToggleButton> */}
				</ButtonGroup>
			</div>
			<div className='myProfileTag_second_menu_container'>
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
				{/* <ButtonGroup className="mb-2">
					{bbusyeoraMenu.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`radio-${idx}`}
							type="radio"
							variant="secondary"
							name="radio"
							value={radio.value}
							checked={bbusyeoraRadioValue === radio.value}
							onChange={(e) => setBbusyeoraRadioValue(e.currentTarget.value)}
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
				<ButtonGroup className="mb-2">
					{profileMenu.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`radio-${idx}`}
							type="radio"
							variant="secondary"
							name="radio"
							value={radio.value}
							checked={profileRadioValue === radio.value}
							onChange={(e) => setProfileRadioValue(e.currentTarget.value)}
						>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup> */}
			</div>
		</div>
	);
};

export default MyProfileTag;