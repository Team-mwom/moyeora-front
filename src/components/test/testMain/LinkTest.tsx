import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { com_link_bootstrap, com_link_test_redux
	, com_link_test_kakao, com_link_test_jpa, com_link_test_mybatis } 
	from 'utils/common/commonLink.ts';

const LinkTest = () => {

	const navigate = useNavigate();

  const linkMyProfile = useCallback(
		(e:React.MouseEvent<HTMLElement>) => {
			navigate("/myProfile");
	}
	, []);

	const linkMoyeroDetail = useCallback(
		(e:React.MouseEvent<HTMLElement>) => {
			navigate("/moyeroDetail");
	}
	, []);

	const linkSigeUp = useCallback(
		(e:React.MouseEvent<HTMLElement>) => {
			navigate("/signUp");
	}
	, []);


	return (
		<div className=''>
			<div className='link_test' onClick={com_link_bootstrap}>
				React Bootstrap URL : https://react-bootstrap.netlify.app/
			</div>
			<div className='link_test' onClick={linkMoyeroDetail}>
				모여라 상세 페이지 / moyeoraDetail Page URL : http://localhost:3000/moyeroDetail
			</div>
			<div className='link_test' onClick={linkMyProfile}>
				마이페이지 / myProfile Page URL : http://localhost:3000/myProfile
			</div>
			<div className='link_test' onClick={linkSigeUp}>
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
