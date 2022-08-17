<template>
  <router-view />
</template>

<script>
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { useSeguridadStore } from "./stores/seguridad";

export default defineComponent({
  name: "App",
  computed: {
    ...mapState(useSeguridadStore, ["jwt"]),
  },
  watch: {
    jwt(newVal) {
      if (!newVal) {
        this.$router.push({ name: "login" });
      }
    },
  },
});
</script>
