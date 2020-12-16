import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
	path: '/',
	redirect: '/log'
  },
  {
    path: '/log',
    name: 'Log',
    component: () => import(/* webpackChunkName: "home" */ '../views/log/index.vue')
  },
  {
    path: '/request',
    name: 'Request',
    component: () => import(/* webpackChunkName: "request" */ '../views/request/index.vue')
  },
  {
    path: '/directives',
    name: 'Directives',
    component: () => import(/* webpackChunkName: "directives" */ '../views/directives/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
