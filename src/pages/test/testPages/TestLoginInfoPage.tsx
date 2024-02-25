import React from 'react';



const TestLoginInfoPage = () => {

	return (
    <div>
      <h3>로그인서공</h3>
      <h3>accessToken</h3>
      <h3>{localStorage.getItem("accessToken")}</h3>
      <h3>refreshToken</h3>
      <h3>{localStorage.getItem("refreshToken")}</h3>

	</div>
	);
};

export default TestLoginInfoPage;