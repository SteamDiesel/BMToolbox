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
    path: '/calculator',
    name: 'calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calculator.vue')
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
    path: '/tinkering',
    name: 'tinkering',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tinkering.vue')
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
    path: '/print-application',
    name: 'print-application',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrintApplication.vue')
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
  linkActiveClass: 'bg-gray-900 text-blue-200',
  base: process.env.BASE_URL,
  routes
})

export default router
