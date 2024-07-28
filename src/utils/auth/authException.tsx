import axios from 'axios';


export const authException = (res: any,useCookies:any) => {
 
  const data = res.data;

    if (data == 'success') {
      return true; 
    } else if (data == 'expired' && useCookies != null) {
       const [cookies, setCookie, removeCookie] = useCookies;
      alert('토큰 만료');
      return axios.get('/api/all/refreshAccessToken?refreshToken='+cookies.refreshToken)
        .then((response) => {//재발급
          localStorage.setItem("accessToken", response.data.accessToken);
          removeCookie('refreshToken', {path:'/'});
          const expires = new Date();
          expires.setMonth(expires.getMonth() + 1);
          setCookie('refreshToken', response.data.refreshToken, { path: '/', expires });
          alert('재발급완료')
          return true;
        })
        .catch((error) => { return false });
    }
   
      return true;


};

