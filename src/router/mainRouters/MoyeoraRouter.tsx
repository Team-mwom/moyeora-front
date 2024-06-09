import React from 'react';

import {Routes, Route} from 'react-router-dom';

import CreateMoyeora from 'pages/moyeora/CreateMoyeoraPage';
import MoyeroDetail from 'pages/moyeora/MoyeoraDetailPage';


const MoyeoraRouter = [
  0//ex{path: '/', element:< Main />},
  {path: '/createMoyeora', element:< CreateMoyeora />},
  {path: '/moyeroDetail', element:< MoyeroDetail />},
];
export default MoyeoraRouter