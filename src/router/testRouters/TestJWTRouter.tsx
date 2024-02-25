import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지
import TestLoginPage from 'pages/test/testPages/TestLoginPage';
import TestLoginInfoPage from 'pages/test/testPages/TestLoginInfoPage';

// 레이아웃


function TestJWTRouter() {
  return (

		  	<Routes>
					<Route path="/test/jwt/signIn" element={<TestLoginPage/>} />
					<Route path="/test/jwt/signInInfo" element={<TestLoginInfoPage/>} />
			</Routes>

  )
}

export default TestJWTRouter