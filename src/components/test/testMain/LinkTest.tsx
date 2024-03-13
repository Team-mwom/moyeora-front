import React from 'react';
import { Link } from 'react-router-dom';

const test_redux = () => {
	window.location.href = '/test/redux';
}

const test_kakao = () => {
	window.location.href = '/test/kakao/main';
}

const test_jpa = () => {
	window.location.href = '/test/List?mybatis=false';
}

const test_mybatis = () => {
	window.location.href = '/test/List?mybatis=true';
}

const signUp = () => {
	window.location.href = '/signUp';
}

const reactBootstrap = () => {
	window.open("https://react-bootstrap.netlify.app/")
}

const LinkTest = () => {
	return (
		<div className=''>
			<div className='link_test' onClick={reactBootstrap}>
				React Bootstrap URL : https://react-bootstrap.netlify.app/
			</div>
			<div className='link_test' onClick={signUp}>
				회원가입 / SignUp Page URL : http://localhost:3000/signUp
			</div>
			<div className='link_test' onClick={test_redux}>
				나의 야심찬 Redux JPA CRUD
			</div>
			<div className='link_test' onClick={test_kakao}>
				카카오 + jwt 로그인 테스트
			</div>
			<div className='link_test' onClick={test_jpa}>
				go to JPA  test page
			</div>
			<div className='link_test' onClick={test_mybatis}>
				go to MyBatis test page
			</div>
		</div>
	);
};

export default LinkTest;
