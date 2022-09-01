<template>
  <router-view />
  <q-dialog v-model="haveErrors">
    <q-card class="">
      <q-card-section>
        <div class="text-h6">
          Ha ocurrido errores al momento de realizar los cambios en la BD
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list bordered>
          <template v-for="error in errores" :key="error">
            <q-item>
              <q-item-section>{{ error.ERROR }}</q-item-section>
            </q-item>
            <q-separator />
          </template>
        </q-list>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { useSeguridadStore } from "./stores/seguridad";
import { useAppStore } from "./stores/app";
import { api } from "./boot/axios";

export default defineComponent({
  name: "App",
  data() {
    return {
      haveErrors: false,
    };
  },
  computed: {
    ...mapState(useSeguridadStore, ["jwt"]),
    ...mapState(useAppStore, ["errores"]),
  },
  watch: {
    jwt(newVal) {
      if (!newVal) {
        this.$router.push({ name: "login" });
      } else {
        api.defaults.headers.common["Authorization"] = `Bearer ${newVal}`;
      }
    },
    errores(newVal) {
      if (newVal.length > 0) {
        this.haveErrors = true;
      } else {
        this.haveErrors = false;
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
