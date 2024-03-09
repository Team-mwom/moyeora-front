import React, { MouseEventHandler } from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';


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
      axios.post('/api/all/login', loginInfo)
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
    <form action='/test/jwt/signInInfo' >
      <div>유저 = id:abc,pw:abc</div>    
      <div>관리자 = id:aa,pw:aa</div>    
        <input name = "memberId" type='text' value={loginInfo!.memberId}
          onChange={changeLoginInfo} /><br></br>
        <input name = "password" type='text' value={loginInfo!.password}
          onChange={changeLoginInfo}/><br></br>
      <input type='button' onClick={signIn} value="로그인" />
      <br></br>
      <a href='/test/jwt/signInInfo'>로그인 완료 패이지</a><span>(로그인 후에만 접근 가능하도록 구현)</span>
    </form>
	);
};

export default TestLoginPage;
