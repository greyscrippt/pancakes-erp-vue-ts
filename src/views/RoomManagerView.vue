<script setup lang="ts">
import Modal from '../components/ModalComponent.vue';
import CreateRoomForm from '../components/forms/CreateRoomForm.vue';

import { ref } from 'vue';

const showModal = ref(false);

const rooms = ref([
  { name: 'Das Auto', isOccupied: true },
  { name: 'Herr Osvald', isOccupied: false }
]);
</script>

<template>
  <div>
    <h4>Room Manager</h4>

    <button class="primary" @click="showModal = true">Add</button>

    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Create room</h3>
        </template>

        <template #body>
          <CreateRoomForm />
        </template>

        <template #footer>
          <div class="modal-buttons">
            <button class="primary" @click="showModal = false">Cancel</button>
            <div class="modal-buttons-separator" />
            <button class="secondary" @click="showModal = false">Confirm</button>
          </div>
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
          <td class="table-cell-one">{{ item.name }}</td>
          <td>{{ item.isOccupied ? 'Yes' : 'No' }}</td>
          <td><button class="primary">View</button></td>
          <td><button class="secondary">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
