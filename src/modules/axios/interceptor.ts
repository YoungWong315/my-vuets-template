import { singleSignOn } from '@/modules/sso'
import { config } from '@/modules/service/config'
const { SUCCESS, TOKEN_EXPIRED } = config

export function requestSuccessFunc(requestObj: any) {
  // isDev && console.info('request', `url: ${requestObj.url}`, requestObj)
  return Promise.resolve(requestObj)
}

export function requestFailFunc(requestError: any) {
  // 自定义发送请求失败逻辑，断网，请求发送监控等
  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj: any) {
  // isDev && console.info('response', responseObj)
  const data = responseObj.data

  try {
    switch (data.code) {
      case SUCCESS:
        // 业务成功
        return data
      case TOKEN_EXPIRED:
        // 登录过期
        singleSignOn()
      default:
        // 需要抛一个统一的异常
        // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
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
  // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
  return Promise.reject(responseError)
}
