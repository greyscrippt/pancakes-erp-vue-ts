<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps({
  show: Boolean,
  items: Array<any>,
});
const show    = ref();

</script>

<template>
  <div v-if='show' v-for='item in props.items'>
    <div class='menu-item'>
      <!-- {{ item }} -->
      Hello
    </div>   
  </div>
</template>

<style scoped>

.menu-item {
  background-color: white;
}

</style>
