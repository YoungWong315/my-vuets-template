import singleSignOn from '@/modules/sso'
import { ResponseCode } from '@/modules/constant'
const { Success, TokenExpired } = ResponseCode

export function requestSuccessFunc(requestObj: any) {
  return Promise.resolve(requestObj)
}

export function requestFailFunc(requestError: any) {
  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj: any) {
  const data = responseObj.data

  try {
    switch (data.code) {
      case Success:
        // 业务成功
        return data
      case TokenExpired:
        // 登录过期
        singleSignOn()
      default:
        return data
    }
  } catch (error) {
    console.log('interceptor error: ', error)
    return {
      code: 0, // 保证业务端不需要try catch, 一定可以拿到对象并使用code判断
    }
  }
}

export function responseFailFunc(responseError: any) {
  return Promise.reject(responseError)
}
