import Vue from 'vue'
import VueRouter from 'vue-router'
import Logtime from '../views/Logtime.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/logtime',
    name: 'Logtime',
    component: Logtime
  },
  {
    path: '/',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
