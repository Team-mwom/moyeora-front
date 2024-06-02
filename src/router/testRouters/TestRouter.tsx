import React from 'react';

//페이지

import TestMain from 'pages/test/testMain/TestMainPage'
import Test from 'pages/test/testPages/TestPage'
import Redux from 'pages/test/testPages/TestReduxPage';
import TestLoginInfoPage from 'pages/test/testPages/TestLoginInfoPage';
import TestAdminPage from 'pages/test/testPages/TestAdminPage';
import TestKaKaoRedirect from 'pages/test/testPages/TestKaKaoRedirect';
import TestSlicePage from 'pages/test/testPages/TestSlicePage';


// 레이아웃




const TestRouter = [
  {path: '/test/', element:<TestMain />},
  {path: '/test/List', element:<Test />},
  {path: '/test/redux', element: <Redux /> },
  {path: '/test/jwt/signInInfo', element:<TestLoginInfoPage />},
  {path: '/test/jwt/adminPage', element:<TestAdminPage />},
  {path: '/test/kakao/main', element:<TestKaKaoRedirect />},
  {path: '/test/TestSlicePage', element:<TestSlicePage />},
  
];
export default TestRouter
