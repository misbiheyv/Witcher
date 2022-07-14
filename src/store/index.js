import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false
  },
  mutations: {
    showModal(state) {
      state.showModal = true
    },
    hideModal(state) {
      state.showModal = false
    }
  },
  actions: {
  },
  modules: {
  }
})
