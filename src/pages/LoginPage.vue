<template>
  <q-page padding class="bg-indigo-1 flex flex-center">
    <div class="q-pa-md bg-white" style="width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-select
          v-model="compania"
          :options="companiaList"
          :label="$t('form.login.compania_label')"
          option-label="RAZONSOCIAL"
          option-value="COMPANIA"
          filled
        />

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
import { onMounted, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useSeguridadStore } from "src/stores/seguridad";
//#endregion

//#region DATA
const store = useSeguridadStore();
const compania = ref(null);
const usuario = ref("");
const clave = ref("");
const accept = ref(false);
const $q = useQuasar();
const $router = useRouter();
const companiaList = ref([]);
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
//#endregion

//#region HOOKS
onMounted(() => {
  api.get("cia/").then((res) => {
    companiaList.value = res.data.result.recordset;
  })
});
//#endregion

//#region WATCHES
watch(() => compania.value, (newVal, oldVal) => {
  console.log("Nuevo Valor CIA: ", newVal);
  console.log("Anterior Valor CIA: ", oldVal);
})
//#endregion
</script>
