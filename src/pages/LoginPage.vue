<template>
  <q-page padding class="bg-pink-4">
    <div class="q-pa-md bg-white" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="usuario"
          :label="$t('form.login.usuario_label')"
          :hint="$t('form.login.usuario_hint')"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || $t('form.required.text'),
          ]"
        />

        <q-input
          type="password"
          filled
          v-model="clave"
          :label="$t('form.login.clave_label')"
          :hint="$t('form.login.clave_hint')"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || $t('form.required.text'),
          ]"
        />

        <div>
          <q-btn
            :label="$t('form.buttons.submit')"
            type="submit"
            color="primary"
            :disable="usuario === '' || clave === ''"
          />
          <q-btn
            :label="$t('form.buttons.reset')"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
//#region IMPORTS
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
//#endregion

//#region DATA
const usuario = ref("");
const clave = ref("");
const accept = ref(false);
const $q = useQuasar();
const $router = useRouter();
//#endregion

//#region METHODS
const onSubmit = () => {
  console.log("Usuario: " + usuario.value);
  console.log("Clave: " + clave.value);
  $q.loading.show({
    message: "Consultando los datos del usuario...",
  });
  setTimeout(() => {
    $router.push({ name: "home" });
    $q.loading.hide();
  }, 5000);
};
const onReset = () => {
  usuario.value = "";
  clave.value = "";
};
</script>
