import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FourOhFour from '../views/FourOhFour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/application',
    name: 'application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Application.vue')
  },
  
  {
    path: '/applications',
    name: 'applications',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Applications.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Preferences.vue')
  },
  {
    path: '/data-dump',
    name: 'data-dump',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataDump.vue')
  },
  {
    // This route must be last in the routes list.
    path: '/*',
    name: 'FourOhFour',
    component: FourOhFour
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'bg-gray-100',
  base: process.env.BASE_URL,
  routes
})

export default router
