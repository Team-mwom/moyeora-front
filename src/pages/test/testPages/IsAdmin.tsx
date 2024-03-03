import axios from 'axios'



const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken =localStorage.getItem("accessToken"); // Cookies를 이용해 accessToken을 가져옵니다.

    try {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (err:any) {
      
    }
    return config;
  },
  
);


export const IsAdmin = async () => {
  try {
    const url = '/api/admin/isAdmin';
    await instance.post(url);

    }catch(e:any){
       return false;
  }
  return true;
  
};