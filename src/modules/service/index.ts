import axios from '@/modules/service/axios'
export function updateToken(token: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 返回值
export { responseCode } from '@/modules/constant'

// 接口
export * as Auth from './services/auth'

