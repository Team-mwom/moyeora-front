import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지

import TestMain from 'pages/main/MainPage'


// 레이아웃


function MainRouter() {
  return (

		  	<Routes>
					<Route path="/" element={<TestMain/>} />
			</Routes>

  )
}

export default MainRouter