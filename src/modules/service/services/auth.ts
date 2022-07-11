import axios from '@/modules/service/axios'

/* 获取token */
export const getToken = (code: string, redirectUrl: string) => axios.post('/auth/getToken', {code, redirectUrl})
/* 获取用户信息 */
export const getUserInfo = () => axios.post('/auth/getUserInfo')