import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
import { useCookies } from 'react-cookie';


const TestAdminPage = () => {
  const navigate = useNavigate();
    
  const [cookies, setCookie, removeCookie] = useCookies();
  
  useEffect(() => {
    authAxios.post('/api/admin/isAdmin').then((res) => {  
      if (authException(res, [cookies, setCookie, removeCookie])) {
        
      }
    }).catch((err) => { alert("로그인 후 이용해주세요"); })
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
      <h3>관리자 페이지 관리자만 접근가능</h3>
      <h3>{ localStorage.getItem("name")}</h3>
      <h3>{ localStorage.getItem("nickName")}</h3>
      <h3>{ localStorage.getItem("email")}</h3>
 
            <input type='button' onClick={signOut} value={'로그아웃'}/>
	</div>
	);
};

export default TestAdminPage;
