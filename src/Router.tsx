import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//페이지
import Main from 'pages/main/MainPage';
import Test from 'pages/test/TestPage';
import Redux from 'pages/test/TestReduxPage';

// 레이아웃


function Router() {
  return (
   	    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/test/" element={<Test/>} />
					<Route path="/test/redux" element={<Redux/>} />
				</Routes>
		</BrowserRouter>
  )
}

export default Router