/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Admin from '../components/Admin.vue'
import Overview from '../components/Overview'
import Order from '../components/Order'
import Product from '../components/Product'
import Profile from '../components/Profile'
import { fb } from '../firebase'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  {
    path: '/admin', component: Admin, name: 'admin',
    meta: { requiresAuth: true },
    children: [
      { path: 'overview', component: Overview, name: 'overview' },
      { path: 'order', component: Order, name: 'order' },
      { path: 'product', component: Product, name: 'product' },
      { path: 'profile', component: Profile, name: 'profile' }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
