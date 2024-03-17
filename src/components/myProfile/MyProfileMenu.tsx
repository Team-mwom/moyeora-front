import React from 'react';

import ActiveBbusyeora from 'components/myProfile/myProfileMenu/myPorfileBbusyeora/ActiveBbusyeora';
import EndBbusyeora from 'components/myProfile/myProfileMenu/myPorfileBbusyeora/EndBbusyeora';
import LikeBbusyeora from 'components/myProfile/myProfileMenu/myPorfileBbusyeora/LikeBbusyeora';
import MyBbusyeora from 'components/myProfile/myProfileMenu/myPorfileBbusyeora/MyBbusyeora';

import ActiveMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/ActiveMoyeora';
import LikeMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/LikeMoyeora';
import MyMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/MyMoyeora';
import StandByMoyeora from 'components/myProfile/myProfileMenu/myProfileMoyeora/StandByMoyeora';

import Calendar from 'components/myProfile/myProfileMenu/myProfileInfo/Calendar';
import VisitorBook from 'components/myProfile/myProfileMenu/myProfileInfo/VisitorBook';

const MyProfileMenu = () => {
	
	return (
		<div className=''>
      MyProfileMenu
			<br />
			<br />
			모여라 메뉴
			<ActiveMoyeora />
			<LikeMoyeora />
			<MyMoyeora />
			<StandByMoyeora />
			<br />
			뿌셔라 메뉴
			<ActiveBbusyeora />
			<EndBbusyeora />
			<LikeBbusyeora />
			<MyBbusyeora />
			<br />
			방명록 메뉴
			<Calendar />
			<VisitorBook />
		</div>
	);
};

export default MyProfileMenu;