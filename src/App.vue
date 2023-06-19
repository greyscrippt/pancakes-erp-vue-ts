<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />

    <div class="page">
      <RouterView />
    </div>
  </header>
</template>
