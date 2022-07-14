export const subscribe = {
    namespaced: true,
    state: {
        formState: 0
    },
    mutations: {
        accessForm(state) {
            state.formState = 1
        },
        fillingForm(state) {
            state.formState = 0
        }
    },
    actions: {
        sendRequest({ commit }) {
            console.log('accessForm')
            // Send request to backend
            commit('accessForm')
        }
    }
}