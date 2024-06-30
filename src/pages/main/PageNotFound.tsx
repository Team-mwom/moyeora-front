import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';



const PageNotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		alert('잘못된주소입니다. 모여라 페이지로 이동합니다.');
		navigate('/');
	}, [])
	return(<div></div>);
};

export default PageNotFound;
