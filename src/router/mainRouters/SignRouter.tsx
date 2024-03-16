
import SignUpPage from 'pages/sign/SignUpPage';
import React from 'react';
import {Routes, Route } from 'react-router-dom';

function SignRouter() {
  return (

  <Routes>

    <Route path="/signUp" element={<SignUpPage/>} />

  </Routes>

  )
}

export default SignRouter