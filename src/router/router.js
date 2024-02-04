import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import home from '../view/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    }

  ]
})

export default router