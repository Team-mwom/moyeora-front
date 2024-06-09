import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BbusyeoraRouter from 'router/mainRouters/BbusyeoraRouter';
import MainRouter from 'router/mainRouters/MainRouter';
import MoyeoraRouter from 'router/mainRouters/MoyeoraRouter';
import SignRouter from 'router/mainRouters/SignRouter';
import MyProfileRouter from 'router/mainRouters/MyProfileRouter';

import TestCRUDRouter from 'router/testRouters/TestCRUDRouter'
import TestJWTRouter from 'router/testRouters/TestJWTRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/common/common.css";

function Router() {
  return (
    <BrowserRouter>
      <MainRouter />
      <BbusyeoraRouter/>
      <MoyeoraRouter />
      <SignRouter/>
      <MyProfileRouter/>

      <TestCRUDRouter />
      <TestJWTRouter />
		</BrowserRouter>
  )
}

export default Router