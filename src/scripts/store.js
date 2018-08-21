import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailData: {}
  },
  mutations: {
    setDetail(state, data) {
      state.detailData = data
    }
  }
})