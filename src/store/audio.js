export const audio = {
    state: () => ({
        currentTrack: {},
        instance: null
    }),
    getters: {
        getCurrentTrack(state) {
            return state.currentTrack;
        },
        getInstance(state) {
            return state.instance;
        }
    },
    mutations: {
        changeCurrentTrack(state, data) {
            state.currentTrack = data;
        },
        changeInstance(state, data) {
            state.instance = data;
        }
    }
}