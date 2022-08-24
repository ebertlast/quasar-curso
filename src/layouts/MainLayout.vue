<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item clickable @click="onCerrarSesion">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-arrow-right-from-bracket" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cerrar Sesión</q-item-label>
            <q-item-label caption>Salir del Sistema</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { setCssVar } from "quasar";
import EssentialLink from "components/EssentialLink.vue";
import { useSeguridadStore } from "src/stores/seguridad";

const linksList = [
  {
    title: "Configuración",
    caption: "Módulo de Configuración",
    icon: "settings",
    link: "/config",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  methods: {
    onCerrarSesion() {
      // alert("Cerrar Sesión");
      this.store.setJwt(null);
    },
  },

  mounted() {
    setCssVar("primary", "#1976D2");
  },

  setup() {
    const store = useSeguridadStore();
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      store,
    };
  },
});
</script>
