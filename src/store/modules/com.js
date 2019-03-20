const state = {
  uuid: null,
  isLoading: false,
  city: '上海'
}

const getters = {}

const mutations = {
  uuid (state, payload) {
    state.uuid = payload
  },
  isLoading (state, payload) {
    state.isLoading = payload
  },
  city (state, payload) {
    state.city = payload
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
