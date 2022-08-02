import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import launchRouterGuard from './routerGuard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      // keepAlive: true
    }
  },
]

const router = createRouter({
  // baseFolder('/context/') should be same with the base value in vite.config.ts 
  history: createWebHistory('/context/'),
  routes,
  // 只有一级路由可以使用
  scrollBehavior(to: any, from: any, savedPosition: any) {
    // keep-alive 的组件，保留滚动位置
    if (savedPosition && to.meta.keepAlive && to.meta.keepAlive != undefined) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

launchRouterGuard(router)

export default router
