import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    allArticles (state, payload) {
      state.articles = payload
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
    }
  }
})
