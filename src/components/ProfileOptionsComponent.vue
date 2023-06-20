<script setup lang='ts'>
import { ref } from 'vue';

import DropdownMenuComponent from './DropdownMenuComponent.vue';

const items = ref(['Hello', 'World']);
const show  = ref(true)

</script>

<template>
  <div class='profile-options'>
    <DropdownMenuComponent :items="items" :show="true"/>
  </div>
</template>

<style scoped>
.profile-options {
  position: absolute;
  top: 50px;
  left: 5px;
}
</style>
