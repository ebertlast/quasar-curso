<template>
  <q-page padding>
    <q-btn color="primary" icon="undo" label="Regresar" to="/config" />

    <div class="row q-col-gutter-xs">
      <div class="col-4">
        <q-input v-model="variable" type="text" label="Nombre de la Variable">
          <template v-slot:append>
            <q-icon
              name="search"
              class="cursor-pointer"
              @click="onConsultarVariable"
            />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script setup>
//#region IMPORTS
import { ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
//#endregion

//#region DATA
const variable = ref(null);
const $q = useQuasar();
//#endregion

//#region METHODS
const onConsultarVariable = () => {
  $q.loading.show({
    message: "Consultando la variable de sistema...",
  });

  api
    .post("json", {
      MODELO: "USVGS_CURSO",
      METODO: "GETVARIABLE",
      PARAMETROS: {
        IDVARIABLE: variable.value,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      $q.loading.hide();
    });
};
//#endregion
</script>
