import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  place: null,
  trip: null,
  visitedPlaces: []
}
const actions = {}
const getters = {}
const mutations = {
  setPlace (state, payload) {
    state.place = payload
  },
  setTrip (state, payload) {
    state.trip = payload
  },
  addVisitedPlace (state, payload) {
    const id = payload.place.place_id
    if (!state.visitedPlaces.find(e => e.place.place_id === id)) {
      state.visitedPlaces.push(payload)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
