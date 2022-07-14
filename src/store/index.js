import { createStore } from 'vuex'
import { subscribe } from './subscribe.module.js';

export default createStore({
    state: {
        showModal: false,
        headerType: 0
    },
    mutations: {
        showModal(state) { state.showModal = true },
        hideModal(state) { state.showModal = false },
        setHeaderTypeMain(state) { state.headerType = 0 },
        setHeaderTypeSubscribe(state) { state.headerType = 1 }
    },
    modules: {
        subscribe
    }
})
