import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BbusyeoraRouter from 'router/mainRouters/BbusyeoraRouter';
import MainRouter from 'router/mainRouters/MainRouter';
import MoyeoraRouter from 'router/mainRouters/MoyeoraRouter';
import TestCRUDRouter from 'router/testRouters/TestCRUDRouter'
import TestJWTRouter from 'router/testRouters/TestJWTRouter';
import SignRouter from 'router/mainRouters/SignRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/common/common.css";

function Router() {
  return (
    <BrowserRouter>
      <MainRouter />
      <BbusyeoraRouter/>
      <MoyeoraRouter />
      <TestCRUDRouter />
      <TestJWTRouter />
      <SignRouter/>


		</BrowserRouter>
  )
}

export default Router