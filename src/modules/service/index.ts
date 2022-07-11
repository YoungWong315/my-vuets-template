import axios from '@/modules/service/axios'
export function updateToken(token: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 返回code
export { ResponseCode } from '@/modules/constant'

// 接口
export * as Auth from './services/auth'

// 类型
export * as TypeUser from './types/user'

