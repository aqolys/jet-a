import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeChat: null,
    searchVisibility: false,
    drafts: {},
    isMobile: false
  },

  mutations: {
    SELECT_CHAT(state, chat) {
      state.activeChat = chat
    },
    SEARCH_TOGGLE(state, payload) {
      state.searchVisibility = payload
    },
    UPDATE_DRAFT(state, { chat, draft }) {
      state.drafts[chat] = draft
    },
    SET_IS_MOBILE(state, payload) {
      state.isMobile = payload
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
