<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>ERP</h1>

        <ul>
          <li><RouterLink active="active-link" to="/">Home</RouterLink></li>
          <li><RouterLink active="active-link" to="/users">Users</RouterLink></li>
          <li><RouterLink active="active-link" to="/rooms">Rooms</RouterLink></li>
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
  height: fit-content;
  font-size: 12px;
  text-align: left;
  background-color: slategray;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.3);
}

a {
  margin: 0 0 0 30px;
  text-align: bottom;
  text-decoration: none;
  background-color: white;
  padding: 8px;
  border-radius: 4px;
}

a:hover {
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateY(5px);
}

.active-link {
  background-color: rgba(0, 0, 0, 0.3);
}

h1 {
  margin: 0 30px 0 0;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 80px);
}
</style>
