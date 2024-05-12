import React from 'react';
import {Routes, Route} from 'react-router-dom';

import CreateMoyeora from 'pages/moyeora/CreateMoyeoraPage';

const MoyeoraRouter = () => {
  return (
    <Routes>
      <Route path="/createMoyeora" element={<CreateMoyeora/>} />
    </Routes>
  )
}

export default MoyeoraRouter