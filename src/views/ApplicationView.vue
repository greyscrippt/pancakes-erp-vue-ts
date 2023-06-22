<script setup lang='ts'>

import { RouterView } from 'vue-router';
import NavbarComponent from '../components/NavbarComponent.vue';

</script>

<template>
  <div>
    <NavbarComponent />

    <div class='page'>
      <RouterView />
    </div>
  </div>
</template>
