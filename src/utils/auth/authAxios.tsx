import axios from 'axios'



export const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken =localStorage.getItem("accessToken"); 

    try {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    } catch (err:any) {
      alert('eee');
    }
    return config;
  },
  
);


