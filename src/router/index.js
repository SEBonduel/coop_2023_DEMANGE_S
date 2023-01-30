import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersListView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/createConversation',
      name: 'createconversation',
      component: () => import('../views/CreateConversationView.vue')
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: () => import('../views/ConversationView.vue')
    },
    {
      path: '/membre/:id',
      name: 'membre',
      component: () => import('../views/MembreView.vue')
    }
  ]
})

export default router
