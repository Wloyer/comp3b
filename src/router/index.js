import { createRouter, createWebHistory } from 'vue-router'
import acceuil from '../views/acceuil.vue'
import boutique from'../views/boutique.vue'

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: () => import('../views/acceuil.vue')  
  },
  {
    path: '/',
    name: 'boutique',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/boutique.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
