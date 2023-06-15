<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class='wrapper'>
        <nav>
            <h1>Vue ERP</h1>
            
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/users">Users</RouterLink></li>
                <li><RouterLink to="/rooms">Rooms</RouterLink></li>
            </ul>
        </nav>
        <RouterView />
    </div>
  </header>
</template>

<style scoped>
nav {
    width: 10vw;
    height: 100vh;
    font-size: 12px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.1);
}

a {
    padding: 15px;
}

ul {
    list-style-type: none;
    padding: 0;
}

.wrapper {
    display: flex;
}
</style>
