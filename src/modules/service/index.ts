import axios from '@/modules/service/axios'
export function updateToken(token: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

// 接口
export * as Auth from './services/auth'

// 类型
export { ResponseCode } from './types/http'
export type { User } from './types/user'

