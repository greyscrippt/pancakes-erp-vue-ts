<script setup lang="ts">
import Modal from '../components/ModalComponent.vue'
import CreateRoomForm from '../components/forms/CreateRoomForm.vue'

import { ref } from 'vue'

const showModal = ref(false)

const rooms = ref([
  { name: 'Das Auto', isOccupied: true },
  { name: 'Herr Osvald', isOccupied: false }
])
</script>

<template>
  <div class="usermanager">
    <h4>Room Manager</h4>

    <button @click="showModal = true">Add</button>

    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Create room</h3>
        </template>

        <template #body>
          <CreateRoomForm />
        </template>

        <template #footer>
          <button @click="showModal = false">Cancel</button>
          <button @click="showModal = false">Confirm</button>
        </template>
      </Modal>
    </Teleport>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupied</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rooms">
          <td>{{ item.name }}</td>
          <td>{{ item.isOccupied ? 'Yes' : 'No' }}</td>
          <td><button>View</button></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  text-align: left;
}

th,
td {
  border: 1px solid black;
  margin: 0;
}

.usermanager {
  padding: 50px;
}
</style>
