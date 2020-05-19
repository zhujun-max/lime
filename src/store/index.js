import Vue from 'vue'
import Vuex from 'vuex'
//引入子元素
import city from './city'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  //注册
  modules:{
    city
  }
})
