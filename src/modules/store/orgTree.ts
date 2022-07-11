import { defineStore } from 'pinia'
import { allOrgCode } from '@/modules/constant'
import service from '@/modules/service'

export const useOrgTree = defineStore('orgTree', {
  state: () => ({
    orgTree: null,
    millTree: null,
  }),
  getters: {
    orgTreeWithDefaultOption(state) {
      return [
        {f_FullName: '全部', id: allOrgCode, childrenList: []},
        ...state.orgTree
      ]
    }
  },
  actions: {
    // org
    async setCompany(force = false) {
      if (!this.orgTree || force) {
        const res = await service.orgGetCompanyTree()
        if (res.code === service.SUCCESS) {
          this.orgTree = res.data
        }
      }
    },
    async setDepartment(companyId) {
      if (!companyId) {
        console.error('store setDepartment error: can not get department tree without comanyId')
        return false
      }
      // 查找公司index
      let index = 0
      for (let i = 0; i < this.orgTree.length; i++) {
        if (this.orgTree[i].id == companyId) {
          index = i
          break
        }
      }
      // 该条单位数据已经存在
      if (this.orgTree[index].childrenList.length > 0) {
        return {
          exist: true,
          list: this.orgTree[index].childrenList
        }
      } else {
        const res = await service.orgGetDeptTree(companyId)
        if (res.code === service.SUCCESS) {
          // vant ui 数据 bug fix
          res.data.forEach(item => {
            if (item.childrenList.length === 0) {
              item.childrenList = null
            }
          })
          this.orgTree[index].childrenList = res.data
          return {
            exist: false,
            list: res.data,
          }
        }
      }
    },
    // mill
    async setMillTree(force = false) {
      function removeBlankChilrenList(tree = []) {
        tree.forEach(item => {
          if (item.childrenList.length > 0) {
            removeBlankChilrenList(item.childrenList)
          } else {
            item.childrenList = null
          }
        })
      }
      if (!this.millTree || force) {
        const res = await service.orgGetMillTree()
        if (res.code === service.SUCCESS) {
          let tree = res.data
          removeBlankChilrenList(tree)
          this.millTree = tree
        }
      }
    },
  }
})
