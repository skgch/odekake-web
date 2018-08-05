import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  placeName: ''
}
const actions = {}
const getters = {}
const mutations = {
  setPlaceName (state, payload) {
    state.placeName = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
