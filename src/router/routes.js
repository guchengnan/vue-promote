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
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/vuex/index.vue')
  },
  {
	path: '/authority',
    name: 'Authority',
    component: () => import(/* webpackChunkName: "authority" */ '../views/authority/index.vue')
  },
]

export default routes