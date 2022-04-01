import axios from "axios";


const api = axios.create({
  baseURL:" https://hack-2k22.herokuapp.com/",
  timeout: 60000,
});

api.interceptors.request.use(
  (config) => {
    const storeToken = null;

    if (storeToken) {
      config.headers.Authorization = "Bearer " + storeToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;
