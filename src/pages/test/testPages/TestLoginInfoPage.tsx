import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
import { useCookies } from 'react-cookie';







const TestLoginInfoPage = () => {

  const navigate = useNavigate();
 
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as string) || [];
  

  const [cookies, setCookie, removeCookie] = useCookies();


  useEffect(() => {
    authAxios.post('/api/user/isUser').then((res) => {
      if (authException(res, [cookies, setCookie, removeCookie])) {

    
   
      }
    }).catch((err) => { alert('로그인 후 이용해주세요') })
     
  }
    , []);

    const signOut = useCallback(
    (e:React.MouseEvent<HTMLElement>) => {
        localStorage.clear();
        removeCookie('refreshToken', {path:'/'});
        navigate("/test/kakao/main");
    }
  ,[]);
	return (
    <div>
      <h3>로그인서공</h3>
      <h3>accessToken</h3>
      <h3>{localStorage.getItem("accessToken")}</h3>
      <h3>refreshToken</h3>
      <h3>{cookies.refreshToken}</h3>
      <h3>{ userInfo.name}</h3>
      <h3>{ userInfo.nickName}</h3>
      <h3>{ userInfo.email}</h3>
    

      <input type='button' onClick={signOut} value={'로그아웃'} />
      <a href='/test/jwt/adminpage'><br></br>관리자 페이지로 이동</a>

	</div>
	);
};

export default TestLoginInfoPage;