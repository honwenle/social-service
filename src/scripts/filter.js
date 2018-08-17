import Vue from 'vue'
import dateFormat from './date'

Vue.filter('dateFormat', dateFormat)
Vue.filter('sqlDate', (d) => {
  return dateFormat(new Date(d), 'YYYY-MM-DD')
})