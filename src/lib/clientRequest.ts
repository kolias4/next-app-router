"use client";
import axios from "axios";
import Cookies from 'js-cookie'

let config = {
  baseURL: "https://dummyjson.com",
  // timeout: 60 * 1000, // Timeout
  //withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
         var token = Cookies.get("token")
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
    console.log(response,"res in interceptor")
    var url = response.config?.url
    if(url === "/auth/login"){
        Cookies.set('token', response.data.token, { expires: 1, path: '/' })

    }

    return response.data;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export const clientRequest = _axios;
