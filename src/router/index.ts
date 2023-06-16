import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserManagerView from '../views/UserManagerView.vue'
import RoomManagerView from '../views/RoomManagerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UserManagerView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomManagerView
    }
  ]
})

export default router
