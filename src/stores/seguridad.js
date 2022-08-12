import { defineStore } from 'pinia'

export const useSeguridadStore = defineStore('seguridad', {
  state: () => ({
    companiaFavorita: null,
  }),

  getters: {
    getCompaniaFavorita(state) {
      return state.companiaFavorita
    }
  },

  actions: {
    setCompaniaFavorita(cia) {
      this.companiaFavorita = cia
    }
  }
})
