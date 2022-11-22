import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil 
  },
  {
    path: '/Boutique',
    name: 'Boutique',
    // route level code-splitting
    // this generates a separate chunk (Boutique.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Boutique" */'../views/Boutique.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
