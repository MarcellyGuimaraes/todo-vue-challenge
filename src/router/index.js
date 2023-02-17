import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/active',
    name: 'active',
    component: () => import('../views/ActiveView.vue'),
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('../views/CompletedView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
