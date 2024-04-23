import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = ['application/json;charset=UTF-8']

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
