import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'

import 'bootstrap'
import './assets/css/app.scss'
import 'popper.js'
import { fb } from './firebase'

window.$ = window.jQuery = jQuery

Vue.component('Navbar', require('./components/NavBar.vue').default)


let app = ''
fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});
Vue.config.productionTip = false

