import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const store = new Vuex.Store({
  state: { },
  actions: {
    
  }
})
