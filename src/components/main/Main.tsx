import React from 'react';

import MoyeoraToday from 'components/moyeora/MoyeoraToday';
import BbusyeoraToday from 'components/bbusyeora/BbusyeoraToday';

import 'styles/main/main.css'

const Main = () => {
	return (
		<div className='main_full'>
			<div>
				<MoyeoraToday />
				<BbusyeoraToday />
			</div>
		</div>
	);
};

export default Main;
