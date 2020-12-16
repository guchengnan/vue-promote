import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/reset.css'

import 'ant-design-vue/dist/antd.css'
import AntDesign from 'ant-design-vue'
Vue.use(AntDesign);

import Directives from './tools/directives/index.js'
Vue.use(Directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
