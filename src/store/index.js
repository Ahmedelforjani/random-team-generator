import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: {
      playersList: [],
      matches: {
        playersList: [],
        remaining: 0,
        played: 0,
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
