// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './scripts/router'
// import store from './scripts/store'
import axios from 'axios'
require('./scripts/filter')

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import FontIcon from '@/components/font-icon'
import PageTitle from '@/components/page-title'
Vue.component('font-icon', FontIcon)
Vue.component('page-title', PageTitle)

let baseurl = 'http://47.105.116.152:5207'
Vue.config.productionTip = false
axios.defaults.baseURL = baseurl
Vue.prototype.$http = axios
Vue.prototype.$baseUrl = baseurl + '/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
