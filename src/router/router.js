import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import home from '../view/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: ()=> import('../components/Dashboard.vue'),
        },
        {
          path: '/deals',
          name: 'deals',
          component: ()=> import('../components/Deals.vue'),
        },
        {
          path: '/customers',
          name: 'customers',
          component: ()=> import('../components/Customers.vue'),
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: ()=> import('../components/Tasks.vue'),
        },
        {
          path: '/date',
          name: 'date',
          component: ()=> import('../components/Date.vue'),
        },
        {
          path: '/notification',
          name: 'notification',
          component: ()=> import('../components/Notification.vue'),
        },
        {
          path: '/settings',
          name: 'settings',
          component: ()=> import('../components/Settings.vue'),
        },
      ]
    },
    

  ]
})

export default router