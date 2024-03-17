import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const TestKaKaoRedirect = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
     useEffect(() => {
    const kakaoLogin = async () => {
      await axios({//카카오 아이디 가져옴
        method: "GET",
        url: `/api/all/kakaoToken?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => { //카카오 아이디 성공적으로 가져왔다면
        axios({// 카카오 아이디를 통해 디비검색하고 
          method: "GET",
          url: `/api/all/signIn?kakaoId=${response.data}`,
          headers: {
            "Content-Type": "application/json;charset=utf-8", 
            "Access-Control-Allow-Origin": "*",
          },
        }).then((response) => {//있으면 토큰을 발급받아서 저장함
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          navigate('/test/jwt/signInInfo');
        }).catch((err) => { //없으면 카카오 아이디를 가지고 가입페이지로 이동함

          alert('가입후 이용해주세요');
          navigate('/signup', { state: response.data });
        });
  
      
          
      }).catch((err) => { alert('토큰가져오기 실패')})
    };
    kakaoLogin();
  }, []);

	return (
   <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
	);
};

export default TestKaKaoRedirect;
