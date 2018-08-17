// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import FontIcon from '@/components/font-icon'
Vue.component('font-icon', FontIcon)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://47.105.116.152:5207'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
