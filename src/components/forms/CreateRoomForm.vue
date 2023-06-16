<script lang="ts" setup>
import { ref } from 'vue';

const username = ref();
</script>

<template>
  <div>
    <h3>Room name</h3>
    <input type="text" v-model="username" />
  </div>
</template>
