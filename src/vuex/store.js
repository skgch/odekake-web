import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  place: null,
  trip: null,
  placeIdList: []
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
  addPlaceId (state, payload) {
    if (!state.placeIdList.includes(payload)) {
      state.placeIdList.push(payload)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
