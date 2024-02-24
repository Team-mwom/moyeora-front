import React, { MouseEventHandler } from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


interface LoginInfo{
		memberId: string,
		password: string
}

const TestLoginPage = () => {

	const [loginInfo, setLoginInfo] = useState<LoginInfo >({memberId:'',password:''})



  const signIn =
    (e: React.MouseEvent<HTMLElement>) => {
      const target: any = e.target;
      const form = target.form;
      axios.post('/api/login', loginInfo)
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          console.log(localStorage);
          form.submit();
        }
        )
        .catch(() => {
          alert('로그인 실패');
        });
    };

    
    


  const changeLoginInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const form = target.form;
      setLoginInfo({ memberId: form!.memberId.value, password: form!.password.value });
    }
  ,[]);
    
    
    
 
  

	return (
    <form action='/test/jwt/signInInfo'>
      <div>id:abc,pw:abc</div>    
        <input name = "memberId" type='text' value={loginInfo!.memberId}
          onChange={changeLoginInfo} /><br></br>
        <input name = "password" type='text' value={loginInfo!.password}
          onChange={changeLoginInfo}/><br></br>
        <input type='button' onClick={signIn} value="로그인"/>
    </form>
	);
};

export default TestLoginPage;
