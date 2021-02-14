import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/match',
    name: 'match',
    component: () => import(/* webpackChunkName: "Match" */ '../views/Match.vue')
  },
  {
    path: '/match/start',
    name: 'startMatch',
    component: () => import(/* webpackChunkName: "Start Match" */ '../views/StartMatch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
