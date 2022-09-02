<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <q-header elevated :style="bgGradient">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer = !toggleLeftDrawer" />

        <q-toolbar-title> Configuración </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="toggleLeftDrawer" show-if-above bordered>
      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view v-slot="{ Component }">
        <transition appear enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
//#region IMPORTS
import { computed, onBeforeMount, ref } from "vue";
import { getCssVar, setCssVar } from "quasar";
import EssentialLink from "src/components/EssentialLink.vue";
//#endregion

//#region DATA
const toggleLeftDrawer = ref(false);
const linksList = ref([
  {
    title: "Inicio",
    caption: "Menú Principal",
    icon: "home",
    link: "/",
  },
  {
    title: "Variables",
    caption: "Variables del Sistema",
    icon: "fact_check",
    link: "/config/usvgs",
  },
  {
    title: "Perfil de Seguridad",
    caption: "Perfil de Seguridad",
    icon: "fact_check",
    link: "/config/usgru",
  },
  {
    title: "Perfil de Seguridad/Permisos",
    caption: "Permisos del perfil de Seguridad",
    icon: "fact_check",
    link: "/config/usgruh",
  },
]);
//#endregion

//#region HOOKS
onBeforeMount(() => {
  setCssVar("primary", "#F77E4F");
  setCssVar("secondary", "#0f60b5");
});
//#endregion

//#region COMPUTED
const bgGradient = computed(() => {
  return `background: linear-gradient(60deg, ${getCssVar(
    "primary"
  )} 0%, ${getCssVar("secondary")} 94%);`;
});
//#endregion
</script>
