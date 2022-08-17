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
import { computed, onMounted, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useSeguridadStore } from "src/stores/seguridad";
import { useI18n } from 'vue-i18n'
//#endregion

//#region DATA
const store = useSeguridadStore();
const compania = ref(null);
const usuario = ref("OSOLANO");
const clave = ref("OMAR2020");
const accept = ref(false);
const $q = useQuasar();
const $router = useRouter();
const companiaList = ref([]);
const { t } = useI18n()
//#endregion

//#region METHODS
const onSubmit = () => {
  $q.loading.show({
    message: "Consultando los datos del usuario...",
  });
  api.post('ususu/ingresar', {
    COMPANIA: compania.value.COMPANIA,
    USUARIO: usuario.value,
    CLAVE: clave.value,
  }).then(res => {
    const jwt = res.data.jwt;
    const usuario = res.data.result;

    if (!jwt) {
      $q.notify({
        color: 'negative',
        textColor: 'white',
        icon: 'error',
        message: t('form.login.credenciales_incorrectas'),
        progress: true,
        actions: [{ icon: 'close', color: 'white' }]
      })
    } else {
      store.setJwt(jwt);
      store.setUsuario(usuario);
      $router.push({ name: "home" });
    }
  }).finally(() => {
    $q.loading.hide();
  })
  
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
  }).then(() => {
    if (store.companiaFavorita) {
      compania.value = store.companiaFavorita;
    }
  });
});
//#endregion

//#region WATCHES
watch(() => compania.value, (newVal) => {
  store.setCompaniaFavorita(newVal);
})
//#endregion

//#region COMPUTED
const companiaSelected = computed(() => {
  if(!store.companiaFavorita)
    return 'Sin Compania Seleccionada';
  return store.companiaFavorita.RAZONSOCIAL;
}).value;
//#endregion
</script>

<style></style>