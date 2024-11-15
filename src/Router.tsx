import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MainRouter from 'router/mainRouters/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import "styles/common/common.css";
import PageNotFound from 'pages/main/PageNotFound';
import ProfileRouter from 'router/mainRouters/ProfileRouter';
import SignRouter from 'router/mainRouters/SignRouter';
import MoyeoraRouter from 'router/mainRouters/MoyeoraRouter';
import MemberSettingRouter from 'router/mainRouters/MemberSettingRouter';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {getRoutes(MainRouter)}
        {getRoutes(ProfileRouter)}
        {getRoutes(SignRouter)}
        {getRoutes(MoyeoraRouter)}
        {getRoutes(MemberSettingRouter)}
        <Route path="*" element={<PageNotFound />} /> {/*이친구는 맨밑에 위치 */}
      </Routes>
    </BrowserRouter>
    
  )
}
const getRoutes = (routes:any) => {
  return routes.map((route: any, index: any) => {
      return (
      <Route key={route.path || index} path={route.path} element={route.element}>
        {route.children && getRoutes(route.children)}
      </Route>
    );
  });
};






