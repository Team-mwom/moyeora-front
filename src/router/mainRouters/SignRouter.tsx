import SignUpPage from 'pages/sign/SignUpPage';
import React from 'react';
import {Routes, Route } from 'react-router-dom';

//페이지


// 레이아웃


function SignRouter() {
  return (

  <Routes>
    <Route path="/signup" element={<SignUpPage/>} />
  </Routes>

  )
}

export default SignRouter