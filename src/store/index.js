import { createStore } from 'vuex'
import { subscribe } from './subscribe.module.js';

export default createStore({
    state: {
        showModal: false
    },
    mutations: {
        showModal(state) { state.showModal = true },
        hideModal(state) { state.showModal = false },
    },
    modules: {
        subscribe
    }
})
