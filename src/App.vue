<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComponent />

      <div class="page">
        <RouterView />
      </div>
    </div>
  </header>
</template>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 80px);
}

</style>
