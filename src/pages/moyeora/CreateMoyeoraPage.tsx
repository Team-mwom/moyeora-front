import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import CreateMoyeora from 'components/moyeora/CreateMoyeora';

import 'styles/main/main.css'

const CreateMoyeoraPage = () => {
	
	return (

		<div className='common_full'>
			<Header/>
			<div className='main_full'>
				<CreateMoyeora />
			</div>
			<Footer/>
		</div>

	);
};

export default CreateMoyeoraPage;