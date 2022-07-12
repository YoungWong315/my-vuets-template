import { defineStore } from 'pinia'
import { Auth } from '@/modules/service'

export const useMain = defineStore('main', {
  state: () => ({
    data: null,
    userInfo: {}
  }),
  getters: {

  },
  actions: {
  }
})