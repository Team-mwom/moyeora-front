import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지

import TestMain from 'pages/test/testMain/TestMainPage'
import Test from 'pages/test/testPages/TestPage'
import Redux from 'pages/test/testPages/TestReduxPage';


// 레이아웃


function TestCRUDRouter() {
  return (

		  	<Routes>
					<Route path="/test/" element={<TestMain/>} />
					<Route path="/test/List" element={<Test/>} />
					<Route path="/test/redux" element={<Redux/>} />
			</Routes>

  )
}

export default TestCRUDRouter