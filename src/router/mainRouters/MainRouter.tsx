import React from 'react';
import Main from 'pages/main/MainPage';
import SearchMain from 'pages/main/SearchMain';
import MoyeoraDetailPage from 'pages/moyeora/MoyeoraDetailPage';


const MainRouter = [
	{path: '/', element:< Main />},
	{path:'/search/:word',element:<SearchMain/>},
	{path:'/detail/:myrSeq',element:<MoyeoraDetailPage />},
];
	
	


export default MainRouter