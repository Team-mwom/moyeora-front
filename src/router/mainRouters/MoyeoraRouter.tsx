import React from 'react';
import {Routes, Route} from 'react-router-dom';

import CreateMoyeora from 'pages/moyeora/CreateMoyeoraPage';
import MoyeroDetail from 'pages/moyeora/MoyeoraDetailPage';

const MoyeoraRouter = () => {
  return (
    <Routes>
      <Route path="/createMoyeora" element={<CreateMoyeora/>} />
      <Route path="/moyeroDetail" element={<MoyeroDetail/>} />
    </Routes>
  )
}

export default MoyeoraRouter