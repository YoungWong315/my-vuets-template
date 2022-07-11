import axios from '@/modules/axios'

class Auth {
  /* 获取token */
  getToken = (code, redirectUrl) => axios.post('/auth/getToken', {code, redirectUrl})
  /* 获取用户信息 */
  getUserInfo = () => axios.post('/auth/getUserInfo')
}

export default Auth