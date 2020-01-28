import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
import 'bootstrap'
import './assets/css/app.scss'
import 'popper.js'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'
window.Swal = Swal
window.$ = window.jQuery = jQuery

Vue.component('Navbar', require('./components/NavBar.vue').default)
Vue.component('add-to-cart', require('./components/AddToCart.vue').default)
Vue.use(VueFirestore)
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import store from './store'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;


let app = ''
fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
Vue.config.productionTip = false

