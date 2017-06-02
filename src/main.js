import Vue from 'vue'
import App from './App'
import router from './router'
import 'semantic-ui-css/semantic.min.js'
import 'jquery/dist/jquery.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
