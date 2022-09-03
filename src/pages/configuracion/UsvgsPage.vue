<template>
  <q-page>
    <q-bar class="bg-white">
      <div class="">
        <q-breadcrumbs class="text-secondary">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="primary" />
          </template>

          <q-breadcrumbs-el label="Inicio" icon="home" to="/" />

          <q-breadcrumbs-el
            label="Configuración"
            icon="settings"
            to="/config"
          />

          <q-breadcrumbs-el
            label="Variables del Sistema"
            icon="fact_check"
            class="cursor-pointer"
            @click="vista = ''"
            v-if="vista !== ''"
          />

          <q-breadcrumbs-el
            label="Variables del Sistema"
            icon="fact_check"
            v-else
          />

          <q-breadcrumbs-el
            :label="`Detalle de variable ${variable.IDVARIABLE}`"
            v-if="vista !== ''"
          />
        </q-breadcrumbs>
      </div>
    </q-bar>
    <q-separator />

    {{ vista }}
    <!-- <q-btn color="primary" icon="undo" label="Regresar" to="/config" /> -->

    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="vista === 'detalle'" class="q-pa-md">
        <div class="text-h5">Detalle de la Variable</div>
        <q-item>
          <q-item-section>
            <q-item-label>{{ variable.IDVARIABLE }}</q-item-label>
            <q-item-label caption lines="2">{{
              variable.DESCRIPCION
            }}</q-item-label>
            <q-item-label
              >Valor de la Variable: {{ variable.DATO }}</q-item-label
            >
            <q-item-label v-if="variable.OBSERVACION"
              >Observación: {{ variable.OBSERVACION }}</q-item-label
            >
            <q-item-label>Estado: {{ variable.ESTADO }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-card-actions>
          <q-btn flat icon="undo" @click="variable = null"> Cancelar </q-btn>
          <q-btn flat color="primary" @click="vista = 'formulario'">
            Editar
          </q-btn>
          <q-btn flat color="negative" @click="onConfirmDelete"> Borrar </q-btn>
        </q-card-actions>
      </div>
    </transition>

    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <q-table
        title="Variables generales del sistema"
        :rows="rows"
        :columns="columns"
        row-key="IDVARIABLE"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
        @request="onRequest"
        binary-state-sort
        :rows-per-page-options="[3, 5, 7, 10, 15, 20, 25, 50, 100]"
        class="q-pa-none q-ma-none"
        flat
        v-show="vista === ''"
      >
        <template v-slot:top-right>
          <q-btn
            color="primary"
            icon="add"
            label="Nueva Variable"
            @click="onNewVariable"
          />
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Buscar"
            clearable
            class="q-pl-xl"
          >
            <template v-slot:append>
              <q-icon
                name="search"
                class="cursor-pointer"
                @click="onRefreshTable"
              />
            </template>
          </q-input>
        </template>

        <template v-slot:body-cell="props">
          <q-td
            :props="props"
            class="cursor-pointer"
            @click="onSelect(props.row)"
          >
            {{ props.value }}
          </q-td>
        </template>
      </q-table>
    </transition>

    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="vista === 'formulario'">
        <q-form @submit="onSubmit" class="row q-col-gutter-xs q-pa-md">
          <div class="col-12 q-col-gutter-xl">
            <q-item>
              <q-item-section v-if="editar">
                <q-item-label caption>Variable</q-item-label>
                <q-item-label>{{ variable.IDVARIABLE }}</q-item-label>
              </q-item-section>

              <q-item-section class="col-4" v-else>
                <q-input
                  v-model="variable.IDVARIABLE"
                  type="text"
                  label="Id. Variable"
                  maxlength="20"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || $t('form.required.text'),
                  ]"
                />
              </q-item-section>
            </q-item>
          </div>
          <div class="col-6">
            <q-input
              v-model="variable.DESCRIPCION"
              type="text"
              label="Descripción"
              maxlength="100"
              :readonly="editar"
              :rules="[
                (val) => (val && val.length > 0) || $t('form.required.text'),
              ]"
            />
          </div>
          <div class="col-6">
            <q-input
              v-model="variable.DATO"
              type="text"
              label="Valor de la variable"
              maxlength="120"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="variable.OBSERVACION"
              type="text"
              label="Observación"
              maxlength="4096"
              autogrow
            />
          </div>

          <q-card-actions>
            <q-btn
              flat
              @click="vista = editar ? 'detalle' : ''"
              icon="undo"
              label="Cancelar"
            />
            <q-btn flat icon="check" color="primary" type="submit">
              Guardar
            </q-btn>
          </q-card-actions>
        </q-form>
      </div>
    </transition>
  </q-page>
</template>

<script setup>
//#region IMPORTS
import { computed, onMounted, ref, watch } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
//#endregion

