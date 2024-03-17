
import MyProfilePage from 'pages/myProfile/MyProfilePage';
import React from 'react';
import {Routes, Route } from 'react-router-dom';

const MyProfileRouter = () => {
  return (

  <Routes>
    <Route path="/myProfile" element={<MyProfilePage/>} />
  </Routes>

  )
}

export default MyProfileRouter