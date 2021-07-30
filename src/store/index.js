import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeChat: null
  },

  mutations: {
    SELECT_CHAT: (state, payload) => {
      state.activeChat = payload
    }
  },

  getters: {
  },

  actions: {
  },

  modules: {
  },

  plugins: process.env.NODE_END !== 'production' ? [Vuex.createLogger] : []
})
