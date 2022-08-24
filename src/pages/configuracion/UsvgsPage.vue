<template>
  <q-page>
    <!-- <q-btn color="primary" icon="undo" label="Regresar" to="/config" /> -->

    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div v-if="variable" class="q-pa-md">
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
          <q-btn flat color="primary"> Editar </q-btn>
          <q-btn flat color="negative"> Borrar </q-btn>
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
        v-show="!variable"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Buscar"
            clearable
          >
            <template v-slot:append>
              <q-icon name="search" />
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
  </q-page>
</template>

<script setup>
//#region IMPORTS
import { onMounted, ref } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
//#endregion

//#region DATA
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
</script>
