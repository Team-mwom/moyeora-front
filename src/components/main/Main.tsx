import React from 'react';

import MoyeoraToday from 'components/moyeora/MoyeoraToday';
import MainCreateMoyeora from 'components/main/MainCreateMoyeora';
import BbusyeoraToday from 'components/bbusyeora/BbusyeoraToday';

const Main = () => {
	return (
		<div className=''>
			<div>
				<MoyeoraToday />
				<MainCreateMoyeora />
				{/* <BbusyeoraToday /> */}
				
			</div>
		</div>
	);
};

export default Main;
