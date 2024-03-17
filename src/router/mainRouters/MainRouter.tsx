import React from 'react';
import {Routes, Route } from 'react-router-dom';

import TestMain from 'pages/main/MainPage';
import SearchMain from 'pages/main/SearchMain';

const MainRouter = () => {
  return (
		<Routes>
			<Route path="/" element={<TestMain/>} />
			<Route path="/search/:word" element={<SearchMain/>} />
		</Routes>
  )
}

export default MainRouter