import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const TestKaKaoRedirect = () => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
     useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `/api/all/signIn/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      }).then((response) => { //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
    
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate('/test/jwt/signInInfo');
      });
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
