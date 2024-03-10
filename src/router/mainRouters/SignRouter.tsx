import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지
import TestLoginInfoPage from 'pages/test/testPages/TestLoginInfoPage';
import TestAdminPage from 'pages/test/testPages/TestAdminPage';
import TestKaKao from 'pages/test/testPages/TestKaKao';
import TestKaKaoRedirect from 'pages/test/testPages/TestKaKaoRedirect';


// 레이아웃


function SignRouter() {
  return (

  <Routes>
    <Route path="/test/jwt/signInInfo" element={<TestLoginInfoPage />} />
    <Route path="/test/jwt/adminPage" element={<TestAdminPage />} />
    <Route path='/test/kakao/main' element={<TestKaKao />} />
    <Route path='/test/kakao/redirect' element={<TestKaKaoRedirect />} />

  </Routes>

  )
}

export default SignRouter