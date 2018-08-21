// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './scripts/router'
import axios from 'axios'
require('./scripts/filter')

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import FontIcon from '@/components/font-icon'
import PageTitle from '@/components/page-title'
Vue.component('font-icon', FontIcon)
Vue.component('page-title', PageTitle)

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
