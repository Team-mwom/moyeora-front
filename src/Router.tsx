import React, {useEffect, useState,Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/main/MainPage';
import Test from 'pages/test/TestPage';

// 레이아웃


function Router() {
  return (
   	    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/test/" element={<Test/>} />
				</Routes>
		</BrowserRouter>
  )
}

export default Router