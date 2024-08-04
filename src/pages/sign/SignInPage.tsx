import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAxios } from 'utils/auth/authAxios';
import {useCookies} from 'react-cookie'


export const SignInPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(); 
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
  
     useEffect(() => {
      const kakaoLogin = async () => {
      await axios({//카카오 api를 사용하여 카카오 아이디를 가져오는 과정
        method: "GET",
        url: `/api/all/kakaoToken?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => { //카카오 아이디 성공적으로 가져왔다면
        axios({// 카카오 아이디를 통해 디비검색하고 있으면 토큰을 발급받아서 저장함
          method: "GET",
          url: `/api/all/signIn?kakaoId=${response.data}`,
          headers: {
            "Content-Type": "application/json;charset=utf-8", 
            "Access-Control-Allow-Origin": "*",
          },
        }).then((response) => { //토큰을 정상 적으로 받았다면 
          localStorage.setItem("accessToken", response.data.accessToken);//엑세스토큰 로컬스토리지에 저장
          const expires = new Date();
          expires.setMonth(expires.getMonth() + 1);
          setCookie('refreshToken', response.data.refreshToken, { path: '/', expires });//리프레시토큰 쿠키에 저장
        
          authAxios.post('/api/user/getMyInfo').then((res) => {//사용자 정보를 로컬스토리지에 저장
            const resData = {
              nickName: res.data.nickName,
              profileImg:res.data.profileImg
          }
          
         
            localStorage.setItem("userInfo",JSON.stringify(resData));
            alert("로그인 성공");
            if (localStorage.getItem('returnPath') == null) {
              navigate('/');
            } else {
              const returnPath = localStorage.getItem('returnPath') + "";
              localStorage.removeItem('returnPath');
              navigate(returnPath);
            }
            
          
          })
          
       
        }).catch((err) => { //db에 카카오 아이디가 없으면 카카오 아이디를 가지고 가입페이지로 이동함

          alert('가입후 이용해주세요');
          navigate('/signup', { state: response.data });
        });
  
      
          
      }).catch((err) => { })
    };
    kakaoLogin();
  },[]);

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


