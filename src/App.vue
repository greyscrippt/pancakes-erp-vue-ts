<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <h1>Vue ERP</h1>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
    width: 100vw;
    height: 20vh;
    font-size: 12px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
