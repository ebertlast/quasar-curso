<template>
  <router-view />
</template>

<script>
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { useSeguridadStore } from "./stores/seguridad";
import { api } from "./boot/axios";

export default defineComponent({
  name: "App",
  computed: {
    ...mapState(useSeguridadStore, ["jwt"]),
  },
  watch: {
    jwt(newVal) {
      if (!newVal) {
        this.$router.push({ name: "login" });
      } else {
        api.defaults.headers.common["Authorization"] = `Bearer ${newVal}`;
      }
    },
  },
  mounted() {
    if (!this.jwt) {
      this.$router.push({ name: "login" });
    } else {
      api.defaults.headers.common["Authorization"] = `Bearer ${this.jwt}`;
    }
  },
});
</script>
