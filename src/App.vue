<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>ERP</h1>

        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/users">Users</RouterLink></li>
          <li><RouterLink to="/rooms">Rooms</RouterLink></li>
        </ul>
      </nav>

      <div class="page">
        <RouterView />
      </div>
    </div>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  margin: 20px;
  margin-bottom: 5px;
  width: calc(100vw - 80px);
  height: 10vh;
  font-size: 12px;
  text-align: left;
  background-color: slategray;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.3);
}

a {
  padding: 15px;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 80px);
}
</style>
