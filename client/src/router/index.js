import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'
import HomePage from '@/views/HomePage'
import ArticleList from '@/views/ArticleList'
import NewsList from '@/views/NewsList'
import ReviewsList from '@/views/ReviewsList'

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
      component: HomePage,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: 'news',
          name: 'NewsList',
          component: NewsList
        },
        {
          path: 'reviews',
          name: 'ReviewsList',
          component: ReviewsList
        }
      ]
    }
  ]
})
