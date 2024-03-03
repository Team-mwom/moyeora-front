import React from 'react';
import {Routes, Route } from 'react-router-dom';

import TestMain from 'pages/main/MainPage'

function MainRouter() {
  return (
		<Routes>
			<Route path="/" element={<TestMain/>} />
		</Routes>
  )
}

export default MainRouter