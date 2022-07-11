import axios from 'axios'

import {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc,
} from './interceptor'

const baseURL = import.meta.env.VITE_APP_BASEURL

// 默认配置
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  maxContentLength: 2000,
  /*允许携带cookie*/
  withCredentials: false, // 表示跨域请求时是否需要使用凭证, 默认false
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': localStorage.getItem('token') || ''
  },
})

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入失败拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
