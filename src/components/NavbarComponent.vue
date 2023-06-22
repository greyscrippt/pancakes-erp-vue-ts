<script setup lang='ts'>
import { RouterLink } from 'vue-router';

import ProfileOptionsComponent from './ProfileOptionsComponent.vue'
</script>

<template>
  <nav>
    <div class="navbar-start">
      <img class='navbar-title-icon' src='https://i.pinimg.com/originals/52/60/1a/52601a56340f49dbedb019704f12f7db.png'/>
      <h1>Pancakes</h1>

      <ul>
        <li><RouterLink active="active-link" to="/app">Dashboard</RouterLink></li>
        <li><RouterLink active="active-link" to="/app/users">Users</RouterLink></li>
        <li><RouterLink active="active-link" to="/app/rooms">Rooms</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="profile-wrapper">
        <h4>Username</h4>
        <img
          class="profile-picture"
          width="30"
          height="30"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
        <ProfileOptionsComponent />
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 0 0 0 10px;
  text-align: bottom;
  text-decoration: none;
  background-color: white;
  padding: 8px;
  border-radius: 50px 50px 50px 50px;
}

a:hover {
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateY(3px);
  transition: ease-in-out 100ms;
}

.active-link {
  background-color: rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 40px;
  margin: 0 30px 0 0;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: flex;
  
  align-items: center;
}

.navbar-start {
  display: flex;
  width: 100%;
}

.navbar-end {
  display: flex;
}

.navbar-title-icon {
  width: 50px;
  height: 50px;
  margin-right: 8px;
}

.profile-wrapper {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}

.profile-picture {
  margin-left: 10px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
}

.profile-picture:hover {
  transform: scale(1.1);
  transition: ease-in-out 180ms;
  cursor: pointer;
}

.profile-picture:active {
  transform: scale(0.9);
  transition: ease-in-out 50ms;
}
</style>
