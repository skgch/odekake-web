import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  place: null, // selectedPlace
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
  addOrUpdateVisitedPlace (state, payload) {
    const id = payload.place.place_id
    const index = state.visitedPlaces.findIndex(e => e.place.place_id === id)
    if (index === -1) {
      state.visitedPlaces.push(payload)
    } else {
      state.visitedPlaces[index] = payload
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
