import ProfileImg from 'components/common/profile/ProfileImg';
import ProfileImgNick from 'components/common/profile/ProfileImgNick';
import React, { useState } from 'react';


//compo



const TestProfileImgPage = ({ }) => {


	return (
    <div>
			<ProfileImgNick
				nick={'bbb'}
				size={200}
				distance={20}
				fontSize={20}
			/>
	</div>
	);
};

export default TestProfileImgPage;
