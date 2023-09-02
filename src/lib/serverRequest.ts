import axios from "axios";
import { cookies } from 'next/headers';


let config = {
  baseURL: "https://dummyjson.com",
  // timeout: 60 * 1000, // Timeout
  //withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();

    // Do something before request is sent
         var token = cookieStore.get('token')?.value;
      // add token to header
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;

    }
  ,
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {

    return response.data;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export const serverRequest = _axios;
