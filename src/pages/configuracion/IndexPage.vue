<template>
  <q-page padding class="q-gutter-sm">
    <q-btn
      color="secondary"
      icon="fact_check"
      label="Variables Generales del Sistema"
      to="/config/usvgs"
    />
    <q-btn
      color="secondary"
      icon="verified_user"
      label="Perfil de Seguridad"
      :to="{ name: 'usgru' }"
    />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
