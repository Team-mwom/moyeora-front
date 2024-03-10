import React from 'react';

import MoyeoraToday from 'components/moyeora/MoyeoraToday';
import BbusyeoraToday from 'components/bbusyeora/BbusyeoraToday';

import 'styles/main/main.css'

function testPage() {
	window.location.href = '/test';
}

const Main = () => {
	return (
		<div className='main_full'>
			<div className='main_test' onClick={testPage}>
				Test Page URL : http://localhost:3000/test
			</div>
			<div>
				<MoyeoraToday />
				<BbusyeoraToday />
			</div>
		</div>
	);
};

export default Main;
