<template>
  <q-page padding>
    <!-- content -->
    <div class="title">
      <h2><span id="titulo"> Tetris </span></h2>
    </div>
    <div class="score" id="score">0</div>
    <q-btn
      color="primary"
      icon="play"
      label="Star / Pause"
      @click="onClick"
      .id="star-button"
    />
    <div class="grid" id="gamearea">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="sass"></style>
