import { defineStore } from 'pinia'
import service from '@/modules/service'

export const useUserRole = defineStore('userRole', {
  state: () => ({
    userInfo: null,
    userRoleList: null,
  }),
  getters: {
    userId: (state) => state.userInfo.f_Account,
    userName: (state) => state.userInfo.f_RealName
  },
  actions: {
    // userInfo
    async setUserInfo(force = false) {
      if (!this.userInfo || force) {
        const res = await service.getUserInfo()
        if (res.code === service.SUCCESS) {
          this.userInfo = res.data
        }
      }
    },
    // userRole
    async setUserRoleList(force = false) {
      if (!this.userRoleList || force) {
        const res = await service.userRoleGetAuditList()
        if (res.code === service.SUCCESS) {
          this.userRoleList = res.data
        }
      }
    }
  }
})
