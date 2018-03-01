import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const store = new Vuex.Store({
  state: {
    articles: [],
    news: [],
    reviews: []
  },
  mutations: {
    allArticles (state, payload) {
      state.articles = payload
    },
    newsArticles (state, payload) {
      state.news = payload
    },
    reviewsArticles (state, payload) {
      state.reviews = payload
    }
  },
  actions: {
    getAllArticles (context) {
      http.get('articles')
      .then(result => {
        console.log(result);
        context.commit('allArticles', result.data.articles)
      }).catch(err => {
        console.log(err);
      })
    },
    getNewsArticles (context) {
      http.get('articles/category/news')
      .then(result => {
        console.log(result);
        context.commit('newsArticles', result.data.articles)
      }).catch(err => {
        console.log(err);
      })
    },
    getReviewsArticles (context) {
      http.get('articles/category/reviews')
      .then(result => {
        console.log(result);
        context.commit('reviewsArticles', result.data.articles)
      }).catch(err => {
        console.log(err);
      })
    },
    registerUser (context, data) {
      http.post('users/signup', data)
      .then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err);
      })
    },
    loginUser (context, data) {
      http.post('users/signin', data)
      .then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err);
      })
    }
  }
})
