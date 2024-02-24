import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//페이지
import Main from 'pages/main/MainPage';
import TestMain from 'pages/testMain/TestMainPage'
import Test from 'pages/test/TestPage'
import Redux from 'pages/test/TestReduxPage';
import TestLoginPage from 'pages/test/TestLoginPage';
import TestLoginInfoPage from 'pages/test/TestLoginInfoPage';

// 레이아웃


function Router() {
  return (
   	    <BrowserRouter>
		  	<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/test/" element={<TestMain/>} />
					<Route path="/test/List" element={<Test/>} />
					<Route path="/test/redux" element={<Redux/>} />
					<Route path="/test/jwt/signIn" element={<TestLoginPage/>} />
					<Route path="/test/jwt/signInInfo" element={<TestLoginInfoPage/>} />
				</Routes>
		</BrowserRouter>
  )
}

export default Router