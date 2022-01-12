// Les actions actent des mutations
export const actions = {
    setLoadingStarted({ commit }) {
        commit('SET_LOADING_STARTED');
    },

    setLoadingCompleted({ commit }) {
        commit('SET_LOADING_COMPLETED');
    }
}

export default actions;