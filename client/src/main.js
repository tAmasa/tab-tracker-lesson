// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
//

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
const opts = {}

export default new Vuetify(opts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  components: {
    App
  },
  template: '<App/>'
  // data () {
  //   return {
  //     activeColor: 'red',
  //     fontSize: 30
  //   }
  // }
}).$mount('#app')
