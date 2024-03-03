import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BbusyeoraRouter from 'router/mainRouters/BbusyeoraRouter';

//페이지

import MainRouter from 'router/mainRouters/MainRouter';
import MoyeoraRouter from 'router/mainRouters/MoyeoraRouter';
import TestCRUDRouter from 'router/testRouters/TestCRUDRouter'
import TestJWTRouter from 'router/testRouters/TestJWTRouter';

// 레이아웃


function Router() {
  return (
    <BrowserRouter>
      <MainRouter />
      <BbusyeoraRouter/>
      <MoyeoraRouter/>
      <TestCRUDRouter />
      <TestJWTRouter/>
		</BrowserRouter>
  )
}

export default Router