//#region DATA
const { t } = useI18n();
const variable = ref(null);
const $q = useQuasar();
const columns = ref([
  {
    name: "IDVARIABLE",
    align: "right",
    label: "Identificador",
    field: "IDVARIABLE",
    sortable: true,
  },
  {
    name: "DESCRIPCION",
    required: true,
    label: "Denominación",
    align: "left",
    field: (row) => row.DESCRIPCION,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "DATO",
    required: true,
    label: "Valor",
    align: "left",
    field: (row) => row.DATO,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "OBSERVACION",
    required: true,
    label: "Observación",
    align: "left",
    field: (row) => row.OBSERVACION,
    format: (val) =>
      `${!val ? "" : val?.length > 20 ? val.substring(0, 20) + "..." : val}`,
    sortable: true,
  },
  {
    name: "ESTADO",
    required: true,
    label: "Estado",
    align: "left",
    field: (row) => row.ESTADO,
    format: (val) =>
      `${!val ? "" : val?.length > 20 ? val.substring(0, 20) + "..." : val}`,
    sortable: false,
  },
]);
const rows = ref([]);
const filter = ref("");
const loading = ref(false);
const pagination = ref({
  sortBy: "IDVARIABLE",
  descending: false,
  page: 1,
  rowsPerPage: 7,
  rowsNumber: 0,
});
const vista = ref("");
const editar = ref(true);
//#endregion

//#region METHODS
const onConsultarVariableDEPRECATED = () => {
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
      console.error(err);
    })
    .finally(() => {
      $q.loading.hide();
    });
};

const onRequest = (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;

  const filter = props.filter;

  loading.value = true;

  const parametros = {
    Tabla: "USVGS",
    NumPagina: page,
    TamPagina: rowsPerPage,
    OrdenarPor: sortBy + (descending ? " DESC" : ""),
    StringABuscar: filter,
    ColumnasFiltro: "IDVARIABLE, DESCRIPCION, DATO",
    ColumnasVisibles:
      "IDVARIABLE, DESCRIPCION, DATO, OBSERVACION, IIF(COALESCE(DATO, '') = '', 'Sin Configurar', 'Configurado') AS ESTADO",
  };

  api
    .post("read", parametros)
    .then((res) => {
      const rowsNumber = res.data.result.output.TotalRegistros;
      const returnedData = res.data.result.recordset;
      // console.log("returnedData", returnedData);

      pagination.value.rowsNumber = rowsNumber;

      // clear out existing data and add new
      rows.value.splice(0, rows.value.length, ...returnedData);

      // don't forget to update local pagination object
      pagination.value.page = page;
      pagination.value.rowsPerPage = rowsPerPage;
      pagination.value.sortBy = sortBy;
      pagination.value.descending = descending;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

const onSelect = (row) => {
  variable.value = row;
  editar.value = true;
  vista.value = "detalle";
};

const onSubmit = () => {
  $q.loading.show({
    message: "Guardando la variable de sistema...",
  });

  api
    .post("json", {
      MODELO: "USVGS_CURSO",
      METODO: editar.value ? "UPDATE" : "INSERT",
      PARAMETROS: {
        IDVARIABLE: variable.value.IDVARIABLE,
        DATO: variable.value.DATO,
        DESCRIPCION: editar.value ? undefined : variable.value.DESCRIPCION,
        OBSERVACION: variable.value.OBSERVACION,
      },
    })
    .then((res) => {
      let ok = false;
      res.data.result.recordset.forEach((el) => {
        ok = el.OK === "OK";
      });

      if (ok) {
        $q.notify({
          color: "positive",
          textColor: "white",
          icon: "check",
          message: t("form.saved"),
          progress: true,
          actions: [{ icon: "close", color: "white" }],
        });

        if (editar.value) vista.value = "detalle";
        else {
          filter.value = variable.value.IDVARIABLE;
          vista.value = "";
        }
      } else {
        // errores.value = res.data.result.recordsets[1];
        // haveErrors.value = true;
      }
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      $q.loading.hide();
    });
};

const onNewVariable = () => {
  variable.value = {
    IDVARIABLE: "",
    DESCRIPCION: "",
    DATO: "",
    OBSERVACION: "",
  };
  editar.value = false;
  vista.value = "formulario";
};

const onConfirmDelete = () => {
  $q.dialog({
    class: "bg-negative",
    dark: true,
    title: "Descartar variable de sistema",
    message:
      "¿Confirma que desea realmente eliminar esta variable?, esta acción no se puede deshacer",
    cancel: {
      label: "Cancelar",
    },
    persistent: true,
    ok: {
      label: "Aceptar",
      flat: true,
    },
  }).onOk(() => {
    $q.loading.show({
      message: "Eliminando la variable de sistema...",
    });
    api
      .post("json", {
        MODELO: "USVGS_CURSO",
        METODO: "DELETE",
        PARAMETROS: {
          IDVARIABLE: variable.value.IDVARIABLE,
        },
      })
      .then((res) => {
        let ok = false;
        res.data.result.recordset.forEach((el) => {
          ok = el.OK === "OK";
        });
        if (ok) {
          vista.value = "";
          onRequest({
            pagination: pagination.value,
            filter: filter.value,
          });
        }
      })
      .finally(() => {
        $q.loading.hide();
      });
  });
};

const onRefreshTable = () => {
  onRequest({
    pagination: pagination.value,
    filter: filter.value,
  });
};
//#endregion

//#region HOOKS
onMounted(() => {
  onRequest({
    pagination: pagination.value,
    filter: filter.value,
  });
});
//#endregion

//#region WATCH
watch(
  () => variable.value,
  (val) => {
    if (!val) {
      vista.value = "";
    }
  }
);
//#endregion

//#region COMPUTED
//#endregion
</script>
