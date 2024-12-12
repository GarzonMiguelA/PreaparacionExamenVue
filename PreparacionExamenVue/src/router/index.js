import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Ejercicio1',
      name: 'Ejercicio1',
      component: () => import('../views/Ejercicio1View.vue'),
    },
    {
      path: '/Ejercicio2',
      name: 'Ejercicio2',
      component: () => import('../views/Ejercicio2View.vue'),
    },
    {
      path: '/Ejercicio3',
      name: 'Ejercicio3',
      component: () => import('../views/Ejercicio3View.vue'),
    },
  ],
})

export default router
