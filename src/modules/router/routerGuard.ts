import * as vueRouter from 'vue-router'
import { Auth, ResponseCode, updateToken } from '@/modules/service'
import singleSignOn from '@/modules/sso'

async function checkLoginStatus(to: vueRouter.RouteLocationNormalized) {
  const token = localStorage.getItem('token')
  // 未登录
  if (!token) {
    // 无code -> 单点登录
    const code = to.query.code as string
    if (!code) {
      singleSignOn()
    } else {
      // 有code，本地登录获取token
      const res: any = await Auth.getToken(code, encodeURIComponent(localStorage.getItem('redirectUrl') || ''))
      if (res.code === ResponseCode.Success) {
        updateToken(res.msg)
        localStorage.setItem('token', res.msg)
      } else {
        console.log(res.msg)
      }
    }
  }
}

export default function launchRouterGuard(router: vueRouter.Router) {
  // beforeEach
  router.beforeEach(async (to: vueRouter.RouteLocationNormalized, from: vueRouter.RouteLocationNormalized) => {
    // 修改页面title
    const pageTitle: any = to.meta && to.meta.title
    if (pageTitle) document.title = pageTitle

    // 登录判断...
    // await checkLoginStatus(to)

    return true
  })
}
