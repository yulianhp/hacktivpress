import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },{
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
