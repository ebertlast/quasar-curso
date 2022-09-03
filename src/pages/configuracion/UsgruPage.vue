<template>
  <q-page padding>
    <!-- detalle del item -->
    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <!-- content -->
      <div v-if="vista === 'detalle'" class="q-pa-md">
        <!-- <h5>configura grupo de seguridad</h5> -->
        <div class="text-h5">Detalles del grupo</div>
        <q-item>
          <q-item-section>
            <q-item-label>Codigo del Grupo: {{ grupo_obj.GRUPO }}</q-item-label>
            <q-item-label caption lines="2">
              Nombre del Grupo de seguridad:
              {{ grupo_obj.NOMBRE }}</q-item-label
            >
            <q-item-label
              >Ambito MTTO del Grupo: {{ grupo_obj.AMBITOMTTO }}</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-separator />

        <q-card-actions>
          <q-btn flat icon="undo" @click="grupo_obj = null"> Cancelar </q-btn>
          <q-btn flat color="primary" @click="vista = 'formulario'">
            Editar
          </q-btn>
          <q-btn flat color="negative" @click="onConfirmDelete"> Borrar </q-btn>
        </q-card-actions>
      </div>
    </transition>
    <!-- listado de items -->
    <transition
      appear
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <q-table
        title="Lista de Grupos de Seguridad"
        :rows="rows"
        :columns="columns"
        row-key="GRUPO"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
        @request="onRequest"
        binary-state-sort
        :rows-per-page-options="[3, 5, 7, 10, 15, 20, 25, 50]"
        class="q-pa-none q-ma-none"
        flat
        v-show="vista === ''"
      >
        <template v-slot:top-right>
          <q-btn
            color="primary"
            icon="add"
            label="Nuevo Grupo"
            @click="onNewGrupo"
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
                <q-item-label caption>Grupo de Seguridad</q-item-label>
                <q-item-label>{{ grupo_obj.GRUPO }}</q-item-label>
              </q-item-section>

              <q-item-section class="col-4" v-else>
                <q-input
                  v-model="grupo_obj.GRUPO"
                  type="text"
                  label="Grupo de Seguridad"
                  maxlength="8"
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
              v-model="grupo_obj.NOMBRE"
              type="text"
              label="Nombre del Grupo"
              maxlength="40"
              :readonly="editar"
              :rules="[
                (val) => (val && val.length > 0) || $t('form.required.text'),
              ]"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="grupo_obj.AMBITOMTTO"
              type="text"
              label="Ambito MTTO"
              maxlength="20"
              autogrow
            />
          </div>

          <q-card-actions>
            <q-btn flat @click="onFormCancel" icon="undo" label="Cancelar" />
            <q-btn flat icon="check" color="primary" type="submit">
              Guardar
            </q-btn>
          </q-card-actions>
        </q-form>
      </div>
    </transition>
  </q-page>
</template>

<script setup >
//#region IMPORTS
import { computed, onMounted, ref, watch } from "vue";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
//#endregion

//#region DATA
const { t } = useI18n();
const grupo_obj = ref(null);
const grupo_bck = ref(null);
const $q = useQuasar();
const columns = ref([
  {
    name: "GRUPO",
    align: "left",
    label: "Identificador",
    field: "GRUPO",
    sortable: true,
  },
  {
    name: "NOMBRE",
    required: true,
    label: "Nombre Grupo",
    align: "left",
    field: (row) => row.NOMBRE,
    format: (val) => val,
    sortable: true,
  },
  {
    name: "AMBITOMTTO",
    required: true,
    label: "Ambito",
    align: "left",
    field: (row) => row.AMBITOMTTO,
    format: (val) => `${val || ""}`,
    sortable: true,
  },
]);
const rows = ref([]);
const filter = ref("");
const loading = ref(false);
const pagination = ref({
  sortBy: "GRUPO",
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
    message: "Consultando los grupos de Seguridad...",
  });

  api
    .post("json", {
      MODELO: "USGRU_CURSO",
      METODO: "GETGRUPO",
      PARAMETROS: {
        GRUPO: grupo_obj.value,
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
    Tabla: "USGRU",
    NumPagina: page,
    TamPagina: rowsPerPage,
    OrdenarPor: sortBy + (descending ? " DESC" : ""),
    StringABuscar: filter,
    ColumnasFiltro: "GRUPO, NOMBRE, AMBITOMTTO",
    ColumnasVisibles: "GRUPO, NOMBRE, AMBITOMTTO",
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
  // console.log(">>>>>" + row.GRUPO);
  grupo_obj.value = row;
  grupo_bck.value = JSON.parse(JSON.stringify(row));
  editar.value = true;
  vista.value = "detalle";
};

const onSubmit = () => {
  $q.loading.show({
    message: "Guardando el Grupo de seguridad del sistema...",
  });

  api
    .post("json", {
      MODELO: "USGRU_CURSO",
      METODO: editar.value ? "UPDATE" : "INSERT",
      PARAMETROS: {
        GRUPO: grupo_obj.value.GRUPO,
        NOMBRE: editar.value ? undefined : grupo_obj.value.NOMBRE,
        AMBITOMTTO: grupo_obj.value.AMBITOMTTO,
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
          filter.value = grupo_obj.value.GRUPO;
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

const onNewGrupo = () => {
  grupo_obj.value = {
    GRUPO: "",
    NOMBRE: "",
    AMBITOMTTO: "",
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
      "¿Confirma que desea realmente eliminar este grupo de seguridad?, esta acción no se puede deshacer",
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
      message: "Eliminando el grupo de seguridad del sistema...",
    });
    api
      .post("json", {
        MODELO: "USGRU_CURSO",
        METODO: "DELETE",
        PARAMETROS: {
          GRUPO: grupo_obj.value.GRUPO,
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

const onFormCancel = () => {
  grupo_obj.value.AMBITOMTTO = grupo_bck.value.AMBITOMTTO;
  vista.value = editar.value ? "detalle" : "";
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
  () => grupo_obj.value,
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
