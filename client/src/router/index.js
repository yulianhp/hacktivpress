import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
