export const mutations = {
    SET_LOADING_STARTED(state) {
        state.isLoadingStarted = true;
    },
    
    SET_LOADING_COMPLETED(state) {
        state.isLoadingCompleted = true;
    }
}

export default mutations;