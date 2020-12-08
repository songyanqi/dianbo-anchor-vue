import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hall',
    name: 'Hall',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MyPlayHall/MyPlayHall')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
