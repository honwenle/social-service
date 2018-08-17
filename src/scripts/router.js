import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import list from '@/pages/list'
import product from '@/pages/product'
import report from '@/pages/report'
import source from '@/pages/source'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/report',
      component: report
    },
    {
      path: '/source',
      component: source
    }
  ]
})
