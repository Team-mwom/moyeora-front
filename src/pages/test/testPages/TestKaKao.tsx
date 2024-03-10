import React from 'react';


const TastKaKao = () => {
    const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	return (
    <div>
        <a href={KAKAO_AUTH_URL}>카카오로그인</a>
	</div>
	);
};

export default TastKaKao;
