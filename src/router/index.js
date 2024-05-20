import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'


import Home from '../views/Home.vue'
import LandDetails from '../views/LandDetails.vue'
import LandSearch from '../views/LandSearch.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'registration',
    component: Registration
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'landsearch',
    component: LandSearch
  },
  {
    path: '/details',
    name: 'landDetails',
    component: LandDetails
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
