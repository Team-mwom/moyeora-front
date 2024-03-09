import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsAdmin } from './IsAdmin';


const TestAdminPage = () => {
    
   useEffect(() => {//로그인 상태를 확인할때 사용
      IsAdmin().then((data) => {
        console.log(data);
        if (data) {
          alert('로그인 성공');
        } else {
          alert('관리자로 로그인 해주세요');
          navigate("/test/jwt/signIn");
        }
      })
  }
, []);



  const navigate = useNavigate();
    const signOut = useCallback(
    (e:React.MouseEvent<HTMLElement>) => {
        localStorage.clear();
        navigate("/test/jwt/signIn");
    }
  ,[]);
	return (
    <div>
            관리자 페이지 관리자만 접근가능
            <input type='button' onClick={signOut} value={'로그아웃'}/>
	</div>
	);
};

export default TestAdminPage;
