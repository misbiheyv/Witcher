import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: () => import('../views/SubscribeForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router