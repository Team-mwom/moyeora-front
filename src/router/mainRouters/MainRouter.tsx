import React from 'react';
import Main from 'pages/main/MainPage';
import SearchMain from 'pages/main/SearchMain';



const MainRouter = [
	{path: '/', element:< Main />},
	{path:'/search/:word',element:<SearchMain/>},
];
	
	


export default MainRouter