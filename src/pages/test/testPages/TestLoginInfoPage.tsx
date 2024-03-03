import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsUser } from './IsUser';






const TestLoginInfoPage = () => {

  const navigate = useNavigate();

  useEffect(() => {//로그인 상태를 확인할때 사용
      IsUser().then((data) => {
        console.log(data);
        if (data) {
          alert('로그인 성공');
        } else {
          alert('로그인후 이용하세요');
          navigate("/test/jwt/signIn");
        }
      })
  }
, []);

    const signOut = useCallback(
    (e:React.MouseEvent<HTMLElement>) => {
        localStorage.clear();
        navigate("/test/jwt/signIn");
    }
  ,[]);
	return (
    <div>
      <h3>로그인서공</h3>
      <h3>accessToken</h3>
      <h3>{localStorage.getItem("accessToken")}</h3>
      <h3>refreshToken</h3>
      <h3>{localStorage.getItem("refreshToken")}</h3>

      <input type='button' onClick={signOut} value={'로그아웃'} />
      <a href='/test/jwt/adminpage'><br></br>관리자 페이지로 이동</a>

	</div>
	);
};

export default TestLoginInfoPage;