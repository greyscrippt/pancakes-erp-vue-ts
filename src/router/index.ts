import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserManagerView from '../views/UserManagerView.vue';
import RoomManagerView from '../views/RoomManagerView.vue';
import LoginView from '../views/LoginView.vue';
import ApplicationView from '../views/ApplicationView.vue';
import DashboardView from '../views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/app',
      component: ApplicationView,
      children: [
        {
          path: '/',
          name: 'home',
          component: DashboardView,
        },
        {
          path: 'users',
          name: 'users',
          component: UserManagerView
        },
        {
          path: 'rooms',
          name: 'rooms',
          component: RoomManagerView
        },
      ],
    },
  ]
});

export default router;
