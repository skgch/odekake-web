import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  place: null,
  trip: null
}
const actions = {}
const getters = {}
const mutations = {
  setPlace (state, payload) {
    state.place = payload
  },
  setTrip (state, payload) {
    state.trip = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
