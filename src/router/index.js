import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddUserView.vue')
  },
  {
    path: '/addCandidate',
    name: 'addCandidate',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddCandidateView.vue')
  },
  {
    path: '/userDashboard',
    name: 'userDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserDashboardView.vue')

  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
