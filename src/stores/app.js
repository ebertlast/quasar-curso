import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    errores: [],
  }),
  getters: {
    getErrores: (state) => state.errores,
  },
  actions: {
    setErrores(errores = []) {
      this.errores = errores;
    },
  },
});
