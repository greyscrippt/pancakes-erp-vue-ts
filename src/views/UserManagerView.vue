<script setup lang="ts">
import Modal from '../components/ModalComponent.vue';
import CreateUserForm from '../components/forms/CreateUserForm.vue';

import { ref } from 'vue';

const showModal = ref(false);

const users = ref([
  { name: 'Michelle Angello', role: 'Admin' },
  { name: 'Michelle Angello', role: 'Admin' }
]);
</script>

<template>
  <div>
    <h4>User Manager</h4>

    <button class="primary" @click="showModal = true">Add</button>

    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Create room</h3>
        </template>

        <template #body>
          <CreateUserForm />
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
          <th class="table-cell-one">Name</th>
          <th>Role</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users">
          <td>{{ item.name }}</td>
          <td>{{ item.role }}</td>
          <td><button class="primary">View</button></td>
          <td><button class="secondary">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
