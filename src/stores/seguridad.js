import { defineStore } from 'pinia'

export const useSeguridadStore = defineStore('seguridad', {
  state: () => ({
    companiaFavorita: null,
    usuario: null,
    jwt: null,
  }),

  getters: {
    getCompaniaFavorita(state) {
      return state.companiaFavorita
    }
  },

  actions: {
    setCompaniaFavorita(cia) {
      this.companiaFavorita = cia
    },
    setUsuario(usuario) {
      this.usuario = usuario
    },
    setJwt(jwt) {
      this.jwt = jwt
    }
  },

  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ['companiaFavorita'] },
      { storage: sessionStorage, paths: ['usuario', 'jwt'] },
    ]
  }
})
