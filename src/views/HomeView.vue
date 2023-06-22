<script setup lang="ts">

import { RouterLink } from 'vue-router';

</script>

<template>
  <main>
    <h1>Home page</h1>
    
    <ul>
      <li><RouterLink to="/login">Login</RouterLink></li>
      <li><RouterLink to="/app">App</RouterLink></li>
    </ul>
  </main>
</template>
