import service from '@/modules/service'
import * as vueRouter from 'vue-router'

class RouterGuard {
  constructor(public router: vueRouter.Router) {
    this.router = router
  }
  start() {
    this.beforeEach()
  }
  async loginStatusCheck(to: vueRouter.RouteLocationNormalized) {
    const token = localStorage.getItem('token')
    // 未登录
    if (!token) {
      // 无code -> 单点登录
      const code = to.query.code
      if (!code) {
        const authServer = import.meta.env.VITE_APP_AUTHSERVER
        const redirectUrl = location.href
        localStorage.setItem('redirectUrl', redirectUrl)

        location.href = `${authServer}/oauth/authorize?client_id=SampleClientId&client_secret=secret&response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`
      } else {
        // 有code，本地登录获取token
        const res = await service.getToken(code, encodeURIComponent(localStorage.getItem('redirectUrl') || ''))
        if (res.code === service.SUCCESS) {
          service.updateToken(res.msg)
          localStorage.setItem('token', res.msg)
        } else {
          alert(res.msg)
        }
      }
    }
  }
  beforeEach() {
    this.router.beforeEach(async (to: vueRouter.RouteLocationNormalized, from: vueRouter.RouteLocationNormalized) => {
      // 修改页面title
      const pageTitle: any = to.meta && to.meta.title
      if (pageTitle) document.title = pageTitle

      // 登录判断...
      await this.loginStatusCheck(to)

      return true
    })
  }
}

export default RouterGuard
