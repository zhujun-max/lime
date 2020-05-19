import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios库
import axios from 'axios'
Vue.prototype.axios=axios


//制作vue过滤器 调用热映电影api
Vue.filter('setWH',(url,arg)=>{
  //通过正则转义原api的w.h
  return url.replace(/w\.h/,arg);
});

// 创建全局组件
import Scroller from '@/components/Scroller';
Vue.component('Scroller',Scroller)

import Loading from '@/components/Loading';
Vue.component('Loading',Loading)



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
