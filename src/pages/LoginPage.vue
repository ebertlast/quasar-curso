<template>
  <!-- <q-page padding class="bg-indigo-1 flex flex-center"> -->
  <q-page padding class="bg-indigo-1">
    <div class="row q-col-gutter-none shadow-8" style="height: 94vh">
      <div class="col-6 bg-light flex flex-center">
        <q-img
          src="https://placeimg.com/500/300/nature"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          width="400px"
        />
      </div>
      <div class="col-6 bg-dark">
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-select
              v-model="compania"
              :options="companiaList"
              :label="$t('form.login.compania_label')"
              option-label="RAZONSOCIAL"
              option-value="COMPANIA"
              filled
              dark
            />

            <transition
              appear
              enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutRight"
            >
              <q-input
                filled
                v-model="usuario"
                :label="$t('form.login.usuario_label')"
                :hint="$t('form.login.usuario_hint')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('form.required.text'),
                ]"
                dark
                v-if="paso === 1"
                ref="input_usuario"
              />
            </transition>

            <transition
              appear
              enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutRight"
            >
              <div
                class="text-white text-h6"
                v-if="paso > 1 && usuario_identificado?.NOMBRE"
              >
                {{ usuario_identificado?.NOMBRE }}
              </div>
            </transition>

            <transition
              appear
              enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutRight"
            >
              <q-input
                type="password"
                filled
                v-model="clave_krystalos"
                :label="$t('form.login.clave_krystalos_label')"
                :hint="$t('form.login.clave_krystalos_hint')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('form.required.text'),
                ]"
                dark
                v-if="paso === 3"
              />
            </transition>

            <transition
              appear
              enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutRight"
            >
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
                dark
                v-if="paso > 1"
              />
            </transition>

            <transition
              appear
              enter-active-class="animated bounceInLeft"
              leave-active-class="animated bounceOutRight"
            >
              <q-input
                type="password"
                filled
                v-model="confirmar_clave"
                :label="$t('form.login.clave_label')"
                :hint="$t('form.login.clave_hint')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || $t('form.required.text'),
                  (val) =>
                    (val && val === clave) || $t('form.required.diferentes'),
                ]"
                dark
                v-if="paso > 1"
              />
            </transition>

            <div>
              <q-btn
                :label="$t('form.buttons.submit')"
                type="submit"
                color="primary"
                text-color="black"
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
      </div>
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
import { useI18n } from "vue-i18n";
//#endregion

//#region DATA
const store = useSeguridadStore();
const compania = ref(null);
const usuario = ref("");

const clave = ref("");
const confirmar_clave = ref("");

const input_usuario = ref(null);
const clave_krystalos = ref("");

const accept = ref(false);
const $q = useQuasar();
const $router = useRouter();
const companiaList = ref([]);
const { t } = useI18n();
const paso = ref(1);
const usuario_identificado = ref(null);
//#endregion

//#region METHODS
const onSubmit2 = () => {
  $q.loading.show({
    message: "Consultando los datos del usuario...",
  });
  api
    .post("ususu/ingresar", {
      COMPANIA: compania.value.COMPANIA,
      USUARIO: usuario.value,
      CLAVE: clave.value,
    })
    .then((res) => {
      const jwt = res.data.jwt;
      const usuario = res.data.result;

      if (!jwt) {
        $q.notify({
          color: "negative",
          textColor: "white",
          icon: "error",
          message: t("form.login.credenciales_incorrectas"),
          progress: true,
          actions: [{ icon: "close", color: "white" }],
        });
      } else {
        store.setJwt(jwt);
        store.setUsuario(usuario);
        $router.push({ name: "home" });
      }
    })
    .finally(() => {
      $q.loading.hide();
    });
};

const onSubmit = () => {
  switch (paso.value) {
    case 1:
      $q.loading.show({
        message: `Verificando usuario ${usuario.value}...`,
      });

      api
        .get(`ususu/verificar/${compania.value.COMPANIA}/${usuario.value}`)
        .then((res) => {
          if (res.data.result.recordset.length <= 0) {
            $q.dialog({
              title: t("form.login.usuario_no_encontrado_titulo", {
                username: usuario.value,
              }),
              message: t("form.login.usuario_no_encontrado_mensaje"),
              ok: {
                label: t("form.buttons.ok"),
                color: "secondary",
              },
            });
          } else {
            res.data.result.recordset.forEach((el) => {
              usuario_identificado.value = el;
            });
            usuario_identificado.value.REGISTRADO = 0;

            if (usuario_identificado.value.REGISTRADO * 1 === 0) {
              $q.dialog({
                title: t("form.login.usuario_no_registrado_titulo"),
                message: t("form.login.usuario_no_registrado_mensaje"),
                ok: {
                  label: t("form.buttons.ok"),
                  color: "secondary",
                },
              }).onOk(() => {
                paso.value = 3;
              });
            }

            console.log(usuario_identificado.value);
          }
        })
        .finally(() => {
          $q.loading.hide();
        });

      break;
    default:
      break;
  }
};

const onReset = () => {
  usuario.value = "";
  clave.value = "";
  clave_krystalos.value = "";
  paso.value = 1;

  setTimeout(() => {
    input_usuario.value.select();
  }, 200);
};
//#endregion

//#region HOOKS
onMounted(() => {
  if (store.jwt) {
    $router.push({ name: "home" });
  }

  setTimeout(() => {
    input_usuario.value.select();
  }, 200);

  api
    .get("cia/")
    .then((res) => {
      companiaList.value = res.data.result.recordset;
    })
    .then(() => {
      if (store.companiaFavorita) {
        compania.value = store.companiaFavorita;
      }
    });
});
//#endregion

//#region WATCHES
watch(
  () => compania.value,
  (newVal) => {
    store.setCompaniaFavorita(newVal);
  }
);
//#endregion

//#region COMPUTED
const companiaSelected = computed(() => {
  if (!store.companiaFavorita) return "Sin Compania Seleccionada";
  return store.companiaFavorita.RAZONSOCIAL;
}).value;

//#endregion
</script>

<style>
.bg-light {
  background: linear-gradient(
    60deg,
    rgb(106, 220, 200) 0%,
    rgb(106, 220, 200) 94%
  );
}

.bg-dark {
  background: linear-gradient(
    60deg,
    rgb(97, 111, 128) 0%,
    rgb(33, 46, 63) 94%
  ) !important;
}
</style>
