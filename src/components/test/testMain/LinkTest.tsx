import React from 'react';
import { Link } from 'react-router-dom';

import { com_link_bootstrap, com_link_myProfile, com_link_signUp, com_link_test_redux
	, com_link_test_kakao, com_link_test_jpa, com_link_test_mybatis } 
	from 'utils/common/commonLink.ts';

const LinkTest = () => {
	return (
		<div className=''>
			<div className='link_test' onClick={com_link_bootstrap}>
				React Bootstrap URL : https://react-bootstrap.netlify.app/
			</div>
			<div className='link_test' onClick={com_link_myProfile}>
				마이페이지 / myProfile Page URL : http://localhost:3000/myProfile
			</div>
			<div className='link_test' onClick={com_link_signUp}>
				회원가입 / SignUp Page URL : http://localhost:3000/signUp
			</div>
			<div className='link_test' onClick={com_link_test_redux}>
				나의 야심찬 Redux JPA CRUD
			</div>
			<div className='link_test' onClick={com_link_test_kakao}>
				카카오 + jwt 로그인 테스트
			</div>
			<div className='link_test' onClick={com_link_test_jpa}>
				go to JPA  test page
			</div>
			<div className='link_test' onClick={com_link_test_mybatis}>
				go to MyBatis test page
			</div>
		</div>
	);
};

export default LinkTest;
