<script lang='ts' setup>

import { ref } from 'vue';

const username = ref();
const role = ref();

</script>

<template>
    <div>
        <h3>Username</h3>
        <input type="text" v-model="username">
        
        <h3>Role</h3>
        <input type="text" v-model="role">
    </div>
</template>
