import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지
import TestLoginPage from 'pages/test/testPages/TestLoginPage';
import TestLoginInfoPage from 'pages/test/testPages/TestLoginInfoPage';
import TestAdminPage from 'pages/test/testPages/TestAdminPage';

// 레이아웃


function TestJWTRouter() {
  return (

		  	<Routes>
					<Route path="/test/jwt/signIn" element={<TestLoginPage/>} />
        <Route path="/test/jwt/signInInfo" element={<TestLoginInfoPage />} />
        <Route path="/test/jwt/adminPage" element={<TestAdminPage/>} />
			</Routes>

  )
}

export default TestJWTRouter