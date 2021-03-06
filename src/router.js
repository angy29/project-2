import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Services from './views/Services.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/photos/:id',
      name: 'photos',
      component: () => import(/* webpackChunkName: "photos" */ './views/Photos.vue')
    }
  ]
})
