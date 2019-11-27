import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/solutions',
      name: 'solutions',
      component: () => import('./views/Solutions.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('./views/Careers.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('./views/About-us.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue')
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
