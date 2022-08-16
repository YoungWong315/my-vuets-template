import { defineStore } from 'pinia'

export const useKAComponent = defineStore('kaComponent', {
  state: () => ({
    components: ['Example'] as string[],
  }),
  getters: {

  },
  actions: {
    addComponents(key: string) {
      if (!this.components.includes(key)) this.components.push(key)
    },
    removeComponents(key: string) {
      const index = this.components.indexOf(key)
      if (index !== -1) this.components.splice(index, 1)
    }
  }
})
